import {useState, useEffect, useMemo, useCallback, useRef} from 'react';
import "../App.css";
import TodoHeader from "./TodoHeader";
import TodoFilter from "./TodoFilter";
import TodoInput from "./TodoInput";
import TodoList from "./TodoLIst";
import TodoFooter from "./TodoFooter";
import {isNull, timeStamp} from "../common/CmmnFunc";
import * as Axios from "../axios/Todo.jsx";

function Todos() {
    // 시퀀스
    const nextId = useRef(1);

    // 상태
    const [states, setStates] = useState({
        todo: '',
        todos: [],
        filter: 'all',
        attachFiles: [],
    });

    // 할일 입력 함수
    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSubmit(e);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (isNull(states.todo)) {
            alert("할 일을 입력하세요.");
            return false;
        }
        onInsert(states.todo);
    };

    const onInsert = (text) => {
        const todo = {
            idx: nextId.current,
            text: text.trim(),
            done: false,
            regDate: timeStamp(),
            attachFiles: states.attachFiles
        };

        console.log("calling onInsert");
        console.log(states.attachFiles)
        console.log(todo)
        console.log("calling onInsert");

        Axios.add(todo).then((res) => {
            Axios.search({filter: 'all'}).then((res) => {
                setStates((states) => ({
                    ...states,
                    todos: res.data,
                    todo: '',
                }));
                nextId.current++;
            }).catch((error) => {
                console.log(error);
            });
        }).catch((error) => {
            console.log(error);
        });
    };

    // 할일 모두 삭제 함수
    const onClearAll = useCallback(() => {
        Axios.removeAll().then((res) => {
            setStates((states) => ({
                ...states,
                todos: [],
                todo: '',
            }));
            nextId.current = 1;
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    // 토글 함수
    const onToggle = useCallback((seq) => {
        let done = false;
        setStates((states) => ({
            ...states,
            todos: states.todos.map((mapper) => {
                if (mapper.idx === seq) {
                    done = !mapper.done;

                    Axios.modify({...mapper, done})

                    return {...mapper, done}
                } else {
                    return mapper;
                }
            })
        }));

    }, []);

    // 삭제 함수
    const onRemove = useCallback((seq) => {
        Axios.remove({idx: seq});
        setStates((states) => ({
            ...states,
            todos: states.todos.filter((mapper) => (mapper.idx != seq))
        }));
    }, []);

    // 검색 필터
    const onChangeFilter = useCallback((filter) => {
        Axios.search({filter}).then((res) => {
            setStates((states) => ({
                ...states,
                todos: res.data,
                todo: '',
            }));
        }).catch((error) => {
            console.log(error);
        });

        setStates((states) => ({
            ...states,
            filter: filter
        }));

    }, [states.filter, states.todos]);

    // 수정 함수
    const onEdit = useCallback((seq) => {
        setStates((states) => ({
            ...states,
            todos: states.todos.map((mapper) => (mapper.idx === seq ? {...mapper, edit: true} : {
                ...mapper,
                edit: false
            }))
        }));
    }, []);
    const onBlur = useCallback((seq) => {
        setStates((states) => ({
            ...states,
            todos: states.todos.map((mapper) => (mapper.idx === seq ? {...mapper, edit: false} : {
                ...mapper,
                edit: false
            }))
        }));
    }, []);

    const onEditTodo = useCallback((seq, text, edit) => {
        setStates((states) => ({
            ...states,
            //todos: states.todos.map((mapper) => (mapper.idx === seq ? {...mapper, text: e.target.value} : mapper)),
            todos: states.todos.map((mapper) => {
                if (mapper.idx === seq) {
                    if(!edit) Axios.modify({...mapper, text});
                    return {...mapper, text, edit}
                } else {
                    return mapper;
                }
            })
        }));
    }, []);

    useEffect(() => {
        Axios.search({filter: 'all'}).then((res) => {
            setStates((states) => ({
                ...states,
                todos: res.data,
                todo: '',
            }));
            nextId.current = isNull(res.data[0].idx) ? 1 : parseInt(res.data[0].idx) + 1;
            console.log("nextId.current=[" + nextId.current + "]");
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div>
            <TodoHeader/>

            <TodoFilter states={states} onChangeFilter={onChangeFilter}/>

            <TodoInput states={states}
                       setStates={setStates}
                       onInsert={onInsert}
                       onSubmit={onSubmit}
                       onKeyPress={onKeyPress}/>

            <TodoList states={states}
                      onRemove={onRemove}
                      onToggle={onToggle}
                      onEdit={onEdit}
                      onBlur={onBlur}
                      onEditTodo={onEditTodo}/>

            <TodoFooter onClearAll={onClearAll}/>
        </div>
    )
}

export default Todos;

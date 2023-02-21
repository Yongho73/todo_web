import {useState, useEffect, useMemo, useRef} from 'react';
import "../App.css";

function TodoItem(props) {
    const onKeyDown = (e) => {
        if(e.key === "Escape") {
            props.onBlur(props.todo.idx);
        } else if(e.key === "Enter"){
            props.onEditTodo(props.todo.idx, props.todo.text, false);
        }
    }
    return (
        <div className="item">
            <input type="checkbox" checked={props.todo.done} onChange={() => props.onToggle(props.todo.idx)}/>
            {" "} {props.index + 1}{" "}.{" "}
            {props.todo.edit && (
                <input onKeyDown={onKeyDown} autoFocus onBlur={()=>props.onBlur(props.todo.idx)} style={{width:"60%"}} value={props.todo.text} onChange={(e) => props.onEditTodo(props.todo.idx, e.target.value, true)}/>
            )}
            {!props.todo.edit && (
                <span onDoubleClick={() => props.onEdit(props.todo.idx)}>{props.todo.text}</span>
            )}
            <button className="btnModify" type="button" onClick={() => props.onEditTodo(props.todo.idx, props.todo.text, false)}>수정</button>
            <button className="btnDelete" type="button" onClick={() => props.onRemove(props.todo.idx)}>삭제</button>
        </div>
    )
}

export default TodoItem;

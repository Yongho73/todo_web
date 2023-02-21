import {useState, useEffect, useMemo} from 'react';
import "../App.css";
import TodoItem from "./TodoItem";

function TodoList(props) {
    return (
        <div className="list">
            {props.states.todos.map((todo, index) => (<TodoItem index={index} todo={todo} key={todo.idx} onToggle={props.onToggle} onRemove={props.onRemove} onEdit={props.onEdit} onBlur={props.onBlur} onEditTodo={props.onEditTodo}/>))}
        </div>
    )
}

export default TodoList;
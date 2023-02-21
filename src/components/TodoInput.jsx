import {useState, useEffect, useMemo, useCallback} from 'react';
import FileUpload from "../common/FileUpload";
import "../App.css";

function TodoInput(props) {
    return (
        <div className="input">
            <input className="btnInputBox"
                   placeholder="할 일을 입력하세요."
                   value={props.states.todo}
                   onKeyDown={(e) => props.onKeyPress(e)}
                   onChange={(e) => props.setStates({...props.states, todo: e.target.value})}/>
            <button className="btnAdd" type="button" onClick={(e) => props.onSubmit(e)}>추가</button>
            <FileUpload states={props.states} setStates={props.setStates}/>
        </div>
    )
}

export default TodoInput;

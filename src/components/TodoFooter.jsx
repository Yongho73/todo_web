import {useState, useEffect, useMemo} from 'react';
import "../App.css";

function TodoFooter({onClearAll}) {
    return (
        <div className="footer">
            <button className="btnRemove" type="button" onClick={() => onClearAll()}>모두삭제</button>
        </div>
    )
}

export default TodoFooter;

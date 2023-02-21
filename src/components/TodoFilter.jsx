import {useState, useEffect, useMemo, useCallback} from 'react';
import "../App.css";

function TodoFilter(props) {
    return (
        <div>
            <input type="radio" name="filter" value="all"  onChange={() => props.onChangeFilter('all')}  checked={props.states.filter === 'all' ? true : false}/> 전체
            <input type="radio" name="filter" value="ing"  onChange={() => props.onChangeFilter('ing')}  checked={props.states.filter === 'ing' ? true : false}/> 미완료
            <input type="radio" name="filter" value="done" onChange={() => props.onChangeFilter('done')} checked={props.states.filter === 'done' ? true : false}/> 완료
        </div>
    )
}

export default TodoFilter;

import axios from 'axios';
import {timeStamp} from "../common/CmmnFunc.jsx";

export function add(param) {

    let formData = new FormData();
    formData.append('idx', param.idx);
    formData.append('text', param.text);
    formData.append('done', param.done);
    formData.append('regDate', param.regDate);
    formData.append('attachFiles', param.attachFiles);

    console.log("calling add");
    console.log(param.attachFiles)

    return axios.postForm('/api/add', formData);
}

export function search(param) {
    return axios.post('/api/search', param);
}

export function modify(param) {
    return axios.post('/api/modify', param);
}

export function remove(param) {
    return axios.post('/api/remove', param);
}

export function removeAll() {
    return axios.get('/api/removeAll');
}
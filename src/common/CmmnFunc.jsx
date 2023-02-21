export function isNull(str) {

    if (typeof (str) == 'object' && str == {}) return true;
    if (str == null) return true;
    if (str == 'null') return true;
    if (str == '') return true;
    if (typeof (str) == 'undefined') return true;
    if (new String(str).valueOf() == 'undefined') return true;
    if (str == null) return true;

    let vChekStr = new String(str);

    if (typeof (str) == 'string' && str.trim() == '') return true;
    if (vChekStr == null) return true;
    if (vChekStr.toString().length == 0) return true;
    if ((typeof (str) == 'boolean' && str == false)) return true;
    if (new String(str).valueOf() == 'false') return true;

    return false;
}

export function timeStamp(){
    function pad(n) { return n<10 ? "0"+n : n }
    const d=new Date()
    return d.getFullYear()+"-"+
        pad(d.getMonth()+1)+"-"+
        pad(d.getDate())+" "+
        pad(d.getHours())+":"+
        pad(d.getMinutes())+":"+
        pad(d.getSeconds())
}
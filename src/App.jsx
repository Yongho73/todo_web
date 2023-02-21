import {useState, useEffect, useMemo} from 'react';
import reactLogo from './assets/react.svg';
import Todos from "./components/Todos";

/**
 *
 * 1. function(){} = ()=>{}
 * 2. for of 문
 * 3. 비구조화할당 {name:name_, price:price_} = {name:"americano", price:"3000"}; console.log(name); console.log(price);
 * 4. 컬렉션 Map, Set
 * 5. 매개변수 : 전개 연산자 (...) function(...), 기본값 funtion(b=10)
 * 6. 템플릿 리터럴 : 역따움표 ₩....${}....₩
 * 7. 전개 연산자 :
 *      - 변수 : const a = [1,2,3]; [...a, 4] = [1,2,3,4] = a.push(...[4])
 *      - 함수 : const b = (a,b,c) => {...} = b(...a)
 *      - 배열 최대값 : Math.max(...a)
 * 8. 프로미스 :
 *      - var promise = new Promise((resolve, reject)=>{...}).then((response)=>{}).catch((error)=>{}).finally(()=>{...});
 *      - Promise.all(iterable).then... : 모든 처리가 성공시 다음작없 수행
 *      - Promise.race(iterable).then... : 모든 처리가 성공시 다음작없 수행
 * 9. 배열 :
 *      - 초기화 : var a = [] = new Array()*
 *      - 길이 : a.length
 *      - 루프 : a.forEach(function or value)
 *      - toString(), push(), pop(), shift(), unshift()
 *      - 삭제 : delete a[0] -> empty 로 바뀜
 *      - 연결 : a.splice(추가위치, 제거위치, ...)
 *      - 병합 : a.concat(...)
 *      - 새로운배열 : a.slice(from, to) 원본은 유지
 *      - 정렬 : a.sort(), a.reverse()
 *      - Math.max.apply, Math.min.apply
 *      - a.map((value, index)=>(...)) 각 요소에 대해 함수를 수행해 새로운 배열로 만든다.
 *      - a.filter(function)
 *      - a.reduce(function), a.reduceRight(function)
 *      - a.every(function) 모두 테스트, a.some(function) 일부 테스트
 *      - a.indexOf(), a.lastIndexOf(), a.find(), a.findIndex()
 *  10. async await
 *  11. 조건부 연산자
 *      const isTrue = true;
 *      return (
 *          <>
 *              {isTrue && <h1>진실</h1>}
 *          <>
 *      )
 *  12. 라이프사이클 (클래스형)
 *      1) constructor(props) : 컴포넌트 마운트 전
 *      2) getDerivedStateFromProps(nextProps, prevState) : 최초 마운트와 업데이트시 props로부터 파생된 state를 가져옵니다. 즉 props로 받아온 것을 state에 넣어주고 싶을때 사용합니다.
 *      3) render() : this.props, this.state 사용가능
 *      4) componentDidMount() : 컴포넌트 마운트된 직후
 *      5) shouldComponentUpdate(nextProps, prevState) : props 또는 state 가 새로운 값으로 업데이트되어 랜더링 발생 직전
 *      6) componentDidUpdate(nextProps, prevState) : 컴포너트 업데이트 직후
 *      7) componentWillUnmount() : 컴포넌트 마운트 제거되기 직전
 *
 *      초기화 : constructor -> getDerivedStateFromProps -> render -> componentDidMount
 *      업데이트 : getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate
 *      소멸 : componentWillUnmount
 *
 * 13. Hook 종류 (함수형)
 *      1) useState : 상태를 관리
 *      2) useEffect : 처음 랜더링 후 수행 (componentDidMount + componentDidUpdate + componentWillUnmount)
 *          useEffect(() => {}); // 렌더링 결과가 실제 돔에 반영된 후마다 호출
 *          useEffect(() => {}, []); // 컴포넌트가 처음 나타날때 한 번 호출
 *          useEffect(() => {}, [의존성1, 의존성2, ..]); // 조건부 effect 발생, 의존성 중 하나가 변경된다면 effect는 항상 재생성됩니다.
 *          useEffect(()=>{
 *              console.log("call useEffect["+count+"]");
 *              return ()=>{
 *                  console.log("직전["+count+"]");
 *              }
 *          },[count]);
 *      3) useReducer : 기존 상태를 분리해 새로운 상태를 관리
 *      4) useRef
 *      5) useMemo : 이전 계산값을 보관 const totalcount = useMemo(()=>(count+5), [count]);
 *      6) useCallback : 함수 중복 호출 방지
 *         const onSave = useCallback(() => {
 *              console.log(count);
 *         }, [count]);
 *
 * @returns {JSX.Element}
 * @constructor
 */

function App() {
    return <Todos/>
}

export default App;

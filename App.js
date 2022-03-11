/* eslint-disable* Warning 표시 없애기*/

import React, { useState } from 'react'; // 리액트 내장함수인 state를 갖다쓰겠습니다
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';



function App() {

  // ES6 Destruction 문법 
  // state 만의 장점 : 웹이 App처럼 동작하게 만들고 싶어서. 변경이 될 때. 글 제목이 변경이 될 수 있다. state는 변경되면 재렌더링이 된다. 
  //var [a,b] = [10,100]; //array내의 각각의 데이터를 넣고 싶다. 10을 a에, 100을 b에 
  // 자주 바뀌는, 중요한 데이터를 변수 말고 state에 저장해서 쓸 것 
  // (블로그 제목은 수시로 바뀌지 않으니 state로 할 필요가 없다)

  let [글제목,글제목변경] = useState(['처음 하는 철학 공부','나는 당신이 아픈 게 싫습니다','어쩌다 정신과 의사']); // a,b변수를 만들겠습니다 useState에 있던 변수 2개 각각 저장 a에는 실제 데이터, b에는 변경할 데이터
  let [추천,추천변경]=useState(0); // useState(1번째 변수의 초기값 : 따봉의 초기값)
  let [추천2,추천변경2]=useState(0);
  let [추천3,추천변경3]=useState(0);
  let [반대,반대변경]=useState(0);
  let [반대2,반대변경2]=useState(0);
  let [반대3,반대변경3]=useState(0);
  //let posts = '오늘의 맛집'; // 데이터 바인딩 : 데이터를 HTML에 꽂는 것 
  //추천변경(10); // 따봉 state가 10이 된다. 따봉변경(대체할 데이터)

  return (
    <div className="App">
     <div className="black-nav">
       <div style={{color:'skyblue', fontSize:'30px'}}>
        B O O K L O G 
        </div>
      </div>
      
      
    <div className="list">
     {/* <- JSX 코드 주석 : 추천 누를때마다 1 증가시키기 state로 만드는게 좋음*/}
      <h3>{ 글제목[0] }   <span onClick={()=>{추천변경(추천+1)}}>👍</span> {추천} <span onClick={()=>{반대변경(반대+1)}}>👎</span> {반대} </h3>
      {/* <div>
        <Link to="./https://blog.naver.com/tmdal0303/222668956190">
         
          </Link>
      </div>     
      {/*추천 누를때마다 콘솔창에 1 출력시키기
      <span onClick={()=> {console.log(1)}}>👍</span>0</h3>*/}
      
     
      <p>2022년 3월 8일 발행</p>
      <hr/>  
    </div>

    <div className="list">
      <h3>{ 글제목[1] }  <span onClick={()=>{추천변경2(추천2+1)}}>👍</span> {추천2} <span onClick={()=>{반대변경2(반대2+1)}}>👎</span> {반대2} </h3>
      <p>2022년 2월 18일 발행</p>
      <hr/>  
    </div>

    <div className="list">
      <h3>{ 글제목[2] }   <span onClick={()=>{추천변경3(추천3+1)}}>👍</span> {추천3} <span onClick={()=>{반대변경3(반대3+1)}}>👎</span> {반대3} </h3>
      <p>2022년 2월 14일 발행</p>
      <hr/>  
    </div>
  </div>
    

  );
}

export default App;

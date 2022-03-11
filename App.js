/* eslint-disable* Warning 표시 없애기*/

import React, { useState } from 'react'; // 리액트 내장함수인 state를 갖다쓰겠습니다
import logo from './logo.svg';
import './App.css';



function App() {

  // ES6 Destruction 문법 
  // state 만의 장점 : 웹이 App처럼 동작하게 만들고 싶어서. 변경이 될 때. 글 제목이 변경이 될 수 있다. state는 변경되면 재렌더링이 된다. 
  //var [a,b] = [10,100]; //array내의 각각의 데이터를 넣고 싶다. 10을 a에, 100을 b에 
  // 자주 바뀌는, 중요한 데이터를 변수 말고 state에 저장해서 쓸 것 
  // (블로그 제목은 수시로 바뀌지 않으니 state로 할 필요가 없다)

  let [글제목,글제목변경] = useState(['강남 맛집 추천','강남 우동 맛집','오늘은 날씨가 꾸리꾸리합니다']); // a,b변수를 만들겠습니다 useState에 있던 변수 2개 각각 저장 a에는 실제 데이터, b에는 변경할 데이터
  let[따봉,따봉변경]=useState(0);
  let posts = '오늘의 맛집'; // 데이터 바인딩 : 데이터를 HTML에 꽂는 것 
  //따봉변경(10); // 따봉 state가 10이 된다. 따봉변경(대체할 데이터)

  return (
    <div className="App">
     <div className="black-nav">
       <div style={{color:'blue', fontSize:'30px'}}>
      개발 Blog
        </div>
      </div>
      
      
    <div className="list">
     {/* <- JSX 코드 주석 : 따봉 누를때마다 1 증가시키기 state로 만드는게 좋음*/}
      <h3>{ 글제목[0] }   <span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉}</h3>
      {/*따봉 누를때마다 콘솔창에 1 출력시키기
      <span onClick={()=> {console.log(1)}}>👍</span>0</h3>*/}
     
     
      <p>3월 8일 발행</p>
      <hr/>  
    </div>

    <div className="list">
      <h3>{ 글제목[1] }</h3>
      <p>3월 8일 발행</p>
      <hr/>  
    </div>

    <div className="list">
      <h3>{ 글제목[2] }</h3>
      <p>3월 8일 발행</p>
      <hr/>  
    </div>
  </div>
    

  );
}

export default App;

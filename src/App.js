//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  let [title, transTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [like, transLike] = useState(0);
  

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className='list'>
        <h4>{ title[0] } <span onClick={ ()=>{ transLike(like+1)} }>👍</span> { like } <span onClick={ ()=>{ transTitle(['여자 코트 추천', '강남 우동맛집', '파이썬 독학']) } }>성별변경</span> </h4> 
        <p>5월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ title[1] }</h4>
        <p>5월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ title[2] }</h4>
        <p>5월 17일 발행</p>
      </div>
    </div>
  );
};

export default App;

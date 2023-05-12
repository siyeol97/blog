//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  let [title, transTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [like, transLike] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={()=>{
        let copy = [...title];
        copy[0] = '여자코트 추천';
        transTitle(copy);
        } }>
          성별변경
      </button>

      <button onClick={()=>{
        let copy = [...title];
        copy.sort();
        transTitle(copy);
      }}>
        가나다정렬
      </button>

      <div className='list'>
        <h4>{ title[0] } <span onClick={ ()=>{ transLike(like+1)} }>👍</span> { like }</h4> 
        <p>5월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ title[1] }</h4>
        <p>5월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{setModal(!modal)}}>{ title[2] }</h4>
        <p>5월 17일 발행</p>
      </div>

    {
      modal == true ? <Modal/> : null
    }

    </div>
  );
};

function Modal(){
  return(
    <div className='modal'>
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
    </div>
  )
}


export default App;

//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title_type, setTitle_modal] = useState(0);
  let [inputval, setInputval] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={()=>{
        let copy = [...title];
        copy[0] = '여자코트 추천';
        setTitle(copy);
        } }>
          성별변경
      </button>

      <button onClick={()=>{
        let copy = [...title];
        copy.sort();
        setTitle(copy);
      }}>
        가나다정렬
      </button>

      {
        title.map(function(a, i){
          return (<div className='list' key={i}>
          <h4 onClick={()=>{setModal(true); setTitle_modal(i)}}>{ title[i] }
            <span onClick={ (e)=>{ 
              e.stopPropagation(); // 이벤트 버블링 막는법
              let copy = [...like];
              copy[i] += 1
              setLike(copy)
              } }>👍</span> { like[i] }
            <button onClick={ (e)=>{
              e.stopPropagation();
              let copy = [...title];
              let copy_like = [...like];
              copy.splice(i, 1);
              copy_like.splice(i, 1);
              setTitle(copy);
              setLike(copy_like);
            }}>
              글삭제
            </button>
          </h4>
          <p>5월 17일 발행</p>
        </div>)
        })
      }

      <input type="text" onChange={(e)=>{ setInputval(e.target.value); }}/>
      <button onClick={()=>{
        let copy = [...title];
        let copy_like = [...like];
        copy.unshift(inputval);
        copy_like.unshift(0);
        setTitle(copy);
        setLike(copy_like);
      }}>글추가</button>

      {
        modal === true
        ? <Modal title_type={title_type} color={"grey"} title={title} setTitle={setTitle}/>
        : null
      }
      
    </div>
  );
};

function Modal(props){
  return(
    <div className='modal' style={{background : props.color}}>
      <h4>{props.title[props.title_type]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}


export default App;

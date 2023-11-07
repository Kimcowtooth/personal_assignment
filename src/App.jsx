import { useState } from "react";
import "./App.css";


function App() {
  const [title, setTitle] = useState("");
  const [content , setContent] = useState("");


  const initialState = [
    {
      id : 1,
      title : "",
      content : "",
      isDone : false,
    },{
      id : 2,
      title : "",
      contents : "",
      isDone : false,
    }
  ];
  const [todos , setTodos] = useState("initialState"); 
  

  return (
    <div>
      <header>
        <h1>TodoList</h1>
      </header>
      <main>
        제목 : <input type="text" placeholder="입력하세요" />
        내용 : <input type="text" placeholder="입력하세요" />
          <button>등록하기</button>
        
      </main>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  return ( //화살표함수 써도. 사용자정의 함수는 반드시 리턴이 있는 함수를 써야한다. 우리가 알고있는 태그들의 묶음을 넣어놓을거다. 여기엔 지금 div 딱 하나 들어가있네. 앱과 리턴 사이에 아무것도 없어도 됨.
  //리턴 안에 div 태그 1개가 있어야 돼. 근데 열어보니까 자식태그들이 많네? 자식은 얼마든지 가능. 리액트는 카멜 표기법. className로 써야된다. (html에서 class였던거). F12로 보면 class로 만들어져있다.
    <div className="App"> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

 //index.js 인덱스는 자동 호출. App 까지 가는게 기본. 
//앱에 사용자 정의태그 갖다 붙여(Hello).

import './App.css';
//import Hello from './01/Hello'; // 헬로 불러오고 아래에 갖다 붙이기. 
import MyClock from './02/MyClock';


function App() {
  return (
  // <Hello /> //리액트는 반드시 사용자 정의태그 갖다 붙일때 시작과 끝이 있어야한다.    
   <MyClock/>

  );
}

export default App;

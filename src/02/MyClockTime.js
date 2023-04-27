//1. useState import 리액트에서 유즈 스테이트 갖고오기
//2. 일반 변수를 state 변수로 선언을 해줘야한다. const[] -> 배열이 된다.
// const[] = ustState(); (유즈스테이트)나한테 관리 맡기려 하면, 내가 주는건(리턴해주는건) 2개야. 첫번째는 스테이트변수 이름.
// myTime을 써라~. myTime = ~ 이런식으론 이제 바꿀수 없엉~ 함수명으로 써. setMytime
// const [mytime, setMytime] = useState(new Date().toLocaleTimeString()); 초기값을 넣어줭. 근데 유즈 스테이트 했는데 안바뀌네?
// console.log(myTime)
// 콘솔로 찍어보니까 콘솔에서만 바껴.

//3. 1초에 한번씩 state 변수 변경
// 1초에 한번씩 바뀌는걸로 제어를 해줘야해->setInterval 함수를 써줘야 한다. 자바스크립트 함수.
// 콜백 함수를 써야한다.
// setInterval(()=>{},1000) 1000ms동안 무언걸 해줄거야!
// 뭐? myTime을 바꿀거야.
// myTime = new Date().toLocaleTimeString(); 이런식으론 이제 바꿀수가없엉!!! state는 할당연산자를 이용해서 바꿀수가 없다!!! 스테이트의 규칙
// setMyTime. 함수로서 바꿔줘야해(앞에 const [myTime, setMytime])
// setMyTime(new Date().toLocaleTimeString());

import { useState } from "react";



const MyClockTime = () => {
    //let myTime = new Date().toLocaleTimeString(); //데이트 클래스의 인스턴스 하나 만듦// 시간이 고정돼있다. 1초마다 올라가야해. 또 렌더링 해야. 스테이트 (훅) 변수 써~ 리액트가 변수 제어.
    let t = new Date().toLocaleTimeString();
    const [myTime, setMytime] = useState(t);
    console.log(myTime)

    let cnt = 0;
    setInterval(()=>setMytime(new Date().toLocaleTimeString()),1000); //다시~ 재렌더링. 셋인터벌 -> 시간 문법. setInterval.
    //문법적으로 콜백함수가 와야한다. 1초마다 한번씩 재 렌더링.



    return (
        < footer >
            <h1>{myTime}</h1 >
        </footer >
    );
}

export default MyClockTime;
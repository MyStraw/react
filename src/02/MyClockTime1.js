import { useState } from "react";



const MyClockTime = () => {
    //let myTime = new Date().toLocaleTimeString(); //데이트 클래스의 인스턴스 하나 만듦// 시간이 고정돼있다. 1초마다 올라가야해. 또 렌더링 해야. 스테이트 (훅) 변수 써~ 리액트가 변수 제어.
    let t = new Date().toLocaleTimeString();
    const [myTime, setMytime] = useState(t);

    let cnt = 0;
    setTimeout(console.log(++cnt),1000);



    return (
        < footer >
            <h1>{myTime}</h1 >
        </footer >
    );
}

export default MyClockTime;
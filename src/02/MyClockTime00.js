// 이게 제일 초창기 원본

const MyClockTime = () => {
    let myTime = new Date().toLocaleTimeString(); //데이트 클래스의 인스턴스 하나 만듦// 시간이 고정돼있다. 1초마다 올라가야해. 또 렌더링 해야. 스테이트 (훅) 변수 써~ 리액트가 변수 제어.
    return (
        < footer >
            <h1>{myTime}</h1 >
        </footer >
    );
}

export default MyClockTime;
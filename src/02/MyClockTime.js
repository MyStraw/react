

const MyClockTime = () => {
    let myTime = new Date().toLocaleTimeString(); //데이트 클래스의 인스턴스 하나 만듦
    return (
        < footer >
            <h1>{myTime}</h1 >
        </footer >
    );
}

export default MyClockTime;
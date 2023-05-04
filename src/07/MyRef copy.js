import { useState, useRef } from "react";


const MyRef = () => {
    let cnt1 = 1; //변수 만들고 초기값1
    const [cnt2, setCnt2] = useState(1);
    const cnt3 = useRef(1); //임포트 왜 안함 ㅋㅋㅋ


    const showCnt = () => {
        console.log('cnt', cnt1, 'cnt2', cnt2, 'cnt3=', cnt3.current); //ref속성은 current로 쓴다.
    }

    const showCnt1 = () => {
        cnt1 = cnt1 + 1;//버튼 눌릴때마다 1 증가. 렌더링은 안일어나도 콘솔에 찍힘 //

        showCnt();
    }

    const showCnt2 = () => { // 이거 하니까 클릭하니까 이건 바뀌는데 Cnt1은 안바뀐다.
        setCnt2(cnt2 + 1)
        showCnt();
    }

    const showCnt3 = () => { // 눌리면 바뀌긴 하는데, state 눌려서 재 렌더링 일어나는 시점에 같이 반영. Ref = 컴포넌트 + state 같은 애.
        cnt3.current = cnt3.current + 1;

        showCnt();
    }



    return (
        <main className="container">
            <article>
                <header>
                    <div className="grid">
                        <div><h1>컴포넌트 변수 : {cnt1}</h1></div>
                        <div><h1>state 변수 : {cnt2}</h1></div>
                        <div><h1>Ref 변수 : {cnt3.current}</h1></div>
                    </div>

                </header>
                <div className="grid">
                    <button onClick={() => showCnt1()}>컴포넌트 변수 </button>
                    <button onClick={() => showCnt2()}>state 변수 </button>
                    <button onClick={() => showCnt3()}>Ref 변수 </button>
                </div>
            </article>
        </main>
    );

}

export default MyRef;

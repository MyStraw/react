import { useState, useRef, useEffect } from "react";
//import style from "./MyRef.module.css";

//새로고침 하면 커서가 input에 있으면 좋은데 마우스로 찍어야 커서가 생성된다.
//이걸 해볼거야

const MyRef = () => {
    const txtref = useRef(); // 텍스트박스에 포커스 처리하고싶다. 인풋요소에 ref속성을 걸래. useRef로 잡았던 변수가 여기 걸려야 해.<input 부분 앞에 해놓은거. 이건 그냥 해야되는거
    //새로고침(첫 렌더링)시에 커서(포커스)가 바로 input에 있게 하고싶다.
    
    const txtref2 = useRef();

    const itemArr = useRef([]); //바뀌는게 배열로 들어간다. 
    const [itemTag, setItemTag] = useState();

    // itemTag = itemArr.current.map((item, idx) => (
    //     <div key={idx} className={style.item}>
    //       {item}
    //     </div>
    //   ));


    useEffect(() => { // 렌더링(새로고침) 할때 처음 딱 한번 되는거->useEffect 에서 (()=>{},[])
        txtref2.current.focus(); //focus 하니까 커서 깜빡인다. 두개 만들어서 txtref2에 깜박인다. 새로고침시에.
    }, []);


    const addItem = (e) => {
        e.preventDefault(); //자바스크립트 할때. form 태그시에. preventDefalut. 새로고침 방지. 이거 쓰기. 
        itemArr.current = [...itemArr.current, txtref2.current.value]; //변수의 값을 바꾼거. 
        console.log("addItem =", itemArr.current);


        // const newItem = txtref2.current.value;
        // if (!itemArr.current.some(item => item.value === newItem)) {
        //     itemArr.current = [...itemArr.current, { key: Date.now(), value: newItem }];
        //     setItemTag(itemArr.current.map((item, idx) => (
        //         <div key={item.key} className={style.item}>
        //             {item.value}
        //         </div>
        //     )));

        // }

        // txtref2.current.value = "";

    }

    const resetItem = () => {
        console.log("resetItem");

    }

    return (
        <main className="container">
            <article>
                <header>
                    <form>
                        <div className="grid">
                            <div>
                                <label htmlFor="txt1">과일/채소 입력</label>
                                <input ref={txtref} type="text" id="txt1" name="txt1" required />
                                <input ref={txtref2} type="text" id="txt2" name="txt2" required />
                            </div>
                            <div>
                                <button onClick={(e)=>addItem(e)}>등록</button>
                                <button onClick={(e)=>resetItem(e)}>취소</button>
                            </div>

                        </div>
                    </form>


                </header>
                <div className="grid">
                    {itemTag}
                </div>
            </article>
        </main>
    );

}

export default MyRef;

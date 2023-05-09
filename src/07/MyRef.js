import { useState, useRef, useEffect } from "react";
import styles from "./MyRef.module.css";

//useState는 변수를 관리하는것. state변수를 쓰는 이유는 이게 변경이 되면 재 렌더링이 일어나기 때문. 재 렌더링을 위해서이걸 쓴다
//아이템 태그를 넣었다. 그리드 안에 넣었다. 여기가 재 렌더링이 일어나겠네. setItemTags 하면 재 렌더링 일어나게 될겨
//useRef라는 form 태그 제어용. txtref는 인풋박스에 ref라는 속성으로 연결시켜놨다.  .current에 맞춰서 한다.
//itemArr 값 바뀔때마다 렌더링이일어나진 않지만, 렌더링 일어날때 이게 반영이 된다.
//useEffect는 디펜던시 어레이에 따라 어느 시점에서 이게 실행되게끔 만들어 준다. ,[]대괄호만 있으면 맨 처음 한번만 일어난다.

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
        itemArr.current = [...itemArr.current, txtref2.current.value]; //변수의 값을 바꾼거. 값이 아무것도 없었는데, txtref.current.value(내가입력한 값을) itemArr에 넣는다.

        //중복 막기
        itemArr.current = [...new Set(itemArr.current)] // 집합을 배열로 만들어...
        // or itemArr.current = [...itemArr.current]; 


        
        let tempTag = itemArr.current.map((item, idx) => <span key={'sp' + idx} className={styles.sp}>{item}</span>);
        setItemTag(tempTag);
        console.log("addItem =", itemArr.current);
        resetItem(); //오브젝트 호출 //텍스트 박스에 입력하고나면 텍스트 박스엔 지워지게끔.

        


    }

    const resetItem = () => {
        txtref2.current.value = '';
        txtref2.current.focus();
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
                                <button onClick={(e) => addItem(e)}>등록</button>
                                <button onClick={(e) => resetItem(e)}>취소</button>
                            </div>

                        </div>
                    </form>


                </header>
                <div>
                    {itemTag}
                </div>
            </article>
        </main>
    );

}

export default MyRef;


 //const newItem = txtref2.current.value;
        // if (!itemArr.current.some(item => item.value === newItem)) {
        //     itemArr.current = [...itemArr.current, { key: Date.now(), value: newItem }];
        //     setItemTag(itemArr.current.map((item, idx) => (
        //         <div key={item.key} className={style.item}>
        //             {item.value}
        //         </div>
        //     )));

        // }

        // txtref2.current.value = "";
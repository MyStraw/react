import { useState, useEffect, useRef } from "react";
const CntInput = ({n, setN}) => {  //부모를 바꿔야 한다. setN도 넘겨서 여기서 바꾸면 Cnt.js도 바뀐다.



    const downN = (e) => {
        e.preventDefault(); //form 태그가 있으면 자꾸 리로드 한다. form 없으면 이거 없어도 됨.
        if (n - 1 < 0) setN(0);
        else setN(n - 1);
    }

    const upN = (e) => { // onClick 호출법은 다양하다. 넘겨줄 값이 있다면 무조건 콜백함수로. down이랑 up 태그에서 onClick 어떻게 썼는지 봐봐
        e.preventDefault(); //form 태그가 있으면 자꾸 리로드 한다. form 없으면 이거 없어도 됨.
        if (n + 1 > 10) setN(10);
        else setN(n + 1);

        console.log(n); //이거 해도 바뀐 n은 안찍힌다.
    }


    return (
        <article>
            <form>
                <div className="grid">
                    <div></div>
                    <div><button onClick={downN}>-</button></div>
                    <div><input type="text" id="txt1" name="txt1" readOnly value={n}></input></div>
                    <div><button onClick={(e) => upN(e)}>+</button></div>
                    <div></div>
                </div>
            </form>
        </article>
    )

}

export default CntInput;
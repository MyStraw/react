import { useState, useEffect, useRef } from "react";
import CntDisp from "./CntDisp";
import CntInput from "./CntInput";
const Cnt = () => {

    const [n, setN] = useState(0); // 함수명이다.

    useEffect(()=>{  //상태값 변경될때마다 여기 적어줘.
        console.log(n); //이건 찍힌다.

    },[n]);
   

    return (
        <main className="container">
           <CntInput n={n} setN={setN}/>
           <CntDisp n={n}/>
        </main>
    );

}
export default Cnt;
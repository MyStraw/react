import { Link } from "react-router-dom";
import xy from "./getxy.json"
import getcode from "./getcode.json"
import { useState, useEffect, useRef } from 'react';
import UltraSrtFcst from "./UltraSrtFcst";
import VilageFcst from "./UltraSrtFcst";


const FcstMain = () => {
    const ops = xy.map((item) =>
        <option value={item.행정구역코드} key={item.행정구역코드}>
            {item["1단계"]}
        </option>
    );

    //state 변수
    //let dt;
    const [dt, setDt] = useState();
//    const [code, setCode] = useState();
    const [area, setarea] = useState();
    const [x, setX] = useState();
    const [y, setY] = useState();
    
    //set 으로만 바꿀수있다. 스테이트는.
    //set 에 의해 y가 바뀌면
    //useEffect(()=>{},[y]) []이거 안에 스테이트 변수가 들어간다. y가 바뀔때마다, 제일 처음 1번
    // 이거 실행이 된다.
    //useRef는 입력 컴퍼넌트를 제어하기 위해. event.target.value 해도 되는데 ref써도된다.
    //이 컴포넌트를 ref 변수로 찾아낼수가 있는거.
    //ref변수 선언은 const txt1 = useRef(); 이게 쓰는법.
    //txt1을 ref에다가 끼운다. 값도 갖고올수도, 끼워넣을수도.
    //txt1.current current를 반드시 달고다닌다. .value 하면 값을 가지고 오거나 변경
    //.fucus 하면 커서를 거기다가.



    //셀렉트박스 컴퍼넌트 만들어진거. 

    //onChange로 useref 훅.
    //입력 값을 가져오기 위한 ref변수
    //바뀔때마다 Ref에 값 저장. 근데 꼭 onChange로 바뀔때마다 안바껴도 되고
    //버튼 클릭시에만 해도 되는데, 버튼에 링크를 해놨으니 그냥 하는게 낫겠다.
    const txt1 = useRef();
    const sel1 = useRef();

    //dt 가 변경되었을때 // useState가 변경됐을때 useEffect가 이걸 잡을수있다.
    useEffect(() => { //함수다. 콜백함수, 디펜던시 어레이[]<- 이 안에 스테이트 변수 들어간다.
        console.log(dt)
    }, [dt])//<-area에 해당하는게 여기 들어가야. 유즈이펙트로 할때.


    // useEffect(() => {
    //     console.log(code);
    //     let temp = xy.filter((item) => item["행정구역코드"] === code)[0]; //1개만 하면 배열이 오브젝트가 된다
    //     console.log(temp);
    //     setarea(temp["1단계"]);
    //     setX(temp["격자 X"]);
    //     setY(temp["격자 Y"]);
    // }, [code])
//이걸 getSel로 넘기면 유즈이펙트 1개 지울수있다.


    //입력 이벤트
    const getDt = () => {
        let tdt = txt1.current.value; //클릭시마다 dt가 만들어짐.
        tdt = tdt.replaceAll('-', '');
        setDt(tdt);
        console.log(dt) //안봐진다 useEffect로 하고 보여져

    }

    const getSel = () => {
        let temp = xy.filter((item) => item["행정구역코드"] === parseInt(sel1.current.value))[0]; //1개(index 0)만 하면 배열이 오브젝트가 된다
        console.log(temp);
        setarea(temp["1단계"]);
        setX(temp["격자 X"]);
        setY(temp["격자 Y"]);
     //   setCode(parseInt(sel1.current.value)); //코드니까 파스인트로
    }





    //테스트
    //const dt = '20230521'; //const 로 바뀌면 안바뀌니까 let으로.
    //const area = '부산광역시';
   // const x = '52';
   // const y = '38';




    return (
        <main className="container">
            <form>
                <article>
                    <header><h1>단기예보 정보 선택</h1></header>
                    <div className="grid">
                        <div>
                            <input ref={txt1} type="date" id='dt' name='dt' onChange={() => getDt()}></input>
                        </div>
                        <div>
                            <select ref={sel1} id="sel" name="sel" onChange={() => getSel()}>
                                <option value="select">지역선택</option>
                                {ops}
                            </select>
                        </div>
                    </div>
                    <footer className="btn">
                        <div className="grid">
                            <Link to={`/ultra/${dt}/${area}/${x}/${y}`} role='button' >초단기예보</Link>
                            <Link to={`/vilage/${dt}/${area}/${x}/${y}`} role='button' >단기예보</Link>
                        </div>
                    </footer>
                </article>
            </form>
        </main>

    );
}


export default FcstMain;
import { Link } from "react-router-dom";
import xy from "./getxy.json"
import { useState, useEffect, useRef } from 'react';

//일단 여기까진 주소로 dt, area, x, y 까진 넘겨줬다. 이걸 이제 받아서 오또케 쓰느냐.


const FcstMain = () => {
    const ops = xy.map((item) =>
        <option value={item.행정구역코드} key={item.행정구역코드}>
            {item["1단계"]}
        </option>
    );

    const [dt, setDt] = useState();
    const [area, setarea] = useState();
    const [x, setX] = useState();
    const [y, setY] = useState();


    const txt1 = useRef();
    const sel1 = useRef();


    useEffect(() => {
        console.log(dt)
    }, [dt])

    const getDt = () => {
        let tdt = txt1.current.value;
        tdt = tdt.replaceAll('-', '');
        setDt(tdt);
        console.log(dt)

    }

    const getSel = () => {
        let temp = xy.filter((item) => item["행정구역코드"] === parseInt(sel1.current.value))[0];
        console.log(temp);
        setarea(temp["1단계"]);
        setX(temp["격자 X"]);
        setY(temp["격자 Y"]);

    }

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
import { Link } from "react-router-dom";
import xy from "./getxy.json"
import getcode from "./getcode.json"
import { useState, useEffect, useRef } from 'react';


const FcstMain = () => {

    const ops = xy.map((item) =>
        <option value={item.행정구역코드} key={item.행정구역코드}>
            {item["1단계"]}
        </option>);



const [items, setItems] = useState();

const select = useRef();


const getData = (num, date, x, y) => { //아래 const에서 kw값을 여기로 넘겨줬다.
    let apikey = '9IZgTnv%2FlgPK2c%2BJcMk4qKiZfz98OMWrRS4OExS9S%2BVHYm4Axmh%2BUzFH4I0UdNByGrTIfzoyNTSshiljEkvcDw%3D%3D';
    let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?'
    url = url + `serviceKey=${apikey}`;
    url = url + `&numOfRows=${num}`;
    url = url + '&pageNo=1';
    url = url + `&base_date=${date}`;
    url = url + '&base_time=0500';
    url = url + '&pageNo=1';
    url = url + `&nx=${x}`; //값 바뀔듯
    url = url + `&ny=${y}`;
    url = url + '&dataType=json';


    fetch(url)
            .then((resp) => resp.json())
            .then((data) => setItems(data.response.body.items.item)) //그냥 data 하면 모든 데이터 다 가져옴. array 10개만 받고싶다. response 자체도 객체. 이 안에서 body를 갖고와야. 계속 콘솔로 찍어보면서 해. items도 오브젝트.
            .catch((err) => console.log(err));
}
















    return (
        <main className="container">
            <form>
                <article>
                    <header><h1>단기예보 정보 선택</h1></header>
                    <div className="grid">
                        <div>
                            <input type="date" id='dt' name='dt'></input>
                        </div>
                        <div>
                            <select id="sel" name="sel">
                                <option value="">선택</option>
                                {ops}
                            </select>
                        </div>
                    </div>
                    <footer className="btn">
                        <div className="grid">
                            <Link to='/ultra/:dt/:area/:x/:y' role='button'>초단기예보</Link>
                            <Link to='/vilage/:dt/:area/:x/:y' role='button'>단기예보</Link>
                        </div>
                    </footer>
                </article>
            </form>
        </main>
    );
}

export default FcstMain;
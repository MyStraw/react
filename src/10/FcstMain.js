import { Link } from "react-router-dom";
import xy from "./getxy.json"
import getcode from "./getcode.json"
import { useState, useEffect, useRef } from 'react';
import UltraSrtFcst from "./UltraSrtFcst";
import VilageFcst from "./UltraSrtFcst";


const FcstMain = () => {
    let apikey = '9IZgTnv%2FlgPK2c%2BJcMk4qKiZfz98OMWrRS4OExS9S%2BVHYm4Axmh%2BUzFH4I0UdNByGrTIfzoyNTSshiljEkvcDw%3D%3D';
    const [address, setAddress] = useState();
    const [selX, setSelX] = useState('');
    const [selY, setSelY] = useState('');
    const [num, setNum] = useState(0);
    const [date, setDate] = useState('');
    const [area, setArea] = useState('');

    const ops = xy.map((item) =>
        <option value={item.행정구역코드} key={item.행정구역코드}>
            {item["1단계"]}
        </option>);
    const x = xy.map((item) => item["격자 X"])
    const y = xy.map((item) => item["격자 Y"])
    //이미 위에서 맵으로 배열 만들어놨으니, 순서에 해당하는 index만 넣음 됨

    const category = getcode.map((item) => item["항목명"]);






    const getData = (num, date, x, y) => { //아래 const에서 kw값을 여기로 넘겨줬다.

        let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?'
        url = url + `serviceKey=${apikey}`;
        url = url + `&numOfRows=${num}`;
        url = url + '&pageNo=1';
        url = url + `&base_date=${date}`;
        url = url + '&base_time=0500';
        url = url + '&pageNo=1';
        url = url + `&nx=${x}`;
        url = url + `&ny=${y}`;
        url = url + '&dataType=json';

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                setAddress(data.response.body.items.item);
            }) //그냥 data 하면 모든 데이터 다 가져옴. array 10개만 받고싶다. response 자체도 객체. 이 안에서 body를 갖고와야. 계속 콘솔로 찍어보면서 해. items도 오브젝트.
           .catch ((err) => console.log(err));   
    }

const [isDateSelected, setIsDateSelected] = useState(false);
const [isAreaSelected, setIsAreaSelected] = useState(false);


const handleButtonClick = (type) => {
    if (!isDateSelected) {
        alert('날짜를 선택하세요');
        return;
    }

    if (!isAreaSelected) {
        alert('지역을 선택하세요');
        return;
    }

    //----------------------
    let numToSet = num;
    if (type === 'ultra') {
        numToSet = 60;
    }
    else if (type === 'vilage') {
        numToSet = 900;
    }
    setNum(numToSet);
    //---------------------- 콘솔에서 확인이 잘 안돼서 이렇게 했다.

    // if (type === 'ultra') {
    //     setNum(900)
    // }
    // else if (type === 'vilage') {
    //     setNum(60)
    // }


    getData(num, date, selX, selY);
    const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${apikey}&numOfRows=${num}&pageNo=1&base_date=${date}&base_time=0500&nx=${selX}&ny=${selY}&dataType=json`;
    console.log(`numToSet value: ${numToSet}`);
    console.log(url);
};


const dateChange = (event) => {
    //setRows(event.target.value);
    const selectedDate = document.getElementById('dt').value.split('-').join('');
    // const selectedDate = event.target.value.replace('-',''); 이건 제일 처음 1개만 바꾸는거
    // const selectedDate = event.target.value.split('-').join('');
    setDate(selectedDate);
    setIsDateSelected(true);
    getData(num, date);
}


const areaChange = (event) => {
    const selCode = event.target.value;
    const selItem = xy.find(item => item.행정구역코드.toString() === selCode);
    if (selItem) { //selItem이 아닌걸 선택했을때를 막기위한 방편. null, undefined를 방지.            
        setSelX(selItem["격자 X"]);
        setSelY(selItem["격자 Y"]);
        setArea(selItem["행정구역코드"])
        setIsAreaSelected(true);

        //날짜선택

        getData(num, date, selItem["격자 X"], selItem["격자 Y"]);



    } else {
        alert('지역을 선택하세요')
    }
};




return (
    <main className="container">
        <form>
            <article>
                <header><h1>단기예보 정보 선택</h1></header>
                <div className="grid">
                    <div>
                        <input type="date" id='dt' name='dt' onChange={dateChange}></input>
                    </div>
                    <div>
                        <select id="sel" name="sel" onChange={areaChange}>
                            <option value="select">지역선택</option>
                            {ops}
                        </select>
                    </div>
                </div>
                <footer className="btn">
                    <div className="grid">
                        <Link to={`/ultra/${date}/${area}/${selX}/${selY}`} role='button' onClick={() => handleButtonClick('ultra')}>초단기예보</Link>
                        <Link to={`/vilage/${date}/${area}/${selX}/${selY}`} role='button' onClick={() => handleButtonClick('vilage')}>단기예보</Link>
                    </div>
                </footer>
            </article>
        </form>
    </main>

);
}


export default FcstMain;
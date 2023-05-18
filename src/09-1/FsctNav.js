import { useState, useEffect, useRef } from 'react';
import styles from "./FsctNav.css";

const FsctNav = () => {

    const [items, setItems] = useState();


    const getData = (num, no) => { //아래 const에서 kw값을 여기로 넘겨줬다.
        let apikey = '9IZgTnv%2FlgPK2c%2BJcMk4qKiZfz98OMWrRS4OExS9S%2BVHYm4Axmh%2BUzFH4I0UdNByGrTIfzoyNTSshiljEkvcDw%3D%3D';
        let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?'
        url = url + `serviceKey=${apikey}`;
        url = url + `&numOfRows=${num}`;
        url = url + `&pageNo=${no}`;
        url = url + '&base_date=20230517';
        url = url + '&base_time=0500';
        url = url + '&pageNo=1';
        url = url + `&nx=55`; //값 바뀔듯
        url = url + `&ny=127`;
        url = url + '&dataType=json';

        console.log(url)

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setItems(data.response.body.items.item)) //그냥 data 하면 모든 데이터 다 가져옴. array 10개만 받고싶다. response 자체도 객체. 이 안에서 body를 갖고와야. 계속 콘솔로 찍어보면서 해. items도 오브젝트.
            .catch((err) => console.log(err));
    }







    return (
        <main className="container">
            <form>
                <article>
                    <header><h1>단기예보 선택</h1>
                    </header>
                    <div className="grid">
                        <div>
                        <input type="date"></input>
                        </div>
                        <div>
                        <select id="option" name="option">
                                <option value="">선택</option>
                                <option value="option1"> 1</option>
                                <option value="option2"> 2</option>
                                <option value="option3"> 3</option>
                            </select>
                        </div>
                    </div>
                    <footer className="btn">
                    <button onClick className="Ye">초단기예보</button>
                    <button onClick className="Ye">단기예보</button>
                    </footer>
                </article>
            </form>
        </main>
    )
}

export default FsctNav;


//단기
//https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=9IZgTnv%2FlgPK2c%2BJcMk4qKiZfz98OMWrRS4OExS9S%2BVHYm4Axmh%2BUzFH4I0UdNByGrTIfzoyNTSshiljEkvcDw%3D%3D&numOfRows=900&pageNo=1&base_date=20230517&base_time=0500&nx=55&ny=127&dataType=json

//초단기
//https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=9IZgTnv%2FlgPK2c%2BJcMk4qKiZfz98OMWrRS4OExS9S%2BVHYm4Axmh%2BUzFH4I0UdNByGrTIfzoyNTSshiljEkvcDw%3D%3D&numOfRows=60&pageNo=1&base_date=20230517&base_time=0630&nx=55&ny=127&dataType=json

//api 키
//9IZgTnv%2FlgPK2c%2BJcMk4qKiZfz98OMWrRS4OExS9S%2BVHYm4Axmh%2BUzFH4I0UdNByGrTIfzoyNTSshiljEkvcDw%3D%3D
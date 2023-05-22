import FcstTable from "./FcstTable";
import { useLocation } from "react-router-dom";
import qs from 'query-string';
import getcode from "./getcode.json"
import { useState, useEffect, useRef } from 'react';

const UltraSrtFcst = ({ ultraCategory }) => { //객체로 받아왔기때문에 구조분해 해야한다. {}이걸로 구조분해할당 가능.

    const location = useLocation();
    const { date, area, selX, selY } = qs.parse(location.search);

    // 상태 선언
    const [data, setData] = useState(null);




    const ops = ultraCategory.map((item) => (
        <option value={item} key={item}>
            {item}
        </option>));



    useEffect(() => {
        // API 키와 URL을 설정합니다.
        let apikey = '9IZgTnv%2FlgPK2c%2BJcMk4qKiZfz98OMWrRS4OExS9S%2BVHYm4Axmh%2BUzFH4I0UdNByGrTIfzoyNTSshiljEkvcDw%3D%3D';
        let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${apikey}&numOfRows=60&pageNo=1&base_date=${date}&base_time=0500&nx=${selX}&ny=${selY}&dataType=json`;

        // fetch 함수를 사용하여 데이터를 가져옵니다.
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data.response.body.items.item))
            .catch((err) => console.log(err));
    }, [date, area, selX, selY]); // 의존성 배열에 넣은 값이 변경될 때마다 useEffect 내부의 함수가 실행됩니다.





    return (
        <article>
            <header>
                <div>초단기예보</div>
                <div>
                    <select id="ultra" name="ultra">
                        <option>선택</option>
                        {ops}
                    </select>
                </div>
            </header>

            <FcstTable data={data} />

        </article>

    );
}

export default UltraSrtFcst;
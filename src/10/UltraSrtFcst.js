import FcstTable from "./FcstTable";
import { useLocation } from "react-router-dom";
import qs from 'query-string';
import getcode from "./getcode.json"
import { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";



const UltraSrtFcst = ({ ultraCategory }) => { //객체로 받아왔기때문에 구조분해 해야한다. {}이걸로 구조분해할당 가능.

    console.log("useParames", useParams());
    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;

    const [datas, setDatas] = useState();

    useEffect(()=>{
        const url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?'
        url = url + `serviceKey=9IZgTnv%2FlgPK2c%2BJcMk4qKiZfz98OMWrRS4OExS9S%2BVHYm4Axmh%2BUzFH4I0UdNByGrTIfzoyNTSshiljEkvcDw%3D%3D`;
        url = url + `&numOfRows=60`;
        url = url + '&pageNo=1';
        url = url + `&base_date=${dt}`;
        url = url + '&base_time=0500';
        url = url + '&pageNo=1';
        url = url + `&nx=${x}`;
        url = url + `&ny=${y}`;
        url = url + '&dataType=json';
        console.log(url);

        //fetch로 url을 내보내고(위에서 만든거), 그걸 다시 갖고와서 json으로 만들어서, datas안에 넣어준다(setDatas에 넣으면 바뀐게 반영되겠지?)
        fetch(url)
        .then((resp) => resp.json)
        .then((data) => setDatas(data.response.body.items))
        .catch((err)=>console.log(err));

    },[]); //처음 한번 패치. //data 까지만 하고 나머진 table에서 해버리라고 .item까지 안들어갔다.


    return (
        <article>
            <header>{useParams().area}</header>
            {datas && <FcstTable datas={datas} gubun="초단기예보"/>}
        </article>

    );
}

export default UltraSrtFcst;
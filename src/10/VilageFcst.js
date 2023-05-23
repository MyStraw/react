import FcstTable from "./FcstTable";
import { useLocation } from "react-router-dom";
import qs from 'query-string';
import { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";

const VilageFcst = ({  }) => {


    console.log("useParames", useParams());
    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;

    const [datas, setDatas] = useState();

    useEffect(()=>{
        let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?'
        url = url + `serviceKey=9IZgTnv%2FlgPK2c%2BJcMk4qKiZfz98OMWrRS4OExS9S%2BVHYm4Axmh%2BUzFH4I0UdNByGrTIfzoyNTSshiljEkvcDw%3D%3D`;
        url = url + `&numOfRows=900`;
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
        .then((data) => setDatas(data.response.items.item))
        .catch((err)=>console.log(err));

    },[]); //처음 한번 패치.
   



    return (
        <article>
        <header>{useParams().area}</header>

        {datas && <FcstTable datas={datas} gubun="초단기예보"/>}

    </article>

    );
}

export default VilageFcst;
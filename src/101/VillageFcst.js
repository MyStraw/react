import { useEffect, useState, useRef } from "react";
import FcstTable from './FcstTable';
import { useParams } from "react-router-dom";

//Main에서 선택한 dt, area, x, y 의 url 주소를 받아오는 역할 = useParams.


const VillageFcst = () => {    
    console.log("useParames", useParams());
    const [items, setItems] = useState();
    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;


    
    useEffect(() => { 
        let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?'   // ultra랑 엔드포인트 부분만 다르고 앞은 똑같네? 하나로 통일 가능함!

        url = url + 'serviceKey=9IZgTnv%2FlgPK2c%2BJcMk4qKiZfz98OMWrRS4OExS9S%2BVHYm4Axmh%2BUzFH4I0UdNByGrTIfzoyNTSshiljEkvcDw%3D%3D';
        url = url + '&numOfRows=900'; 
        url = url + '&pageNo=1';
        url = url + `&base_date=${dt}`; 
        url = url + '&base_time=0600';
        url = url + `&nx=${x}`;
        url = url + `&ny=${y}`;
        url = url + '&dataType=json'; 
        console.log(url);   


        fetch(url) 
            
            .then((resp) => resp.json())             
            .then((data) => setItems(data.response.body.items.item)) 
            .catch((err) => console.log(err));      


       
    }, []);   


    return (
        <>                 
            {items && <FcstTable items={items} gubun='단기예보' area={area} dt={dt} />}
        </>
    )
}

export default VillageFcst;

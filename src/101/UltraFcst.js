import { useEffect, useState, useRef } from "react";
import FcstTable from './FcstTable';
import { useParams } from "react-router-dom";

const UltraFcst = () => {
    console.log("useParames", useParams());
    const [items, setItems] = useState();    
    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;
   

    useEffect(() => {
        let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?';
        url = url + 'serviceKey=9IZgTnv%2FlgPK2c%2BJcMk4qKiZfz98OMWrRS4OExS9S%2BVHYm4Axmh%2BUzFH4I0UdNByGrTIfzoyNTSshiljEkvcDw%3D%3D';
        url = url + '&numOfRows=60';
        url = url + '&pageNo=1';
        url = url + `&base_date=${dt}`;
        url = url + '&base_time=0630';
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
            {items && <FcstTable items={items} gubun='초단기예보' area={area} dt={dt} />}
        </>
    )
}

export default UltraFcst;

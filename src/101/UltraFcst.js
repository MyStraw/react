import { useEffect, useState, useRef } from "react";
import code from "./getcode.json";
import FcstTable from './FcstTable';

//item만 넘겨주면 돼~ 단기예보것만.


const UltraFcst = () => {
    const [items, setItems] = useState();
   

    useEffect(() => {
        let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?'
        url = url + 'serviceKey=9IZgTnv%2FlgPK2c%2BJcMk4qKiZfz98OMWrRS4OExS9S%2BVHYm4Axmh%2BUzFH4I0UdNByGrTIfzoyNTSshiljEkvcDw%3D%3D';
        url = url + '&numOfRows=60';
        url = url + '&pageNo=1';
        url = url + '&base_date=20230524';
        url = url + '&base_time=0500';
        url = url + '&nx=55';
        url = url + '&ny=127';
        url = url + '&dataType=json';
        console.log(url);

        fetch(url) 
        
            .then((resp) => resp.json())             
            .then((data) => setItems(data.response.body.items.item)) 
            .catch((err) => console.log(err));           

           
    }, []);



    return (
        <>
            {items && <FcstTable items={items} gubun='초단기예보' />}
        </>
    )
}

export default UltraFcst;

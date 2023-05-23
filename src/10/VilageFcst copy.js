import FcstTable from "./FcstTable copy";
import { useLocation } from "react-router-dom";
import qs from 'query-string';
import { useState, useEffect, useRef } from 'react';
import xy from "./getxy.json"
import getcode from "./getcode.json"
import { useParams } from "react-router-dom";

const VilageFcst = ({ vilageCategory }) => {

    const apikey = '9IZgTnv%2FlgPK2c%2BJcMk4qKiZfz98OMWrRS4OExS9S%2BVHYm4Axmh%2BUzFH4I0UdNByGrTIfzoyNTSshiljEkvcDw%3D%3D';
    const [address, setAddress] = useState();
    const [values, setValues] = useState();

    const date = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;




    const category = getcode.map((item) => item["항목명"]);


    const ops = vilageCategory.map((item) => (
        <option value={item} key={item}>
            {item}
        </option>));


    let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?'; //밖에서 미리 선언하고 값 바뀐거. let url; 이런식으로.


    
    useEffect(()=>{

        url = url + `serviceKey=${apikey}`;
        url = url + '&numOfRows=1000';
        url = url + '&pageNo=1';
        url = url + `&base_date=${date}`;
        url = url + '&base_time=0500';
        url = url + '&pageNo=1';
        url = url + `&nx=${x}`;
        url = url + `&ny=${y}`;
        url = url + '&dataType=JSON';

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setAddress(data.response.body.items.item)) //그냥 data 하면 모든 데이터 다 가져옴. array 10개만 받고싶다. response 자체도 객체. 이 안에서 body를 갖고와야. 계속 콘솔로 찍어보면서 해. items도 오브젝트.
            .catch((err) => console.log(err));

    },[]); 
    
    // //처음 한번 패치.
    // const getData = () => { //아래 const에서 kw값을 여기로 넘겨줬다.
    //     url = url + `serviceKey=${apikey}`;
    //     url = url + '&numOfRows=1000';
    //     url = url + '&pageNo=1';
    //     url = url + `&base_date=${date}`;
    //     url = url + '&base_time=0500';
    //     url = url + '&pageNo=1';
    //     url = url + `&nx=${x}`;
    //     url = url + `&ny=${y}`;
    //     url = url + '&dataType=JSON';

    //     fetch(url)
    //         .then((resp) => resp.json())
    //         .then((data) => setAddress(data.response.body.items.item)) //그냥 data 하면 모든 데이터 다 가져옴. array 10개만 받고싶다. response 자체도 객체. 이 안에서 body를 갖고와야. 계속 콘솔로 찍어보면서 해. items도 오브젝트.
    //         .catch((err) => console.log(err));
    // }

    // const filteredItems = getData.response.body.items.item.filter(item => item.category === selItem);



    const vilageChange = (event) => {
        const selCode = event.target.value; //항목명
        const selItem = getcode.find(item => item["항목명"] === selCode);


      //  getData();
        console.log(selItem);
        console.log(url);
        console.log(values);       
        console.log(address) ;

        setValues(selItem["항목값"]);
       
        // const selItem = getData.response.body.items.item.filter(item => item.category === selCode);       
    }

    




    return (
        <article>
            <header>
                <div>단기예보</div>
                <div>
                    <select id="ultra" name="ultra" onChange={vilageChange}>
                        <option>선택</option>
                        {ops}
                    </select>
                </div>
            </header>
            <div>
            <FcstTable address={address} values={values}/>            
            </div>
        </article>

    );
}

export default VilageFcst;



{/* <div> {address&&address.map(item => (
                        <FcstTable key={item} item={item}/> ))}    
                        </div>        */}
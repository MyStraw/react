

import {useState} from "react";
import "./BoxRows.css";



const BoxRows = ({ mv }) => { 
   
    console.log("boxrows", mv) 
    const[footTag, setFootTag]=useState('');
    const[footTag2, setFootTag2]=useState('');
    const[footTag3, setFootTag3]=useState('');
    const[footTag4, setFootTag4]=useState(''); 


    const showMv = (row) => {
        console.log(row)
        setFootTag("[" + row.movieCd + "]")
        setFootTag2(" -" + row.movieNm + "-")
        setFootTag3('개봉일: ')
        setFootTag4(row.openDt)
        
    }









    //❤
    let trTags = []; 
    for (let row of mv) { 
        console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten); 

        let icon;
        let intent = parseInt(row.rankInten) 
        if (parseInt(row.rankInten) === 0) icon = '➖'
        else if (intent < 0) icon = <span id="down">▼</span>
        else icon = <span id="up">▲</span>
        

        trTags.push( 
            <tr className="mytr" key={row.movieCd} onClick={() => showMv(row)}> 
                <td>{row.rank}</td>
                <td>{row.movieNm}</td>
                <td><span className="won">{parseInt(row.salesAmt).toLocaleString()}원</span></td>
                <td>{icon}{intent === 0 ? '' : Math.abs(row.rankInten)}</td> 
            </tr>
        );
    }

    console.log(trTags);


    return (
        <>
            <tbody>
                {trTags}
            </tbody>
            <tfoot>
                <tr>
                <td colSpan={4}>{footTag}{footTag2} {footTag3} {footTag4}</td>
                </tr>
            </tfoot>
        </>
    );
}

export default BoxRows;
//❤
// 날짜 바뀔때마다 영화정보가 바뀌어야 하니, 이것도 state 변수로 해주자. 우리 앞에서 js에서 날짜 따와서 날짜 선택하면 날짜별로 영화순위 바꾸는걸 했었다.
// 클릭 이벤트 발생하려면 어떻게 달거냐?
// <tr className="mytr" key={row.movieCd} onClick={() => showMv(row)}> 클릭시~ 콜백함수 호출. 10개중에 어떤게 선택됐는지 넘어가. row에 한줄에 대한 정보가 다 들어있다(순위에 해당하는 영화정보)
// 클릭시showMv라는 함수를 찾게된다. 그럼 showMv함수 짜줘야지
// 맨위에 올라가
// const showMv = (line)=>{ 꼭 row로 안받아도 된다. line으로 받아도
// console.log(line)
// } 
// 우리가 한건아래부분.
// const showMv = (row) => {
//     console.log(row)
//     setFootTag(row.movieCd)
// }

/* 복습중이당~
return (
    <> 복습중
        <tbody> 실제론 이렇게 10개 들어와야. 이걸 배열로 만들어서 넣겠다.=> trTags. mv 안에 10개의 배열데이터가 들어있다. 배열은 1개씩 순회하는 명령어 map, filter 10번 돌면서 tr 10개 만들면 되겠네
            <tr> ❤ 이부분부터 보셈. 10개의 tr 만들거기 때문에 tr 10개를 푸쉬. 여기 안에 td가 들어가. trTags가 10번 돌면서 tr 10개 만든다.
            </tr>
            <tr>
            </tr>
            <tr>
            </tr>
            <tr>
            </tr>
            <tr>
            </tr>
            <tr>
            </tr>
            <tr>
            </tr>
            <tr>
            </tr>
            <tr>
            </tr>
            <tr>
            </tr>
        </tbody>
        <tfoot>
            <tr>
            <td colSpan={4}>{footTag}</td> //칸 4개 합쳐서 하나로 쓰겠다 
            </tr>
        </tfoot>
    </>
);
*/

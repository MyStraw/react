// 베이스부터 다시 시작.
// const BoxRows = ({ mv }) => {

//case1)
//const BoxRows = (probs) =>{
//const mvlist = [...probs.mv]; mv1을 갖고오려면 .mv1 하면 돼.

//case2) 난 그냥 받아온 그대로 쓰고싶다~! mv 넣어.
//const BoxRows = ({mv}) =>{ 

import {useState} from "react";
import "./BoxRows.css";


//const BoxRows = (probs) =>{ //box의 영화정보 가져오기. 프롭스 받아와~ case1)
const BoxRows = ({ mv }) => { //case2) 오브젝트로 받아서 해버리기. 앞에서 보내오는게 많으면 이거보다 걍 probs 쓰는게 낫겄네~
    //  const mvlist = [...probs.mv]; // case1) 스프레드 연산자 ... 펼쳐받기. 여기 mvlist랑 box의 mvlist랑 다르다. 이건 probs.mv 매번 이거 쓰는거 안할라고 만든겨.
    // console.log("boxrows",probs.mv); // case1) box에 mvlist 10개 있었다. 속성값으로 프롭스 mv 이름으로 명명하고, 넘겼다. 콘솔로 잘 왔는지확인
    console.log("boxrows", mv) // case2) //tr 배열로 10개 박아버리자. mvlist가 배열 -> mv로 넘겨와서 여기선 mv. mv배열이 10개 들어가있다.
    const[footTag, setFootTag]=useState('');
    const[footTag2, setFootTag2]=useState('');
    const[footTag3, setFootTag3]=useState('');
    const[footTag4, setFootTag4]=useState(''); //4개 다하지 말고 빽틱 이용


    const showMv = (row) => {
        console.log(row)
        setFootTag("[" + row.movieCd + "]")
        setFootTag2(" -" + row.movieNm + "-")
        setFootTag3('개봉일: ')
        setFootTag4(row.openDt)
        //setFootTag(`[${row.movieCd}] ${row.movieNm} $개봉일 :  ${row.openDt}`)
    }

//교수님버전
//    const [detail, setDetail] = useState(1,2,3); // 이렇게 초기값 주면 1만들어간다. ([1,2,3])하면 배열1개가 들어가니 전부 넣는거 가능. 지금은 한개만 들어강

//   const showMv = (line)=>{
//              let tempTag = <tr>
//                              <td className='tempsp'>[{line.movieCd}]</td>
//                              <td className='tempsp'>{line.movieNm}</td>
                             // <td className='tempsp' colSpan={2}>개봉일 : {line.openDt}</td>    
                             // </tr>
                             // setDetail(tempTag);
// }

// 아래 이 부분도
// <tfoot>
//                 <tr>
//                 <td colSpan={4}>{footTag}{footTag2} {footTag3} {footTag4}</td> {/*칸 4개 합쳐서 하나로 쓰겠다. 가로 행에 칸 4개 (순위, 영화이름, 매출액, 증감) */}
//                 </tr>
//             </tfoot>
//<tr></tr> 사이에 있는거 다 배고
//{deTail}넣으면 끝





// const showMv = (line)=>{ 꼭 row로 안받아도 된다. line으로 받아도
    // console.log(line)
//    console.log(line)
//    //detail = 1; 이렇게 할수 없다.
//    setDetail(line.movieNm) -> 이제 클릭할때마다 아래쪽에 바뀐다.
//}



    //❤
    let trTags = []; //배열은 for of
    for (let row of mv) { //mv의 row(암꺼나)들을 다 돌아라. 그럼 10번 돌겄지. 반복문 10번 돌면 tr 10개 생성. trTags가 10개 돌면서 tr10개 생성
        console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten); //로그가 두번 찍힘. //index.js에 <React.StrictMode> 엄격모드 때문임. 이거 없애면 된다.

        let icon;
        let intent = parseInt(row.rankInten) //이게 숫잔지 확신이 안드니.
        if (parseInt(row.rankInten) === 0) icon = '➖'
        else if (intent < 0) icon = <span id="down">▼</span>
        else icon = <span id="up">▲</span>
        //여긴 자바스크립트다. 자바스크립트 짜듯이 명령어 쓰면 되지

        //아래 push부터 jsx. tr태그 묶음 하나가 배열의 요소. {}

        trTags.push( //tr이 여러개 만들어지기 때문에 가상Dom 에서 구분이 잘 안간다. 리액트가 구분하는 키. 키가 중복? 된다고 오류뜬다. 키는오로지 1개. movieCd로 주자.
            <tr className="mytr" key={row.movieCd} onClick={() => showMv(row)}> 
                <td>{row.rank}</td>
                <td>{row.movieNm}</td>
                <td><span className="won">{parseInt(row.salesAmt).toLocaleString()}원</span></td>
                <td>{icon}{intent === 0 ? '' : Math.abs(row.rankInten)}</td> {/*삼항 연산자로 변동0은 표시 안되게. 이건 아이콘 표시*/}
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
                <td colSpan={4}>{footTag}{footTag2} {footTag3} {footTag4}</td> {/*칸 4개 합쳐서 하나로 쓰겠다. 가로 행에 칸 4개 (순위, 영화이름, 매출액, 증감) */}
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

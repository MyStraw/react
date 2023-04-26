import {useState} from "react";


//const BoxRows = (probs) =>{ //box의 영화정보 가져오기. 프롭스 받아와~ case1)
const BoxRows = ({ mv }) => { //case2) 오브젝트로 받아서 해버리기. 앞에서 보내오는게 많으면 이거보다 걍 probs 쓰는게 낫겄네~
    //  const mvlist = [...probs.mv]; // case1) 스프레드 연산자 ... 펼쳐받기. 여기 mvlist랑 box의 mvlist랑 다르다. 이건 probs.mv 매번 이거 쓰는거 안할라고 만든겨.
    // console.log("boxrows",probs.mv); // case1) box에 mvlist 10개 있었다. 속성값으로 프롭스 mv 이름으로 명명하고, 넘겼다. 콘솔로 잘 왔는지확인
    console.log("boxrows", mv) // case2) //tr 배열로 10개 박아버리자. mvlist가 배열 -> mv로 넘겨와서 여기선 mv. mv배열이 10개 들어가있다.

    const[footTag, setFootTag]=useState('');


    const showMv = (row) => {
        console.log(row)
        setFootTag(row.movieCd)
    }


    let trTags = []; //배열은 for of
    for (let row of mv) { //mv의 row(암꺼나)들을 다 돌아라. 그럼 10번 돌겄지.
        console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten); //로그가 두번 찍힘. //index.js에 <React.StrictMode> 엄격모드 때문임. 이거 없애면 된다.

        let icon;
        let intent = parseInt(row.rankInten) //이게 숫잔지 확신이 안드니.
        if (parseInt(row.rankInten) === 0) icon = '⏺'
        else if (intent < 0) icon = '🔽'
        else icon = '🔼'
        //여긴 자바스크립트다. 자바스크립트 짜듯이 명령어 쓰면 되지

        //아래 push부터 jsx. tr태그 묶음 하나가 배열의 요소. {}

        trTags.push( //tr이 여러개 만들어지기 때문에 가상Dom 에서 구분이 잘 안간다. 리액트가 구분하는 키. 키가 중복? 된다고 오류뜬다. 키는오로지 1개. movieCd로 주자.
            <tr className="mytr" key={row.movieCd} onClick={() => showMv(row)}>
                <td>{row.rank}</td>
                <td>{row.movieNm}</td>
                <td className="won">{parseInt(row.salesAmt).toLocaleString()}원</td>
                <td>{icon}{intent === 0 ? '' : Math.abs(row.rankInten)}</td> {/*삼항 연산자로 변동0은 표시 안되게.*/}
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
                <td colSpan={4}>{footTag}</td> {/*칸 4개 합쳐서 하나로 쓰겠다 */}
                </tr>
            </tfoot>
        </>
    );
}

export default BoxRows;

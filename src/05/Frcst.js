import data from './dataFrcst.json';
import style from './Frcst.module.css';

//state 변수 1단계 임포트
import { useState } from 'react';



const Frcst = () => {
    const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];
    //    dtKey.map((item)=>console.log(data[item])) //키를 순서대로 배열에 집어넣고 하나씩 갖고와. 키 순서대로 출력. 콘솔 4개 하나하나 쓰지말공
    const cnKey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];
    //    cnKey.map((item)=>console.log(data[item]))

    //    이게 오브젝트{}. 오브젝트를 만들거다. 오브젝트 사용법 
    //    idx 인덱스 가져와서 0,1,2,3. 매칭을 시키고 싶어 oneDt : oneCn이랑.
    //자료추가 push

    //오브젝트 만들기
    let dtcn = {};
    dtKey.map((item, idx) =>
        dtcn[data[item]] = data[cnKey[idx]] // dtcn 오브젝트의 [키] = 값. dtcn[data[item]] = data[cnKey[idx]] .   // dtKey.map(문자열, 인덱스) ->
    );
    console.log(dtcn)

    //상세정보

    //스테이트 2단계 변수선언.

    //let bodyTag; 근데 이렇게 해서 돔에 {bodyTag} 하면 안된다. 스테이트 변수를 해야돼. setbodyTag로 해야.
    const [bodyTag, setbodyTag] = useState(''); //초기값 줘야 ''

    const detail = (k) => {

        console.log(k, dtcn[k]);
    //  bodytag = dtcn[k];
    //스테이트 변수 3단계
        setbodyTag(dtcn[k]);

    }



    let dtTag = []; //결과가 배열. map 써서 하나씩 갖고와. 
    dtTag = Object.keys(dtcn).map((item, idx) =>
        <div className={style.dt}
            key={'dt' + idx}
            onClick={() => detail(item)}>
            {item}
        </div>
    );











    // key 값을 유일하게 만들어야 한다. 'dt' + idx 이걸로. idx는 걍 인덱스로 숫자만 나오니 별로.
    // let dtTag = []; //결과가 배열. map 써서 하나씩 갖고와. 
    // dtTag = Object.keys(dtcn).map((item)=>
    // <div key={item}>{item}</div>           //key 값으로 item을 해줘도 된다. key값 없이하니 콘솔창에 오류나~
    // );




    return (
        <main className="container">
            <article>
                <header>
                    <h1>초미세먼지 주간예보</h1>
                    <div className="grid">
                        {dtTag}
                    </div>
                </header>
                {bodyTag}
            </article>
        </main>
    );
}

export default Frcst;
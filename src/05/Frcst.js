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
    //  console.log(dtcn)

    //상세정보

    //스테이트 2단계 변수선언.

    //let bodyTag; 근데 이렇게 해서 돔에 {bodyTag} 하면 안된다. 스테이트 변수를 해야돼. setbodyTag로 해야.
    const [bodyTag, setbodyTag] = useState(''); //초기값 줘야 ''

    const detail = (k) => {
        let dtcnItem = dtcn[k].split(',') // 배열이 됐네 // 문자열 한방에 하니까 구분이 안가. 지역별로 쪼개. 쉼표 기준으로 split으로 쪼개. 쪼개니까 배열이생겨. 
        //div grid로 감싸니까 피코가 알아서 자동배치 해줬네. 지역별로 들어는 갔어.
        //['서울:낮음', '부산:인천'] -> 이걸 컴마 기준으로 쪼갰어 이 안에 또 ['서울', '낮음']
        dtcnItem = dtcnItem.map((item) => item.split(':'));
        console.log(dtcnItem)
        dtcnItem = dtcnItem.map((item) =>
            <div key={item[0]}>
                <span className={style.sp1}>{item[0]}</span>
                {item[1].trim() === "낮음" ? <span className={style.sp21}>{item[1]}👎</span>
                :item[1].trim() === '보통' ? <span className={style.sp22}>{item[1]}👊</span>
                :<span className={style.sp23}>{item[1]}👍</span>}                
            </div>
        )


        // console.log(k, dtcn[k]);

        //  bodytag = dtcn[k];
        //스테이트 변수 3단계
        //    setbodyTag(dtcn[k]);

        setbodyTag(dtcnItem);

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
                <div className="grid">
                    {bodyTag}
                </div>
            </article>
        </main>
    );
}

export default Frcst;
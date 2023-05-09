import BoxRows from "./BoxRows";
import "./BoxRows.css";
import style from './BoxRows.module.css';
import { useRef, useState, useEffect } from 'react';

const Box = () => {
    const [mvlist, setMvlist] = useState();
    let seldt; //함수 전역에서 쓸수있게. 아래에서 get dt 안에 let seldt하면 그 안에서만... 지금 날짜 디폴트 어제값으로 해놓을겨

    useEffect(() => {
        //어제날짜 만들기. 새로고침 했을때 디폴트가 어제날짜로 되게끔.
        //https://ko.javascript.info/date
        let yesterday = new Date(); //이러면 오늘날자로됨
        yesterday.setDate(yesterday.getDate() - 1); //어제날짜 가지고오기


        seldt = yesterday.getFullYear();
        let month = yesterday.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;

        // seldt = `${seldt}${yesterday.getMonth() + 1<10 ? '0'${yesterday.getMonth()+1} : yesterday.getMonth() +1}`; //백틱, 플러스 연산자 쓰고싶은거 써..202358 d
        let day = yesterday.getDate();
        day = day < 10 ? `0${day}` : day;

        seldt = `${seldt}${month}`
        seldt = `${seldt}${day}`

        //       seldt = `${seldt}${yesterday.getDate()}`

        console.log('yesterday=', seldt)

        dt1.current.value = `${yesterday.getFullYear()}-${month}-${day}`; //새로고침 했을때 달력에 어제날짜 떠잇게끔. 이거 없으면 그냥 연-월-일 이라고만 표시돼있다.
        getData(seldt);

    }, []);


    //달력 넣고 오픈 api 땡겨와서 날짜변경하면 날짜도 변경되게 할끄야. mvlist만 바꾸면 되지 않을까. useState 변수를 쓰면 되겠네.
    //날짜 변경시 fetch 한번 더 던지고, 이걸 갖고오는 데이터를 State 변수에 넣어주면 된다.


    console.log(mvlist);

    //날짜 입력창

    const dt1 = useRef(); //ref dt1 연결. 찍을때마다


    //날짜 선택
    const getDt = () => {
        //    console.log("dt1=", dt1.current.value); //콘솔 찍어보면2021-05-12 형식이다. 연원일이 다 붙어야해 json 파일은. 영화진흥위원회 json 파일 끝자리 봐봥.
        seldt = dt1.current.value.replaceAll('-', ''); // - 를 빼준다. replace로.

        getData(seldt);
    }




    //데이터 가져오기
    const getData = (sd) => {
        let url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=' //백틱으로 해도 된다
        url = url + sd;
        console.log("seldt=", sd)


        console.log('url=', url);

        fetch(url) //페치 던져~
            .then((resp) => resp.json())
            .then((data) => setMvlist(data.boxOfficeResult.dailyBoxOfficeList)) //날짜 바꾸는대로.
            .catch((err) => console.log(err));
    }





    return (
        <main className="container">
            <article>
                <header>
                    {/* <nav>
                        <ul><li><h1>일일박스오피스</h1></li></ul>
                        <ul><li><input type = "date" id="dt1" name="dt1"/></li></ul>
                    </nav> */}
                    <h1>일일박스오피스</h1>
                    <input ref={dt1} type="date" id="dt1" name="dt1" onChange={() => getDt()} />
                </header>
                <table>
                    <thead>
                        <tr className={style.movie}>
                            <th scope="col">순위</th>
                            <th scope="col">영화명</th>
                            <th scope="col">매출액</th>
                            <th scope="col">증감</th>
                        </tr>
                    </thead>
                    {mvlist && <BoxRows mv={mvlist} />} {/*mv리스트 있던거 날리고 날자바뀌는걸로 해서.mv리스트가 있어야 날라가게끔.*/}
                </table>
            </article>
        </main>
    );

}

export default Box;

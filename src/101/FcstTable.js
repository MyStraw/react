import { useEffect, useState, useRef } from "react";
import code from "./getcode.json";

//item만 넘겨주면 돼~ 단기예보것만.


const FcstTable = ({items, gubun}) => {    
    const [trTags, setTrTags] = useState();
    const [opTags, setOptags] = useState();
    const sel = useRef();


    
    useEffect(() => { 
        let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?' 

        url = url + 'serviceKey=9IZgTnv%2FlgPK2c%2BJcMk4qKiZfz98OMWrRS4OExS9S%2BVHYm4Axmh%2BUzFH4I0UdNByGrTIfzoyNTSshiljEkvcDw%3D%3D';
        url = url + '&numOfRows=60'; 
        url = url + '&pageNo=1';
        url = url + '&base_date=20230524'; 
        url = url + '&base_time=0630';
        url = url + '&nx=55';
        url = url + '&ny=127';
        url = url + '&dataType=json'; 
        console.log(url);//3. 이걸 먼저 살펴. url을 먼저 봐.      


        fetch(url) //1.
            // .then((resp) => console.log(resp)) //resp로 넘어온 데이터는 리액트에서 쓸수있는 형태가 아니니까 resp.json() 형태로 바꿔줘!!
            .then((resp) => resp.json()) //제이슨으로 변경하는 시간이 걸리니까 이걸 또 캐치 해줘야 돼서 then.
            //.then((data) => console.log(data)) // 6. 이걸로 F12 보니 response.body.items.item만 필요하단게 보인다.
            .then((data) => setItems(data.response.body.items.item)) //9. 여기까지 들어가야 배열이 나온다. 페치 끝나면 items가 바뀌겠지~ 이게 useEffect 디펜던시 어레이에 items 넣어봐.
            .catch((err) => console.log(err)); //에러 발생할수 있으니 에러를 또 캐치해 내기 위해.            


        //27.여기에 실행되게. //이제 키값 에러 나니까 키값 주자 바로위에. //그리고 이제 클릭할때마다 아래 테이블 바껴야지.
        setOptags(tempcd);
        console.log('tempcd', tempcd);

        //28. 이제 셀렉트가 바뀔때마다 아래 테이블이 변해야해. onchange = showItem. 사용자정의 함수 만들어.
    }, []);   



    const showItem = (e) => {
        e.preventDefault();
        // console.log('sel', e.target.value); //이 방법
        console.log('sel', sel.current.value); //"항목값골랐다."

        //31. 여기 복사 붙여넣기 해서 , temp, tempcd, 이걸 왜했는지 다시 이해.
        if (items === undefined) return;
        let temp = items.filter((i) => i.category === sel.current.value);
        let tempcd = code.filter((i) => i["예보구분"] === {gubun} &&
        i["항목값"] === sel.current.value
        ); 
        tempcd = tempcd[0]; //32.까지.

        console.log('tempcd',tempcd);

        //33. 이거 다 해줘.
        let skyobj = {'1':'맑음', '3':'구름많음', '4':'흐림'};
        let ptyobj ={'0':'없음', '1':'비', '2':'비/눈', '3':'눈', '5':'빗방울', '6':'빗방울눈날림', '7':'눈날림'};

        temp = temp.map((i, idx) =>
            <tr key={i.category + idx}>
                <td>{tempcd["항목명"]}</td>
                <td>{i.fcstDate}</td>
                <td>{i.fcstTime}</td>
                <td>                    
                    {(i.category === 'SKY') ? skyobj[i.fcstValue] 
                    : (i.category === 'PTY') ? ptyobj[i.fcstValue]
                    : i.fcstValue + tempcd["단위"] }              
                
                </td>
            </tr>
        );

        console.log('items', items); //10.undefined가 찍힌다. 없을수도 있으니까. 안에 있는걸 내가 가지고 올거야. 화면에다가 뿌릴겨. 이제 이걸 return에 넣어야지. 데이터 갖고오기만, 뿌리는건 return.
        console.log('temp', temp); //18. 콘솔 확인.
        setTrTags(temp); //17. 이제 바뀐값이 들어가야 하니까 여기서 set을 해주고. 
    }


    return (
        <main className="container">
            <form>
                <article>
                    <header>

                        <div className="grid">
                            <div><h1>기상청 {gubun}</h1></div>
                            <div>
                                <select ref={sel} id='sel' name='sel' onChange={showItem}>
                                    <option val=''>선택</option>
                                    {opTags}
                                </select>
                            </div>
                        </div>

                    </header>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">자료구분코드</th>
                                <th scope="col">예측일자</th>
                                <th scope="col">예측시간</th>
                                <th scope="col">예보 값</th>
                            </tr>
                            {items && trTags}
                        </thead>
                    </table>
                </article>
            </form>
        </main>
    )
}

export default FcstTable;
//모든 결과물은 HTML로 나온다
//복습
//코드를 외운다? 아무 의미 없당
//리액트를 가지고 어떻게 하더라~ 이걸 이해해
//GPT 자제. 현업이 아니고 우린 학생이양~
//GTP가 뱉은 코드 이해를 해야.

//HTML 태그 = 웹 브라우저가 이해하는 명령어. 구조.
//HTML5 오면서 새 태그가. 시맨틱 태그(css). 봇이 문서를 읽어. 주기적으로 스크래핑 하는 봇. 문서를 보며 읽어내
//
//CSS 디자인 = 여기까진 정적인 페이지

//내가 액션을 가햇을때 변화가 일어났음 좋겠다=>버튼 눌렀을때 일어나는 일,
//동적으로 발생했음 좋겠다. ID PASS 입력시 일일이 모든사람의 페이지를 만들필요가 X 껍데기는 같으니까.
//DB에서 DATA만 다른거. 이거 들어오면서 동적으로 바뀌기 시작. 이 기술이 발전

//ASP, JSP 이런거 이용했던 때도.
// 데이터를 가져와서 뿌려줘야. 자바 스크립트로만 해도 되지만
//리액트 컴퍼넌트 쓰면 편해서 리액트를 쓴다. 작게 모듈화 시켜서 여기넣고 저기넣고. 컴포넌트 쪼개다 보니..
//컴포넌트로 쪼개다 보니 자식 컴포넌트에서 공통으로 쓰는게 생긴다. 이걸 어떻게 전달?
//props로 전달.

//바뀐값으로, 원하는 부분만 바뀌고 싶다? 이것만 바꾸면 되는데-> State. 여기만 바꿔준다.

//전체상태 관리 - 리코일? 을 할꺼다.

//지금 라우트까지 했을때. 버튼 눌러서 건낼때. 유즈params나 {}이걸로 스테이트 해서 다른 페이지로 보낸다.
//state로 보냈으니 다른 페이지에서도 바뀐값을 받아본다.
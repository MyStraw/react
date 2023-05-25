import { useEffect, useState, useRef } from "react";
import code from "./getcode.json"; //21. 코드 가져오자

const Fcst = () => {
    //날짜 주소 갖고오는거. 어느 시점에 fetch 던질까? 컴포넌트 페이지 첫 로드될때 페치 던지고 싶을때 그때 사용하는 훅이 이펙트 아닌가?
    //페치를 계속 할 필요가 없다. 첫 한번만. 유즈이펙트= 첫 렌더링이 될때 함수를 자동으로 호출. 리액트 설계.
    //state는 변수를 갖고있고.

    //렌더링이 될때 한번 실행



    //이게 이펙트 사용법. 훅은 리액트 차원에서 관리. 상태변경 될때마다 자동실행 시키는 함수(훅). 인수로 콜백함수 가진다
    //디펜던시 어레이 없으면 조그만한 렌더링이 일어나더라도 계속 이게 실행된다.
    //그러면 state 변수 바뀔때마다 함수를 계속 호출하게 된다. [] 이거하면 최초의 한번만 일어나게 해준다.
    //fetch는 비동기. 왔다갔다 하는 시간이 있다. 로딩페이지 필요. 이사이에 딴거 하고 있으면 답이 온다. 이걸 .then으로 왔을때~ 잡아내.


    // 7. useState 변수 : 변수 값이 변경이 되면 재 렌더링. 이 컴퍼넌트 내에서만 변경될수 있는 값이다. 로컬 변수는 계속 변하는데(콘솔에 찍힘) 렌더링이 안돼서 페이지에 안찍힘. 안바껴서 나감.(옛날에 했다). 이걸 해주는게 스테이트.
    // ref는 변경이 됐을때 반영. 
    const [items, setItems] = useState(); // 8. items 는 이제 const로는 변경 못하고 set으로만 값 변경할수 있다. useState처럼 전체 관리하는 리코일(리덕스, 컨텍스트 등등) 스테이트 전체 관리하는걸 나중에 배울거다.
    // 8.1 이건 초기값 아무것도. 뭔지 모르기때문에. useState([]) 이거하면 배열로 초기값 줄수있다.

    //13.
    const [trTags, setTrTags] = useState(); //items가 undefined 될 경우가 있었다. 다시 12번 가서 items&&tags
    //15. 아이템 가져왔으니 이제 trtags 바꿀수있네. items가 배열이다. 안에 항목을 object로 가지고 있다. 10개의 object로. 10개의 tr 만들어야해. 행을 화면에 뿌려야 해. 10개를 다 돌아야. 

    //26. opTags도 바껴야지
    const [opTags, setOptags] = useState();

    //30. ref를 써보자. target.value말고

    const sel = useRef();


    useEffect(() => { //프로미스 객체 생성. 이 방식으로. url 던졌다가 다시 올때. 이 시점에-> .then((resp)) // 1.2.3. 순서로 가봐.
        //2. 물음표까지가 엔드포인트. 물음표 부터 요청변수, &는 여러개의 요청변수

        //23. 코드가 배열이었다.
        // let tempcd = code.filter((i) => i["예보구분"] === "초단기예보");
        //  console.log('tempce', tempcd);


        //24. 이제 이걸 셀렉트박스에 해보자        


        //22. 콘솔에 찍어보자 코드.              
        // console.log('code', code); //초단기 예보인것만 골라와야. 필터링.





        let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?' //요청 url이다.

        url = url + 'serviceKey=9IZgTnv%2FlgPK2c%2BJcMk4qKiZfz98OMWrRS4OExS9S%2BVHYm4Axmh%2BUzFH4I0UdNByGrTIfzoyNTSshiljEkvcDw%3D%3D';
        url = url + '&numOfRows=60'; //19. 60개 보고싶다. total이 60이니까. url 보고 확인
        url = url + '&pageNo=1';
        url = url + '&base_date=20230524'; //오전 6시반에 갱신이 되니까 이 시간이 안지나서 보면 어제꺼가 나온다.
        url = url + '&base_time=0630';
        url = url + '&nx=55';
        url = url + '&ny=127';
        url = url + '&dataType=json'; //4.추가. 이거 없이 url 3.에서 코드 보니까 XML 파일이다. 이걸 json으로 만들자.
        console.log(url);//3. 이걸 먼저 살펴. url을 먼저 봐.


        //5.이제 뿌려야지. 여기까지가 데이터 가져온거. item만 갖고오면 되네. 이 배열만 화면에 찍어주면 되겠네.


        fetch(url) //1.
            // .then((resp) => console.log(resp)) //resp로 넘어온 데이터는 리액트에서 쓸수있는 형태가 아니니까 resp.json() 형태로 바꿔줘!!
            .then((resp) => resp.json()) //제이슨으로 변경하는 시간이 걸리니까 이걸 또 캐치 해줘야 돼서 then.
            //.then((data) => console.log(data)) // 6. 이걸로 F12 보니 response.body.items.item만 필요하단게 보인다.
            .then((data) => setItems(data.response.body.items.item)) //9. 여기까지 들어가야 배열이 나온다. 페치 끝나면 items가 바뀌겠지~ 이게 useEffect 디펜던시 어레이에 items 넣어봐.
            .catch((err) => console.log(err)); //에러 발생할수 있으니 에러를 또 캐치해 내기 위해.


        //23. 코드가 배열이었다.
        //25. 여기로 옮겼다. 
        let tempcd = code.filter((i) => i["예보구분"] === "초단기예보");
        tempcd = tempcd.map((i, idx) =>
            <option key={i["항목값"]} value={i["항목값"]}>{(i["항목명"])}{(i["항목값"])}</option>
        );


        //27.여기에 실행되게. //이제 키값 에러 나니까 키값 주자 바로위에. //그리고 이제 클릭할때마다 아래 테이블 바껴야지.
        setOptags(tempcd);
        console.log('tempce', tempcd);

        //28. 이제 셀렉트가 바뀔때마다 아래 테이블이 변해야해. onchange = showItem. 사용자정의 함수 만들어.


    }, []);




    useEffect(() => {
        //14. 아이템이 없을때 안나타내도록 거르기. 아까 items에 undefined 되는게 있었는데 이제 없어진다.
       //if (items === undefined) return;


        //16. 오브젝트를 다 돌아야 한다. 하나 만들때마다 <tr>이 생겨야 한다. 4개 항목이 있는 tr. jsx는 리턴에 태그가 들어간다.i는 오브젝트 // tr이 10개 들어간다.
        //18. 키값을 줘야해. tr key= i.category + i.fcstDate 이런거 해도 되지만 idx 를 해버리면 유일(오름차순 자연수)

    //    let temp = items.map((i, idx) =>
    //         <tr key={i.category + idx}>
    //             <td>{tempcd["항목명"]}</td>
    //             <td>{i.fcstDate}</td>
    //             <td>{i.fcstTime}</td>
    //             <td>{i.fcstValue}{tempcd["단위"]}</td>
    //         </tr>
    //     );


    }, [items]) //items 가져올때마다 뿌림

    //11. 메인 바꾼다 이제. 피코에서 테이블 형태도 갖고오고. hwp 보고 응답메세지 보고. items에 뭐있는지도 봐. basedate = 발표일자 이런거 봐.
    //12. item에 10개 tr로 10개 생겨야된다. jsx에 문법 들어가야. {trTags}뭔가 바뀔때마다 여기에 뭐가 들어가겠지. 그래서 state변수 썼다. 13가셈. 위로.

    //20. 이제 자료구분코드에서 LGT면 LGT, PTY면 PTY만 보고싶다. 선택해서 보고싶다. 선택지 만들고싶어. 사용자로부터 입력 받아야한다. form태그. 무조건.
    //20.1 사용자 입력을 받으려면 무조건 form태그가 필요하다. 그냥 텍스트박스 해서 LGT해도 되지만, 귀찮잖아. 선택지로 고르게. radio 버튼 써도 된다.
    //20.2 rest API 이제 만들어서 받아서 할거면. 내 입맛대로 받아서 올때, 내 화면에 그~대로. 우리 내부의 DB라면 LGT 대신에 한글로 적으면 그만. DB에서 그냥 join 해서 보내주면 되네. 프론트엔드에선 뿌리기만 하면돼.
    //20.3 근데 이건 기상청 데이터니까 친절하지 않다. 대신 문서 하나 던져줌. 이안에 들어있다. 이걸 내가 만들어서 써야해 => getcode.json 으로 만들었다.
    //20.4 hwp 16페이지 테이블을 엑셀에서 python으로 해서 json으로 만든거.
    //20.5 getcode 예보구분이 초단기예보 인것만 골라와야한다. -> select 박스로 만들어주자.




    //select는 사용자 정의 함수. form으로 싸.

    // 29. 사용자 정의 = select change //form은 막 클릭하면 재렌더링 일어난다. e.preventDefalut(); select로 가져오는방법 여러가지.
    // 30. 위에 유즈이펙트에 있던 if~부터 다 갖고와. 셀렉트 할때마다 바껴야 하니까 이젠. const sel = useRef(); 배운걸 써보자.
    // 30.1 대신 temp=items.map 인걸 temp=temp.map 으로 바꿔야겠지. 안그럼 전부 다나와.
    // 33. 하늘상태. hwp 17p 있는걸로 예보값의 코드값을 맑음(1), 구름많음(3), 흐림(4) 이걸로 해보자.
    // 
    const showItem = (e) => {
        e.preventDefault();
        // console.log('sel', e.target.value); //이 방법
        console.log('sel', sel.current.value); //"항목값골랐다."

        //31. 여기 복사 붙여넣기 해서 , temp, tempcd, 이걸 왜했는지 다시 이해.
        if (items === undefined) return;
        let temp = items.filter((i) => i.category === sel.current.value);
        let tempcd = code.filter((i) => i["예보구분"] === "초단기예보" &&
        i["항목값"] === sel.current.value
        ); 
        tempcd = tempcd[0]; //32.까지.

        let skyobj = {'1':'🌞', '3':'☁', '4':'흐림'};
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
                            <div><h1>기상청 초단기예보</h1></div>
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

export default Fcst;
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
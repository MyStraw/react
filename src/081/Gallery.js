//{"response": {"header":{"resultCode":"0000","resultMsg":"OK"},"body": {"items": {"item":[{"galContentId":"2927989","galContentTypeId":"17","galTitle":"자갈치크루즈","galWebImageUrl":"http://tong.visitkorea.or.kr/cms2/website/89/2927989.jpg","galCreatedtime":"20221130202151","galModifiedtime":"20221202134134","galPhotographyMonth":"202001","galPhotographyLocation":"부산광역시 중구 자갈치해안로 60  ","galPhotographer":"부산관광공사","galSearchKeyword":"자갈치크루즈, 부산광역시 중구, 부산관광공사"},{"galContentId":"2927983","galContentTypeId":"17","galTitle":"자갈치시장","galWebImageUrl":"http://tong.visitkorea.or.kr/cms2/website/83/2927983.jpg","galCreatedtime":"20221130202148","galModifiedtime":"20230403161126","galPhotographyMonth":"202000","galPhotographyLocation":"부산광역시 중구 자갈치해안로 52","galPhotographer":"부산관광공사","galSearchKeyword":"자갈치시장 (2020), 부산광역시 중구, 부산관광공사"},{"galContentId":"2563904","galContentTypeId":"17","galTitle":"관광명소 자갈치 시장","galWebImageUrl":"http://tong.visitkorea.or.kr/cms2/website/04/2563904.jpg","galCreatedtime":"20181023102210","galModifiedtime":"20181026131503","galPhotographyMonth":"201801","galPhotographyLocation":"부산광역시 중구 남포동","galPhotographer":"임지향","galSearchKeyword":"2018 제46회 대한민국 관광사진 공모전, 입선, 관광명소 자갈치 시장, 부산광역시 중구, 전통시장, 재래시장, 수산물 시장, 어시장, 노점, 파라솔"},{"galContentId":"1879929","galContentTypeId":"17","galTitle":"낙산해변회센터거리","galWebImageUrl":"http://tong.visitkorea.or.kr/cms2/website/29/1879929.jpg","galCreatedtime":"20140103103732","galModifiedtime":"20150617132730","galPhotographyMonth":"201312","galPhotographyLocation":"강원도 양양군","galPhotographer":"한국관광공사 김지호","galSearchKeyword":"낙산해변회센터거리, 낙산해수욕장, 낙산해변, 횟집, 부산자갈치 별미횟집, 강원도 양양군, 강원도양양군"}]},"numOfRows":4,"pageNo":1,"totalCount":4}}}
//https://www.data.go.kr/iim/api/selectAPIAcountView.do



import styles from "./Gallery.css";
import { useState, useEffect, useRef } from 'react';
import GalleryView from "./GalleryView";

const Gallery = () => {
    //state 변수
    const [items, setItems] = useState();

    //input 제어
    const txt1 = useRef(); //포커스를 커서에. 


    //컴포넌트가 처음 렌더링 되었을때 한번 실행
    useEffect(() => {
        txt1.current.focus();
        //input에 포커스 맞추기
    }, []);

    //컴포넌트 해당하는 state변수가 변경이 될때마다 실행(fetch, then 부분)

    useEffect(() => {
        console.log("useEffect", items);

    }, [items]);




    //2. 포커스 했으니 이제 버튼에 이벤트 줘볼까? onClick 가보자.
    //함수호출을 콜백형식으로. =>사용자 정의 함수다. show랑 showClear


    //사용자정의함수
    const getData = (kw, num, no) => { //아래 const에서 kw값을 여기로 넘겨줬다.
        let apikey = '9IZgTnv%2FlgPK2c%2BJcMk4qKiZfz98OMWrRS4OExS9S%2BVHYm4Axmh%2BUzFH4I0UdNByGrTIfzoyNTSshiljEkvcDw%3D%3D';
        let url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?'
        url = url + `serviceKey=${apikey}`;
        url = url + `&numOfRows=${num}`;
        url = url + `&pageNo=${no}`;
        url = url + '&MobileOS=ETC';
        url = url + '&MobileApp=AppTest';
        url = url + '&arrange=A';
        url = url + `&keyword=${kw}`;
        url = url + '&_type=json';

        console.log(url)

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setItems(data.response.body.items.item)) //그냥 data 하면 모든 데이터 다 가져옴. array 10개만 받고싶다. response 자체도 객체. 이 안에서 body를 갖고와야. 계속 콘솔로 찍어보면서 해. items도 오브젝트.
            .catch((err) => console.log(err));
    }

    const show = (e) => { //발생되는 이벤트(새로고침) 막아야. 전달되는걸 받자. 온클릭에 만든 (e)를 여기서 받는거구나.
        e.preventDefault(); // 키워드 안에 입력한걸 이제 여기로 가져올 차례
        //인코딩한 키워드를 해야하니 url 인코딩 괄호 넣기
        //공백체크도 가능하다. //공백이면 콘솔에 아무것도 안뜨게. 
        if (txt1.current.value === ''){
               alert ("키워드를 입력해주세요" );   
            return;
    }

        //인코딩한 키워드

        const kw = encodeURI(txt1.current.value);
        getData(kw, 10, 1); //호출하면서 여기서 정의한 kw값을 인수로 준다. 10은 num, 1은 no
        console.log(kw,10,1);
    }

    const showClear = (e) => {
        e.preventDefault();
    }





    //fetch 정보를 이제 갖고와야. 아래 부분이 바뀌어야지. 패치한 내용들로 아래 아이템들이 변경돼야.








    return (
        <main className="container">
            <form>
                <article>
                    <header><h1>한국관광공사 관광사진 정보</h1>
                    </header>
                    <div className="grid">
                        <div>
                            <input ref={txt1} type="text" id="txt1" name="txt1" placeholder="키워드를 입력하세요" required />
                        </div>
                        <div className="btDiv">
                            <button onClick={(e) => show(e)}>확인</button>
                            <button onClick={(e) => showClear(e)}>취소</button>
                        </div>
                    </div>                   
                </article>
            </form>
            {items && <GalleryView content= {items} />}
        </main>
    )
}
//content는 변수명. 아무거나 해도 된다. 여기서 items는 undefined라서 넘기면 view에서 못받는다. {items} &&  이걸 추가
export default Gallery;

//{"response": {"header":{"resultCode":"0000","resultMsg":"OK"},"body": {"items": {"item":[{"galContentId":"2927989","galContentTypeId":"17","galTitle":"자갈치크루즈","galWebImageUrl":"http://tong.visitkorea.or.kr/cms2/website/89/2927989.jpg","galCreatedtime":"20221130202151","galModifiedtime":"20221202134134","galPhotographyMonth":"202001","galPhotographyLocation":"부산광역시 중구 자갈치해안로 60  ","galPhotographer":"부산관광공사","galSearchKeyword":"자갈치크루즈, 부산광역시 중구, 부산관광공사"},{"galContentId":"2927983","galContentTypeId":"17","galTitle":"자갈치시장","galWebImageUrl":"http://tong.visitkorea.or.kr/cms2/website/83/2927983.jpg","galCreatedtime":"20221130202148","galModifiedtime":"20230403161126","galPhotographyMonth":"202000","galPhotographyLocation":"부산광역시 중구 자갈치해안로 52","galPhotographer":"부산관광공사","galSearchKeyword":"자갈치시장 (2020), 부산광역시 중구, 부산관광공사"},{"galContentId":"2563904","galContentTypeId":"17","galTitle":"관광명소 자갈치 시장","galWebImageUrl":"http://tong.visitkorea.or.kr/cms2/website/04/2563904.jpg","galCreatedtime":"20181023102210","galModifiedtime":"20181026131503","galPhotographyMonth":"201801","galPhotographyLocation":"부산광역시 중구 남포동","galPhotographer":"임지향","galSearchKeyword":"2018 제46회 대한민국 관광사진 공모전, 입선, 관광명소 자갈치 시장, 부산광역시 중구, 전통시장, 재래시장, 수산물 시장, 어시장, 노점, 파라솔"},{"galContentId":"1879929","galContentTypeId":"17","galTitle":"낙산해변회센터거리","galWebImageUrl":"http://tong.visitkorea.or.kr/cms2/website/29/1879929.jpg","galCreatedtime":"20140103103732","galModifiedtime":"20150617132730","galPhotographyMonth":"201312","galPhotographyLocation":"강원도 양양군","galPhotographer":"한국관광공사 김지호","galSearchKeyword":"낙산해변회센터거리, 낙산해수욕장, 낙산해변, 횟집, 부산자갈치 별미횟집, 강원도 양양군, 강원도양양군"}]},"numOfRows":4,"pageNo":1,"totalCount":4}}}
//https://www.data.go.kr/iim/api/selectAPIAcountView.do

import styles from "./Gallery.css";
import { useState, useEffect, useRef } from 'react';
//import GalleryItem from "./GalleryView";
import GalleryView from "./GalleryView";


const Gallery = () => {
    const [mvlist, setMvlist] = useState();
    //키워드 input
    const txt1 = useRef();
    //컴포넌트가 맨처음 랜더링 되면
    useEffect(() => {
        txt1.current.focus(); //커서가 텍스트 박스에 들어가게.
    }, []);


    //확인버튼
    const show = (e) => {
        e.preventDefault();
        if (txt1.current.value === '') return; //required가 안먹히네        
        let kw = encodeURI(txt1.current.value); //부산이란 글자를 URL 형태로 인코딩 하는거. 콘솔로 확인해봐봥
        console.log(txt1.current.value, kw);
        getData();
        
    }

    //취소버튼
    const showClear = (e) => {
        e.preventDefault();
    }

    const getData = (e) => {
        let kw = encodeURI(txt1.current.value);
        const keyword = kw;
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=9IZgTnv%2FlgPK2c%2BJcMk4qKiZfz98OMWrRS4OExS9S%2BVHYm4Axmh%2BUzFH4I0UdNByGrTIfzoyNTSshiljEkvcDw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${keyword}&_type=json`
                              
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setMvlist(data.response.body.items.item))
            .catch((err) => console.log(err));               
        console.log(setMvlist);

    }

    

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
                        <div className={styles.btDiv}>
                            <button onClick={(e) => show(e)}>확인</button>
                            <button onClick={(e) => showClear(e)}>취소</button>
                        </div>

                    </div>
                    <div>{mvlist&&mvlist.map(item => (
                        <GalleryView key={item.galContentId} item={item}/>
                    ))}</div>                    
                </article>
            </form>
        </main>
    )
}

export default Gallery;



// // Gallery.js
// // ...
// const renderGalleryItems = () => {
//     const items = [];
//     const itemCount = mvlist ? Math.min(10, mvlist.length) : 0;

//     for (let i = 0; i < itemCount; i++) {
//         const item = mvlist[i];
//         const fullWidth = (i + 1) % 2 !== 0 && (i + 1) === itemCount;

//         items.push(<GalleryItem key={item.galContentId} item={item} fullWidth={fullWidth} />);
//     }

//     return items;
// };

// return (
//     // ...
//     <div className={styles.galleryContainer}>{mvlist && renderGalleryItems()}</div>
//     // ...
// )

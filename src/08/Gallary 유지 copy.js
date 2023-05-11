// Gallary.js
import styles from "./Gallary.module.css";
import { useState, useEffect, useRef } from 'react';
import GalleryItem from './GalleryView';

const Gallary = () => {
    const dtKey = [];

    const [mvlist, setMvlist] = useState();

    // 키워드 input
    const txt1 = useRef();

    // 컴포넌트가 처음 렌더링 되면
    useEffect(() => {
        txt1.current.focus();
    }, []);

    // 확인버튼
    const show = (e) => {
        e.preventDefault();
        if (txt1.current.value === '') return;
        let kw = encodeURI(txt1.current.value);
        console.log(txt1.current.value, kw);
        getData(); // 추가
    }

    // 취소버튼
    const showClear = (e) => {
        e.preventDefault();
    }

    const getData = (e) => {
        let kw = encodeURI(txt1.current.value);
        const keyword = kw;
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=9IZgTnv%2FlgPK2c%2BJcMk4qKiZfz98OMWrRS4OExS9S%2BVHYm4Axmh%2BUzFH4I0UdNByGrTIfzoyNTSshiljEkvcDw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${keyword}&_type=json`

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setMvlist(data.body.items.item))
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
                    <div>
                        {mvlist && mvlist.map(item => (
                            <GalleryItem key={item.galContentId} item={item} />
                        ))}
                    </div>                    
                </article>
            </form>
        </main>
    )
}

export default Gallary;

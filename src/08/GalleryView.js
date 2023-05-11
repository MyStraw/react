// GalleryItem.js
import React from 'react';
import styles from "./Gallery.module.css";

//두개로 나누기
//교수님은 div grid로  arigicle 2개를 넣음.
//10개 그림이 있으면 10번 도는게 아니라
//제일 처음 인덱스 0, 2, 4, 6, 8. 반복문에서 이거 찍어서. 이만큼만 돌아서
//오른쪽꺼는 0+1, 2+1,
//i = 0,2,4,6,8
//그 옆에꺼 찍을지 말지는, 그 다음 i가 있으면 i+1을 찍어.
//없으면 안찍어. 그럼 아티클 1개밖에 안돼~~

const GalleryItem = ({ item }) => {
    return (
        <div>
            <article>
                <header className={styles.head}>
                    <div className={styles.t1}>{item.galTitle}</div>
                    <div className={styles.word}>{item.galPhotographyLocation}</div>
                </header>
                <body>
                    <img src={item.galWebImageUrl} alt={item.galTitle} />
                </body>
                <footer>
                    <div className={styles.word}>{item.galSearchKeyword}</div>
                </footer>
            </article>

        </div>

    );
};

export default GalleryItem;

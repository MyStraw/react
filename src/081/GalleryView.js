import GalleryArticle from './GalleryArticle';
import React from 'react';
//import styles from "./Gallery.module.css";

//gallery에서는 form만 뿌려줌

const GalleryView = ({ content }) => {
    console.log("GalleryView", content); //content가 배열이다. length 가짐.

    const tags = [];

    for (let i = 0; i < content.length; i = i + 2) { //2개씩 올라가는데 아래에서 i랑 i+1을 각각 아티클로 배치하주면 된다. 근데 i+1이 없을수도 있잖아? 홀수개일때. 그때 처리법
        console.log(i)
        tags.push(
            <div className="grid" key={'div'+i}>
                <GalleryArticle item={content[i]}/>
                {(i + 1 < content.length) && <GalleryArticle item={content[i+1]}/>}      

            </div>
        );
    }
    //{content[i+1] 이렇게 하니까 2개씩 나오네
    //근데 광안리 같은건 맨 마지막에 홀수개야. 이거땜에 바로 i+1못해서
    //{i + 1 < content.length &&
    //   <article>
    //  <header>{content[i + 1].galTitle}</header>
    //</article>
    //} 이 항목 추가


    return (
        <>
            {tags}
        </>

    );
};

export default GalleryView;

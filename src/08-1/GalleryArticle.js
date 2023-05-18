import styles from "./Gallery.module.css";


const GalleryArticle = ({ item }) => {
let tags = item.galSearchKeyword.split(',');
console.log(tags) ;//배열이네. map 돌수있겄지.
tags = tags.map((i)=><div className={styles.footer}>{i}</div>)

    return (
        <article>
            <header>
                <h2 className = {styles.title}>{item.galTitle}</h2>
                <span>{item.galPhotographyLocation}</span>
            </header>
            <div>
                <img src={item.galWebImageUrl}></img>
            </div>
            <footer className={styles.tags}>
                {tags}
            </footer>
        </article>
    );
}
export default GalleryArticle;
import { useParams } from "react-router-dom";

const RoutePage1 = () => {
    const item = useParams().item;
    const item2 = useParams().item2;
    return (
        <article>
            <header><h1>RoutePage1</h1></header>
            <h1>{item}{item2}</h1>
        </article>
    );
}

export default RoutePage1;
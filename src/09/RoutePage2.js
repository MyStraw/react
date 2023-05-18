import { useLocation } from "react-router-dom";
import qs from 'query-string'; //url 에서 정보 빼는역할


const RoutePage2 = () => {
    const loc = useLocation().search
    //?item=%F0%9F%8D%95&item2=%F0%9F%8D%9F 이거 쿼리스트링을 뽑아냄.
    console.log('loc',loc)

    const item = qs.parse(loc).item;
    const item2 = qs.parse(loc).item2;
    console.log('item', item)
    
    // 쿼리스트링 안하면 아래처럼 해야된다.
    let loc2 = loc.replace('?',''); //앤드 없애고
    loc2 = loc2.split('&')
    loc2.map((i)=>i.split('='))
    console.log(loc2)

    return (
        <article>
        <header><h1>RoutePage2</h1></header>
        <h1>{item}</h1>
        <h1>{item2}</h1>
    </article>
    );
}

export default RoutePage2;
import { Link } from "react-router-dom";//a 태그 못쓴다 라우팅 상태면. 링크로 걸어야해. 그래서 이거써.

const RouteNav = () => {

    return (
        <nav>
            <ul>
                <li><Link to ='/' roll='button'>Home</Link></li>
                <li><Link to ='/page1/🍕/🍟' roll='button'>Page1</Link></li>
                <li><Link to ='/page2?item=🍕&item2=🍟' roll='button'>Page2</Link></li>                
            </ul>
        </nav>
    );
}

export default RouteNav;
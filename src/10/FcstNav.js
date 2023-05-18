import { Link } from "react-router-dom";
import styles from "./Fcst.css"

const FcstNav = () => {

    return (
        <nav >
            <ul className="dan">
                <div>기상청 단기예보</div>
            </ul>
            <ul>
                <li><Link to='/' role='button'>단기예보메인</Link></li>
            </ul>

        </nav>

    );
}

export default FcstNav;
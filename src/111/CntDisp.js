import { Link } from "react-router-dom";
import { CntAtoms } from "./CntAtoms";
import { useRecoilState } from "recoil";

const CntDisp = () => { 
    const [n] = useRecoilState(CntAtoms);

    return (
        <article>
            <h2>입력값: {n} , 입력값 2배: {2*n}</h2>
            <footer>
                <Link to={'/'} role='button' >입력화면이동</Link>
            </footer>
        </article>
    )
}

export default CntDisp;
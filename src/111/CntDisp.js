import { Link } from "react-router-dom";
import { CntAtoms, CntAtomsTwice } from "./CntAtoms";
//import { useRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
const CntDisp = () => { 
 //   const [n] = useRecoilState(CntAtoms); [n, setN] setN 안쓰니까. 
    const n = useRecoilValue(CntAtoms); //value를 import 로 set 안써도 된다.
    const n2 = useRecoilValue(CntAtomsTwice);
    return (
        <article>
            <h2>입력값: {n} , 입력값 2배: {n2}</h2>
            <footer>
                <Link to={'/'} role='button' >입력화면이동</Link>
            </footer>
        </article>
    )
}

export default CntDisp;
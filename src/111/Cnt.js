import CntDisp from "./CntDisp";
import CntInput from "./CntInput";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";


const Cnt = () => {


    return (
        <BrowserRouter>
            <main className="container">
            <RecoilRoot>
                    <Routes>
                        <Route path='/' element={<CntInput />} />
                        <Route path='/disp/' element={<CntDisp />} />
                    </Routes>
                    </RecoilRoot>
            </main>
        </BrowserRouter>
    );

}
export default Cnt;


import { BrowserRouter, Routes, Route } from "react-router-dom";

import UltraSrtFcst from "./UltraSrtFcst copy";
import VilageFcst from "./VilageFcst copy";
import FcstMain from "./FcstMain copy";
import FcstNav from "./FcstNav copy";
import getcode from "./getcode.json"


const Fcstcopy= () => {
    const ultraCategory = getcode.filter((item) => item["예보구분"] === '초단기예보').map((item) => item["항목명"]);
    const vilageCategory = getcode.filter((item) => item["예보구분"] === '단기예보').map((item) => item["항목명"]);

    return (
        <BrowserRouter>
        <main className="container">        
            <FcstNav/>            
            <Routes>
                    <Route path='/' element={<FcstMain  /> } />
                    <Route path='/ultra/:dt/:area/:x/:y' element={<UltraSrtFcst ultraCategory={ultraCategory} />} />
                    
                    <Route path='/vilage/:dt/:area/:x/:y' element={<VilageFcst vilageCategory={vilageCategory} />} />
            </Routes>            
        </main>
        
        </BrowserRouter>

    );
}

export default Fcstcopy;
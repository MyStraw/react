import UltraFcst from './UltraFcst';
import VillageFcst from './VillageFcst';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FcstMain from "./FcstMain";


const Fcst = () => {


    // return (
    //     <BrowserRouter>
    //     <main className="container">       
                      
    //         <Routes>
    //                 <Route path='/' element={<FcstMain  /> } />
    //                 <Route path='/ultra/:dt/:area/:x/:y' element={<UltraFcst />} />                    
    //                 <Route path='/vilage/:dt/:area/:x/:y' element={<VillageFcst  />} />
    //         </Routes>            
    //     </main>        
    //     </BrowserRouter>
    // );


    return (
    <>        
    <UltraFcst/>
    <VillageFcst/>
    </>
   
)



    
   
}

export default Fcst;
// return (
//     <>        
//     <UltraFcst/>
//     <VillageFcst/>
//     </>
   
// )
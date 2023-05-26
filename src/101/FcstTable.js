import { useEffect, useState, useRef } from "react";
import code from "./getcode.json";

//item만 넘겨주면 돼~ 단기예보것만.


const FcstTable = ({items, gubun}) => {    
    const [trTags, setTrTags] = useState();
    const [opTags, setOptags] = useState();
    const sel = useRef();
    
    useEffect(() => {         

        let tempcd = code.filter((i) => i["예보구분"] === gubun);
        // console.log("code", code);
        tempcd = tempcd.map((i, idx) =>
            <option key={i["항목값"]} value={i["항목값"]}>{(i["항목명"])}{(i["항목값"])}</option>
        );
        
        setOptags(tempcd);
       // console.log('tempcd', tempcd);

        
    }, [gubun]);   



    const showItem = (e) => {
        e.preventDefault();       
        
        if (items === undefined) return;
        let temp = items.filter((i) => i.category === sel.current.value);
        let tempcd = code.filter((i) => i["예보구분"] === gubun &&
        i["항목값"] === sel.current.value
        ); 
        tempcd = tempcd[0]; 

       console.log('temp', temp);
       console.log('tempcd', tempcd);
        let skyobj = {'1':'맑음', '3':'구름많음', '4':'흐림'};
        let ptyobj ={'0':'없음', '1':'비', '2':'비/눈', '3':'눈', '5':'빗방울', '6':'빗방울눈날림', '7':'눈날림'};

        // temp = temp.map((i, idx) =>
        //     <tr key={i.category + idx}>
        //         <td>{tempcd["항목명"]}</td>
        //         <td>{i.fcstDate.slice(0, 4)}-{i.fcstDate.slice(4, 6)}-{i.fcstDate.slice(6, 8)}</td>
        //         <td>{i.fcstTime.slice(0, 2)} : {i.fcstTime.slice(2, 4)}</td>
        //         <td>                    
        //             {(i.category === 'SKY') ? skyobj[i.fcstValue] 
        //             : (i.category === 'PTY') ? ptyobj[i.fcstValue]
        //             : i.fcstValue + tempcd["단위"] }              
                
        //         </td>
        //     </tr>
        // );

      //  console.log('items', items); 
      //  console.log('temp', temp); 
        // setTrTags(temp); 
    }


    return (
        <main className="container">
            <form>
                <article>
                    <header>

                        <div className="grid">
                            <div><h1>기상청 {gubun}</h1></div>
                            <div>
                                <select ref={sel} id='sel' name='sel' onChange={showItem}>
                                    <option val=''>선택</option>
                                    {opTags}
                                </select>
                            </div>
                        </div>

                    </header>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">자료구분코드</th>
                                <th scope="col">예측일자</th>
                                <th scope="col">예측시간</th>
                                <th scope="col">예보 값</th>
                            </tr>
                            {items && trTags}
                        </thead>
                    </table>
                </article>
            </form>
        </main>
    )
}

export default FcstTable;

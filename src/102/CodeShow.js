import {CodeAtom, CodeAtom2} from './CodeAtom'
import { useRecoilValue } from "recoil"
import code from '../101/getcode.json'
import { useState } from 'react'

const CodeShow = ()=>{

    const sel1=useRecoilValue(CodeAtom);
    const sel2=useRecoilValue(CodeAtom2);
    const [itemTag, setItemTag] = useState();

    let temp = code.filter((i)=>i["예보구분"]=== sel1 && i["항목값"] === sel2)
   
    setItemTag(
        <ul key={temp[0]['항목값']}>
        <li>{temp[0]['항목명']}</li>
        <li>{temp[0]['단위']}</li>
        </ul>
    );

    

    console.log(sel1, sel2)


    return(
        <ul>
        {itemTag}
        </ul>
    )

}

export default CodeShow;
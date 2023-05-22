import FcstTable from "./FcstTable";
import { useLocation } from "react-router-dom";
import qs from 'query-string';
import getcode from "./getcode.json"
import { useState, useEffect, useRef } from 'react';

const UltraSrtFcst = ({ultraCategory}) => { //객체로 받아왔기때문에 구조분해 해야한다. {}이걸로 구조분해할당 가능.

    const ops = ultraCategory.map((item) =>(
        <option value={item}key={item}>
            {item}
        </option>));


    // 추가되어야 할 함수 예시
    const getSelectedCategoryValue = (selectedCategoryName) => {
        const selectedCategory = getcode.find(item => item["항목명"] === selectedCategoryName);
        return selectedCategory ? selectedCategory["항목값"] : null;
    }

    // 상태를 저장하는 부분
    const [selectedCategoryValue, setSelectedCategoryValue] = useState(null);

    // 선택 이벤트 핸들러
    const handleSelectChange = (e) => {
        const selectedCategoryName = e.target.value;
        const selectedCategoryValue = getSelectedCategoryValue(selectedCategoryName);
        setSelectedCategoryValue(selectedCategoryValue);
    }



    return (
        <article>
            <header>
                <div>초단기예보</div>
                <div>
                    <select id="ultra" name="ultra">
                        <option>선택</option>
                       {ops}
                    </select>
                </div>
                </header>
           
            <FcstTable/>
            
        </article>

    );
}

export default UltraSrtFcst;
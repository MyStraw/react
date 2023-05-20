import FcstTable from "./FcstTable";
import { useLocation } from "react-router-dom";
import qs from 'query-string';

const VilageFcst = ({ vilageCategory }) => {


    const ops = vilageCategory.map((item) => (
        <option value={item} key={item}>
            {item}
        </option>));



    return (
        <article>
            <header>
                <div>단기예보</div>
                <div>
                    <select id="ultra" name="ultra">
                        <option>선택</option>
                        {ops}
                    </select>
                </div>
            </header>

            <FcstTable />

        </article>

    );
}

export default VilageFcst;
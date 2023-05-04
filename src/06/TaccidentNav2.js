

const TaccidentNav2 = ({ c2, sel1, setSel2 }) => { //프롭스로 정보 넘겨오기. useState까지 같이 다 넘겨와.


    const c2Arr = c2.filter((item) => item[0] === sel1);

    const btTag = c2Arr.map((item) =>

        <li key={item}>
            <button onClick={() => setSel2(item)}>{item[1]}</button>
        </li>

    );


    return (
        <nav>
            <ul>
                <h4>사고유형 중분류</h4>
            </ul>
            <ul>
                {btTag}
            </ul>
        </nav>
    );
}
export default TaccidentNav2;
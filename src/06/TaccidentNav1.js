
import style from './Taccident.module.css';

const TaccidentNav1 = ({ c1, sel1, setSel1 }) => { //프롭스로 정보 넘겨오기. useState까지 같이 다 넘겨와.
//    console.log("TaccidentNav1", c1) //넘겨왔는지 확인.

    // const show = (item)  => {
    //     console.log(item)

    // }

    const btTag = c1.map((item) => //맵으로 돌아댕기면서 배열. 아래꺼를 넣어. li 4개 나와야. c1 넘겨왔으니. //setSel1으로 이게 제대로 되는지 어떻게 확인?
        //useEffect 이용. Taccident로 이동해서 임포트에 useEffect 낑가넣고. props로 함수가 넘어오게. Taccident 43번째 줄 쯤에 const.
        //로그 확인해봐. console.log('TaccidentNav1 sel1',sel1). [TaccidentNav1 sel1 차대사람] 클릭시 이런식으로 콘솔에 뜨는지.

        <li key={item} >
            <button onClick={() => setSel1(item)} className={style.sp1}>{item}</button>
        </li>
    );

    return (
        <nav>
            <ul>
                <h1>사고유형_대분류</h1>
            </ul>
            <ul>
                {btTag}
            </ul>
        </nav>
    );
}
export default TaccidentNav1;
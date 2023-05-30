import code from '../101/getcode.json'
import CodeList from './CodeList';
import { useState, useEffect } from 'react'; //스테이트는 변수. 특별히 관리되는 변수.

const CodeGubun = () => {

    const [sel, setSel] = useState();

    const selItem = (e) => {
        console.log(e.target.value);
        setSel(e.target.value)
        console.log('state', sel); //이렇게 찍어도 안바뀐다. undefined 나온다. 아직 반영이 안된거다. 바뀌는 시점에서 찍어봐라. 바뀔때 무조건 실행되는 함수. 그게 useEffect다. useEffect는 함수다.

    }

    useEffect(() => {
        console.log('effect', sel)

    }, [sel]); //sel이 바꼈을때 실행되게

    //이제 state 변수로 CodeList 변하게 해주면 된다. 이름 똑같을 필요는 없고, 태그의 개념으로 보면 된다. 이 안에 리턴되는 묶음들. 태그는 속성을 가질수 있다.
    // 이 속성이름을 sell={sel} 이 속성값에 스테이트 변수값을 줬다. 값이 있을때만 보내고 싶다. 공백이 있을수도 있잖아.
    //CodeList가 값을 받는다. props가. 그냥 선택만 했을땐 안넘어가게 하고싶다.
    //이런 공백을 false. {} 이건 표현식이 들어간다는 얘기. falsy 연산. {sel &&<CodeList sell={sel} />}
    //sel 이 있고 && 이거 있어야 true. 어 근데 위에걸로 하니까 넘어가넹. undefined 라서 그럴수도.
    //{sel === '' ?<h1>값을 선택하세요</h1> : <CodeList sell={sel} />} //3항연산. if문장을 쓸수가 없다. 


    //CodeList에서 고른것들을 다시 footer에 뿌려야 하는 문제가 생긴다. 이건 어떻게?

    return (
        <main className="container">
            <article>
                <form>
                    <div className="grid">
                        <div>
                            <select id="sel" name="sel" onChange={selItem}>
                                <option value="">선택</option>
                                {/* <option value="1">단기예보</option>
                    <option value="2">초단기예보</option> */}
                                <option value="단기예보">단기예보</option>
                                <option value="초단기예보">초단기예보</option>
                            </select>
                        </div>
                        <div>
                            {sel === '' ? <h1>값을 선택하세요</h1> : <CodeList sell={sel} />}
                        </div>
                    </div>
                    <footer>
                        <ul>
                            <li></li>
                        </ul>
                    </footer>
                </form>
            </article>


            {/* <ul>
            <li>초단기예보</li>
            <li>단기예보</li>            
        </ul> */}
        </main>
    )
};

export default CodeGubun;

//이제 선택해서 셀렉트 박스로 만들고 싶다. 만들고. 이제 이걸 이벤트로. onChange는 값이 바뀔때마다 호출. 뭔갈 해야할때. onClick하면 값이 안바껴도 눌릴때마다 뭔가 일어난다.
//단기예보를 선택한 상태에서 초단기예보로 바뀔때 onChange가 작동. onClick으로 하면 무슨 값이든 그냥 무조건 발생. 이게 차이다.
//셀럭트 박스는 옵션을 가진다. 이름이 sel. sel의 값은 옵션에 의해 정해진다. 단기예보를 선택하면 값은 1이 되는거다.
//onClick 호출시 반드시 콜백함수로 해야한다. 근데 그냥 이름만 줘도 된다. 대신 이름을 const로 위에 정의해줘야지.
// 이름만 주고 싶으면 그냥 이름만.

//onClick={()=>selItem()} 이거 대신에 const 넣고 {selItem} 이거만.
// console.log(e.target.value) 이벤트 만든거의 value. 이건 단기예보 클릭 할때마다 값이 1,1,1,1계속 콘솔에 뜬다.
// 이걸 onChange로 바꾸면 값이 바뀌어야만 콘솔에 출력. 단기예보만 눌리면 1 한번만 되고 그다음은 체인지가 아니니까 이벤트(e) 발생x.

//선택에서 단기예보 같은거 한번 선택하면 리턴이 되고 이렇게 한번 하고 <CodeList/> 이게낑겨오고 나면 안바뀐다.
//근데 난 셀렉트 바꿀때마다 바뀌고싶다. 다시 만들어져야 한다(렌더링)  <CodeList/>부분이 바뀌어져야 한다. 이때 쓰는게 state변수. useState 훅이란걸 쓴다.
//useState는 변수다. 이 컴포넌트 내에서만 관리되는 변수다. 나중에 전체 변수를 다 관리하는걸 배울겨.
//얘를 쓰고있는 부분만 재 렌더링이 일어난다. useState 바꿀땐 꼭 set변수를 이용해서 바꾸게끔. 할당을 해서 못바꾼다. 무조건 함수로 바꿔야.
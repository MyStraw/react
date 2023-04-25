//넘어오는 aname 의 값이 변수. 변수를 쓰려면 수식이 들어가야한다. -> 중괄호 써야돼. probs.aname
//함수에서 probs로 받아.
//아무것도 없을땐 MyDiv0가 돼라~~ 기본. falsy. 
//const aname 으로 변수로주면 <h1> props.aname 안해주고 aname만 해줘도 되지롱
//undefined 됐을때.  falsy일때 값. || 이거. 삼항연산 쓸수있다. 
//undefined 이기 땜에!aname ? aname : 'MyDiv0' 이거 적용이안돼

//undefined 라면 0으로 줘라 라는걸 처리해줘야해.

//1> const MyDivArticle = (props) => { 
// 매개변수를 props 사용하지않고 오브젝트에 매개변수명을 넣어서 사용
//Div1 에만 footer를 넣는법은?


import './MyDiv.css'; //전역으로 적용.어디에 있든지 다먹힌다. 전역에 먹힌다. App.js 에서 프래그먼트로 써놓은 App 마저도 글자색 변함
import style from './MyDiv.module.css'; //컴포넌트에적용. 여기에서만 적용.

//state 변수 사용 1단계
import { useState } from 'react';


const MyDivArticle = ({ aname }) => { //{오브젝트}를 쓰면 바로 받아서 쓸수있다. const aname 안해도.
    //1 >  const aname = props.aname;
    let n = (aname === undefined) ? '0' : aname.slice(-1); //aname 이 undifined 이면 0을 주고 그렇지 않으면 MyDiv1,2 이걸 0,1,2 로 뒷글자만. 슬라이스
    //    let cnt = 0; //0을 가지고 와서 한번 렌더링이 된 후에는 카운트가 안올라간다. 렌더링 한번 하고나면 안바껴. 변수 바뀔때마다 다시 재렌더링 일어나게. 이 컴포넌트가 죽을때까지 라이프 사이클.=>스테이트 변수
    //스테이트 변수 임포트부터시작. 유즈 스테이트->상태관리.

    
    //state 변수 사용 2단계 : 변수 선언
    const [cnt, setCnt] = useState(0); //cn++ 같은거 안돼. 초기값 0 . 배열 형식으로 가야해. 함수값(0)이므로 리턴이 있다. 2개값이다. 배열로 따로 받아내겠다. cnt와 setCnt. '구조분해로 받는다'고 한다.
    //바꿀때는 setCnt 로 바꿔야 한다. cnt= ~ 이런식이 아니라. 세터로 바꿔


    //클릭 이벤트 처리
    // const like = ()=>{cnt = cnt++; console.log(cnt)};
    //<h2><span onClick={like}>❤</span> {cnt}</h2> //이렇게 해도 1씩 올라가는, 함수 호출형식
    // const like = (n) => {cnt = cnt+n; console.log(cnt)}; //이건 n 인수 넣어서 n이 2씩 올라가게끔. 아래에 2를 넣었다.

    const like = () => {        
        setCnt(cnt + 1);        //바꾸고 싶은걸 setCnt로. 변경되는 부분만 재렌더링. 스테이트 변수가 있는 부분만 재렌더링. 02 Myclock도 초 올라가게
        console.log(n);
    }
        return (
            <article>
                <header><h1 className={style.mah1}>{aname || 'MyDiv0'}</h1></header>
                <ul className={style.aul}>
                    <li className={style.ali}>{n === '0' ? 'MyDiv0' : 'MyDiv' + n}-1</li> {/*삼항연산자 연습용.*/}
                    <li>{'MyDiv' + n}-2</li>
                </ul>
                {n === '1' && /* footer를 MyDiv1에만 만들래~ 1일때만!!!! true 조건부 렌더링. */
                    <footer>
                        <h2><span onClick={() => like(1)}>❤</span> {cnt}</h2>
                        {/*  // {n === '1' ? '냐하하하' : ''} // 이렇게 하니까 일단 footer 가 다 만들어지고 MyDiv1만 '냐하하하'가 나오네. 여기만 footer가 만들어지는게 아니라.*/}
                    </footer>
                }
            </article>

        );

    }

    export default MyDivArticle;

//h1 css에서 색깔 넣었는데 MyDivArticle에서만 적용되게 할라믄?
//MyDiv.module.css
import logo from '../logo.svg';
import './Hello.css';
import MyClockImage from '../02/MyClockImage';
import MyClockTime from '../02/MyClockTime';

//return x;  리턴 뒤에 반드시 x 자리에 태그가 온다.
//이 x 를 jsx라고 한다. 중괄호를 쓸수있다. 중괄호엔 자바스크립트 표현식 쓸수있다. 변수명.
//

const Hello = () => {// 사용자 정의태그엔 반드시 리턴이 있어야. 컴포넌트는 대문자로 시작. Hello. 리턴안에 무조건 태그 들어가야해. 빈 태그 만들자
    let name = '정승길';
    let git = 'https://github.com/MyStraw'; //리턴 윗부분. 펑션의 본문부분. 변수2개->리턴 안에 쓰고싶다.
    // 리턴 안에서 변수는 {}으로 부르면 된당. name 부분 확인해봐.
   
   
    return ( // 형제 div 못하고 1개만 만들수 있다 했잖아? 근데 프래그먼트 태그<> 빈태그로 감싸면 가능하다.
        <main className='container'>
            <article data-theme="dark">
                <div>
                    <img src={logo} className='App-logo' alt='logo' />
                </div>
                <MyClockImage/>                
                <MyClockTime/>
                < footer >
                    <hgoup>
                        <h1>{name}</h1 >
                        <h2><a href={git}>{git}</a></h2>
                    </hgoup>
                </footer >
            </article>
        </main >
    );
}

export default Hello; //만든 컴포넌트 펑션을 이제 밖으로 내보내 줘야지

// 여기까지가 리액트 컴포넌트(사용자 정의태그 만드는것) 기본뼈대 (이 안에 다 넣어). 태그는 jsx 문법을 따라야해.// 자식 노드들은 얼마든지 상관없지만 부모(root)는 1개.
//div(root)는 무조건 1개만. 되게하는 방법도 있당~]<></> 부모 div는 1개가 원칙. -> 다 하고 export default 하고 내보내면 돼. 그럼 브라우저 Dom이 이걸 받아서 자기랑 비교하고 이걸 끼워넣음.
//다시 app.js로 가셈
//pico 넣으려면 index.html 가서 피코cdn 넣고
//피코처럼 태그 만들면 된다~
// 리턴 안에(root) div 형제 2개 만들라면 <></> 빈태그(프래그먼트)로 감싸면 된다.

//img 에는 꼭 alt 달아줘야한다. 이게 표준이래. 이미지가 늦게 생성되거나 안뜰때 보여줄 글자를 넣어야 한다.
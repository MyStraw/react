import MyClockImage from "./MyClockImage"; //컴포넌트를 쪼개서 합쳐보자. 이럼 다음에 또 따로 쓸수있다.
import MyClockTime from "./MyClockTime";
import '../01/Hello' //.css 생략했는데 css로 인식을 하네?

const MyClock = () => { //클래스 컴포넌트에서 이미 쓰고있어서 꼭 클래스네임으로 해
    return (
        <main className="container">
             <article data-theme="dark">
                <MyClockImage/>               
                <MyClockTime/>               
             </article>
        </main>
    
    );
}

export default MyClock;//이래야 App.js에서 import가 되징~
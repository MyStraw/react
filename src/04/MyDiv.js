import MyDivArticle from './MyDivArticle';
//import './MyDiv.css';
//그냥 MyDivArticle로만 하면 다 똑같은거 3개가 되는데
//이거 안에 내용을 조금씩 다르게 하고싶다. 각각 속성을 부여.
//속성 부여해서 MyDivArticle에서 probs로 받아.

// 첫번째꺼 MyDiv0 으로안해도 Article에서 undifined 값으로 0을 해놨기 때문에 자동으로 0이 된다.
const MyDiv = () => { // a href 처럼 속성 가지게. aname 이라는 속성 가지게!. 속성을 주고. 속성 받게. 
    return (
        <main className ="container">
            <h1 className = "mah1">MyDiv</h1>
            <MyDivArticle />  {/*이렇게 아무것도 정의 안해(undefined)줘도 뒤에서 falsy값 기본으로 0을 해줘서 렌더링 하면 0 나온다*/}
            <MyDivArticle aname='MyDiv1'/>           
            <MyDivArticle aname='MyDiv2'/>            
        </main>

    );

}

export default MyDiv;
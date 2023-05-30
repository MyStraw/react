import CodeGubun from "./CodeGubun";

const ConstView = () => {

    return (
        <>
        <h1>code</h1>
        <CodeGubun />
        {/* <CodeGubun />
        <CodeGubun />
        <CodeGubun /> */}
        {/* <ul>
            <li>초단기예보</li>
            <li>단기예보</li>            
        </ul> */}
        </>
    );
}

export default ConstView;


{/* <h1>code</h1>
        <ul>
            <li>초단기예보</li>
            <li>단기예보</li>
        </ul> */}
//리턴 안에는 부모로 갈수있는 태그 1개만 가야한다. 근데 이건 <h1>과 <ul> 2개가 가니까 <></> 프래그먼트로 감싸면 1개로 인식한다.
//어쨌거나 리턴 1개만 결과.
//이제 선택하는걸 만들고 싶다. 컴포넌트로 또 쪼개서. js파일 또 만들어야지. CodeGubun에 떼서 갖다 붙였다. 여러개 써도 된다.
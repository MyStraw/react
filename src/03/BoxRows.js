//const BoxRows = (probs) =>{ //box의 영화정보 가져오기. 프롭스 받아와~ case1)
const BoxRows = ({ mv }) => { //case2) 오브젝트로 받아서 해버리기. 앞에서 보내오는게 많으면 이거보다 걍 probs 쓰는게 낫겄네~
    //  const mvlist = [...probs.mv]; // case1) 스프레드 연산자 ... 펼쳐받기. 여기 mvlist랑 box의 mvlist랑 다르다. 이건 probs.mv 매번 이거 쓰는거 안할라고 만든겨.
    // console.log("boxrows",probs.mv); // case1) box에 mvlist 10개 있었다. 속성값으로 프롭스 mv 이름으로 명명하고, 넘겼다. 콘솔로 잘 왔는지확인
    console.log("boxrows", mv) // case2)
    return (
        <>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
            </tr>
        </>
    );
}

export default BoxRows;

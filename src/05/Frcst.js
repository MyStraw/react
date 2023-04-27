import data from './dataFrcst.json';


const Frcst = () =>{
    const dtKey = ["frcstOneDt", "frcstTwoDt" , "frcstThreeDt", "frcstFourDt"];
    dtKey.map((item)=>console.log(data[item])) //키를 순서대로 배열에 집어넣고 하나씩 갖고와. 키 순서대로 출력. 콘솔 4개 하나하나 쓰지말공
    
    return (
        <>
        </>
    );
}

export default Frcst;


const TaccidentNav1 = ({c1}) => { //프롭스로 정보 넘겨오기
    console.log("TaccidentNav1", c1) //넘겨왔는지 확인.

    return (
        <nav>
            <ul>
                <h1>사고유형_대분류</h1>
            </ul>
            <ul>
                <li><button>차대사람</button></li>
                <li><button>차대차</button></li>
                <li><button>Link</button></li>
                <li><button>Link</button></li>
                
            </ul>
        </nav>
    );
}
export default TaccidentNav1;
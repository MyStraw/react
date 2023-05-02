import TaccidentNav1 from './TaccidentNav1';
import dataTaccident from './dataTaccident.json';


const Taccident = () => {

    //const c1 = ["data"];
    //console.log(dataTaccident.data); //.data 안찍으면 전부 다 갖고오는겨. data(키)만 갖고오고싶어. 변수처럼. 접근법1)
    //console.log(dataTaccident['data']); 2)대괄호 쓰기
    //dtKey.map((item)=>console.log(data[item]));
    //console.log(dataTaccident['data'])

    const data = dataTaccident.data;//사고건수 obj 배열 (15개). 콘솔로 찍어보니 이게 배열15개였다.
    //console.log(data);
    data.map((item) => console.log(item['사고유형_대분류'])); // 이 아이템이 오브젝트. 아이템중에서 사고유형 대분류 뽑아야해. 오브젝트 접근법 2가지)대괄호, 점
    //data.map((item) => console.log(item.사고유형_대분류)); // 오브젝트 접근법 2번재 방법 점.


    let c1 = data.map((item) => item.사고유형_대분류); //[1,2,3] - 배열, {'A':1, 'B':2} - 오브젝트.
    c1 = new Set(c1); // 이걸로 보니 중괄호. 오브젝트네. 중복되는 값도 없고. 집합(set)이라고한다. => 배열로 바꾸고싶어. [...c1] jsx용 연산자.(스프레드 연산자)
    console.log(c1);
    c1 = [...c1];// 배열로 바꾸기.  c1 = [1,2,3], c2 = [4,5,6] 이거를 합치고 싶으면 => [...c1, ...c2] 이렇게. [...: 흩쳐라~~!]
    console.log("c1", c1) //콘솔봐. 오브젝트가 배열로 바뀜. [대분류, 중분류] 이렇게 쌍이 되게끔.

    // 배열 만들겨
    // const c2 = []; //데이터 하나씩 돌면서 c2안에 들어갈 항목을 뽑아내. push로 뽑아내.
    // for (let item of data) {
    //     let temp = [item.사고유형_대분류, item.사고유형_중분류]; //배열 안에 배열 만들기. 이거 [] 이렇게 하고 밑에 push 두개 써도 됨.
    //     // temp.push(item.사고유형_대분류);
    //     // temp.push(item.사고유형_중분류);
    //     c2.push(temp);
    // };
    // console.log('c2', c2);

    const c2 = data.map((item) => [item.사고유형_대분류, item.사고유형_중분류]) // for of로 돌면서 쓰는게 바로 map이다. map 생각 안나면for of 돌려서 써도 되고.
    //map 써도 된다. 위에꺼 이거 한줄로 한방에. 다른 언어는 배열에 push 해서 넣어야 되는데 jsx는 map 으로 바로 가능. item들을 => []배열로 만들건데 그 안에 어떤내용이 올지 적어.
    console.log('c2', c2)


    return ( //피코 컴포넌트 -> Navs 좌우 배열 써볼겨
        <main className="container">
            <article>
                <header>
                    <TaccidentNav1 c1 = {c1}/>                   
                </header>                
            </article>
        </main>
    );
}

export default Taccident;
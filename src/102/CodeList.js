import code from '../101/getcode.json'
import { useState, useEffect } from 'react';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { CodeAtom, CodeAtom2 } from './CodeAtom';

//const CodeList=(props)=>{ props는 몽땅 전체로 받아오는거. 이거 오브젝트다.
//   console.log(props); //이렇게 하니까 중괄호(오브젝트) 형태로 출력된다.
//   console.log(props.sell) //이렇게 하면 안에 값만 출력. 값만 쓰고싶을때!

const CodeList = () => {  //오브젝트 형태로 넘어오니 이렇게 중괄호로 감싸줘. 오브젝트를 끊어서 받아올때.
  
  const sell =useRecoilValue(CodeAtom);
  
  
  console.log(sell); //이렇게 바로 써도 된다.

  console.log('code', code); //array  라고 적혀있네. 배열 32개가 들어왔다. 여기서 단기 인것만 뽑아.
  //원래라면 반복문 for로 돌아줘야 하는데 자바스크립트는 map,filter를 지원해준다. 32개를 다 돈다. 다만 return 되는게 map은 32개. filter 는 조건에 맞는것만 return.
  //골라 내야한다. 그럼 filter를 써야지.
  //앞에서 단기예보가 1이었지? 앞으로 다시 가봐. 그냥 1,2로 넘기지 말고 단기예보로 넘겨. 그냥 1, 2로 하면 또 뒤에서 단기, 초단기로 바꿔줘야 하니까.


  //code로 땡긴걸 바뀐걸로 select 부분에 넣어야. 스테이트 쓸필욘 없지.

  //   let temp = code.filter((i) => return)//원래 이 리턴이 있다. 생략
  let temp = code.filter((i) => i["예보구분"] === sell);
  //  code에서 sell인것만 골라내야.

  console.log('temp', temp);
  // 단기, 초단기만 따로따로 골라냈다 temp로.

  //이제 temp로 골라낸걸 select 항목으로 넣어야 하는데 전부 다 넣어줘야지. 배열로(map).
  //선택 없을시 안나타내게 할땐 defaultValue='' <select id = 'sel2' name='sel2' defaultValue=''> 

  //여기서 선택한걸 다시 Gubun에 footer에 뿌려야한다. 또 다시 역으로 프롭스?


  let opTags = temp.map((i) =>
    <option key={i["항목값"]} value={i["항목값"]}>{i["항목명"]}({i["항목값"]})</option>
  );

  console.log('opTags', opTags)


  const selItem2 = (e)=>{
    
    setSel2(e.target.value);

  }

  useEffect(()=>{
console.log(sel2)

  },[sel2])



  return (
    <>
      <select id='sel2' name='sel2' defaultValue='' onChange={selItem2}>
        <option value=''>선택</option>
        {opTags}
      </select>
    </>
  );
}

export default CodeList;
// const CntDisp = (props)=>{
//     const n = props.n

const CntDisp = ({n})=>{ //프롭스 받는법2. 혹은 오브젝트로 받거나.
    return(
        <article>
        <div className="grid">
            <h2>입력값: {n}, 입력값 2배: {2*n}</h2>               
                              
        </div>
    </article>
    )
}

export default CntDisp ;
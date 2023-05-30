import { useState, useEffect, useRef } from "react";

const Cnt = () => {

  //  const [minus, setMinus] = useState();
  //  const [plus, setPlus] = useState();

  const [item, setItem] = useState();

    const txt1 = useRef();    

    useEffect(() => {
        txt1.current.focus();       
        txt1.current.value=0;        
    }, []);
    
    const minus = (e) => {
        e.preventDefault();
        setItem(parseInt(txt1.current.value)-1);
        txt1.current.value=parseInt(txt1.current.value)-1       
    }

    const plus = (e) => {
        e.preventDefault();
        setItem(parseInt(txt1.current.value)+1);
        txt1.current.value=parseInt(txt1.current.value)+1;
    }    

    

   

    return (
        <main className="container">
            <article>
                <form>
                    <div className="grid">
                        <div></div>
                        <div><button onClick={(e) => minus(e) }>-</button></div>
                        <div><input type="text" ref={txt1} id="txt1" name="txt1"></input></div>
                        <div><button onClick={(e) => plus(e)}>+</button></div>
                        <div></div>
                    </div>
                </form>
            </article>
            <article>
                <div className="grid">
                    <h2>입력값: {item}</h2>                    
                    <h2>입력값 2배: {2*item}</h2>                    
                </div>
            </article>
        </main>
    );

}
export default Cnt;
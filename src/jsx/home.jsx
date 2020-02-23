import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Typist from "react-typist";
import Footer from './footer.jsx';
import Cadre from './cadre.jsx';




export default function Home() {
    const [count, setCount] = useState(1);

    useEffect(() => {
      // document.title = `You clicked ${count} times`;
      console.log("Count: " + count);
      setCount(1);
    }, [count]);
  
    return (
        <>

        <Spinner></Spinner>
         <Cadre></Cadre>

            <section className="intro d-flex flex-column align-items-center justify-content-center">
                <h1 className="glitch" data-text="I'M SIMRAN KAZMI">I'M SIMRAN KAZMI</h1>
                <p id='typing'>  {count ? (
        <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
          <span> Based in Brussels.</span>
          <Typist.Backspace count={20} delay={800} />
          <span> Web developer</span>
        </Typist>
      ) : (
        ""
      )}</p>
            </section>
          
          <Footer></Footer>
        </>
    )
}

// const rootElement = document.getElementById("typing");
// ReactDOM.render(<Home />, rootElement);

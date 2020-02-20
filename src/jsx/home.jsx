import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Typist from "react-typist";


export default function Home() {
    const [count, setCount] = useState(1);

    useEffect(() => {
      // document.title = `You clicked ${count} times`;
      console.log("Count: " + count);
      setCount(1);
    }, [count]);
  
    return (
        <>
            <div id="line-top"> </div>
            <div id="line-bottom"></div>
            <div id="line-left"></div>
            <div id="line-right"></div>

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
          
            <footer className='d-flex justify-content-between' id="footer-home">
                <div className="copy mx-5">
                <p id="p-copy">© Sim. All rights reserved.</p>
                </div>
                <div className="soc mx-3 mb-2 ">
                <i className="mx-2 fab fa-instagram "></i>
                <i className="mx-2 fab fa-facebook-square"></i>
                <i className="mx-2 fab fa-linkedin-in"></i>
                <i className="mx-2 fab fa-twitter"></i>
                </div>
            </footer>
        </>
    )
}

// const rootElement = document.getElementById("typing");
// ReactDOM.render(<Home />, rootElement);

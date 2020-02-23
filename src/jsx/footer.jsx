import React, { useState } from "react";

export default function Footer(){
return(
            <footer className='d-flex justify-content-between mt-5' id="footer">
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
)
}
        
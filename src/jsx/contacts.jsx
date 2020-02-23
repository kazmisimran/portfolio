import React, { useState } from "react";
import Footer from './footer.jsx';
import Cadre from './cadre.jsx';

export default function Contacts() {
    window.onscroll = () => {
        let target = document.getElementById('target');
        if (window.pageYOffset < 70) {
            // target.style.display = "block";
            // target.classList.add('d-block');
            target.classList.remove('d-none');
        }
        else if (window.pageYOffset > 70) {
            // target.style.display = "none";
            target.classList.add('d-none');
            target.classList.remove('d-block');
        }
    }
    return (

        <div className="container bg-white d-flex flex-column justify-content-center align-items-center feuille">
           <Cadre></Cadre>

            <section className="intro d-flex flex-column align-items-center justify-content-center my-5">
                <h1 className="glitch" data-text="CONTACTS">CONTACTS</h1>
                <p className> <a href="/home">Home</a> / <a href="/resume">Resume</a> </p>

                <a href="#" className="mouse">
                    <div className="my-5" id="target" className="d-block">
                        <i class="fas fa-mouse"></i>
                    </div>
                </a>
            </section>

            <section className="section contacts container mb-5">
                <div className="content">
                    <div className="title mb-5">
                        <div className="title_inner">CONTACTS</div>
                    </div>
                    <div className="service-items ml-3 row">
                        <div className="col-md-4 service-item">
                            <div className="row mb-3 align-items-center">
                                <i className="fas fa-mobile-alt mr-3 "></i>
                                <p className="font-weight-bold mt-2">Phone</p>
                            </div>
                            <div className="row">
                                <p className="myFont">+324 79 02 44 58</p>
                            </div>
                        </div>
                        <div className="col-md-4 service-item">
                            <div className="row mb-3 align-items-center">
                                <i className="fas fa-envelope mr-3 "></i>
                                <p className="font-weight-bold mt-2">E-mail</p>
                            </div>
                            <div className="row">
                                <p className="myFont">kazmisimran@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-md-4 service-item">
                            <div className="row mb-3 align-items-center">
                                <i className="fas fa-map-marker-alt mr-3 "></i>
                                <p className="font-weight-bold mt-2">Address</p>
                            </div>
                            <div className="row">
                                <p className="myFont">Rue du Bemel 130, 1150 Bruxelles</p>
                            </div>
                        </div>
                    </div>

                    <div className="formulaire my-5">
                    <input type="text"  className="w-100 border-top-0 border-left-0 border-right-0 my-4 myfont" placeholder="Name"/>
                    <input type="text"  className="w-100 border-top-0 border-left-0 border-right-0 my-4 myfont" placeholder="Email"/>
                    <textarea className="w-100 border-top-0 border-left-0 border-right-0 my-4 myfont" placeholder="Message"></textarea>
                    <button className="btn-group btn myfont text-white bg-mainColor my-3">Send Message</button>

                    </div>


                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}
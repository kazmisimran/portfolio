import React, { useState } from "react";
import Sim from './../img/sim.jpg';

export default function Resume() {

    window.onscroll = () => {
        let target = document.getElementById('target');
        if (window.pageYOffset < 190) {
            target.style.display = "block";
        }
        else if (window.pageYOffset > 190) {
            target.style.display = "none";
        }
    }
    return (
        <>
            <div id="line-top"> </div>
            <div id="line-bottom"></div>
            <div id="line-left"></div>
            <div id="line-right"></div>

            <section className="intro d-flex flex-column align-items-center justify-content-center my-5">
                <h1 className="glitch" data-text="RESUME">RESUME</h1>
                <p className> <a href="/home">Home</a> / <a href="/resume">Resume</a> </p>

                <a href="#" className="mouse">
                    <div className="my-5" id="target">
                        <i class="fas fa-mouse"></i>
                    </div>
                </a>
            </section>



            <footer className='d-flex justify-content-between' id="footer">
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

            <section className="section about container mt-5">
                <div className="content">
                    <div className="title my-4">
                        <div className="title_inner">ABOUT ME</div>
                    </div>
                    <div className="row d-flex align-items-center">
                        <div className="image col-12 col-md-2 d-flex justify-content-center mb-3">
                            <img src={Sim}></img>
                        </div>
                        <div className="desc col-12 col-md-10 d-flex justify-content-start">
                            <p>                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Ab harum, debitis in eos sapiente quam similique, voluptate expedita ratione iste corporis vero vel libero unde! Nostrum error molestiae odio id?
                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum in enim, eaque quasi vel nobis voluptatem magnam? Modi iste, illo veniam
                              perspiciatis ratione rerum itaque sequi, cupiditate enim est repudiandae hic!
                        </p>
                        </div>
                    </div>
                    <div className="row desc mt-4">
                        <div className="col-2"></div>
                        <div className="col-3">
                            <p> <span>Name: </span> Simran Kazmi</p>
                            <p> <span>Citizenship: </span> Belgium</p>
                        </div>
                        <div className="col-3">
                            <p><span>Age: </span>20 Years</p>
                            <p><span>Residence: </span>Brussels</p>
                        </div>
                        <div className="col-3">
                            <p><span>Job: </span>Web developer</p>
                            <p><span>E-mail: </span>kazmisimran@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section resume container mb-5">
                <div className="content">
                    <div className="row">
                        <div className="col-6">
                            <div className="title mb-5">
                                <div className="title_inner">EXPERIENCE</div>
                            </div>
                            <div className="resume-items">
                                <div className="resume-item px-4 pb-4">
                                    <div className="date">2013-Present</div>
                                    <div className="name">Art Director - Facebook Inc</div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Corrupti laboriosam quam asperiores esse dolores nulla similique dicta repellat earum? Autem, rem.</p>
                                </div>
                                <div className="resume-item px-4 pb-4">
                                    <div className="date">2011-2012</div>
                                    <div className="name">Front-end Developer - Google Inc</div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
                                        fugit sed laudantium quam, omnis doloremque culpa minus totam minima corrupti voluptas.</p>
                                </div>
                                <div className="resume-item px-4 border-left border-white">
                                    <div className="date">2009-2010</div>
                                    <div className="name">Senior Developer - Abc Inc</div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem doloribus explicabo soluta nemo,
                                        sit sequi amet quod ullam cum praesentium odit.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-6">
                            <div className="title mb-5">
                                <div className="title_inner">EDUCATION</div>
                            </div>
                            <div className="resume-items">
                                <div className="resume-item px-4 pb-4">
                                    <div className="date">2013-Present</div>
                                    <div className="name">Art Director - Facebook Inc</div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Corrupti laboriosam quam asperiores esse dolores nulla similique dicta repellat earum? Autem, rem.</p>
                                </div>
                                <div className="resume-item px-4 pb-4 border-left border-white">
                                    <div className="date">2011-2012</div>
                                    <div className="name">Front-end Developer - Google Inc</div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
                                        fugit sed laudantium quam, omnis doloremque culpa minus totam minima corrupti voluptas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section skills container mb-5">
                <div className="content">
                    <div className="title mb-5">
                        <div className="title_inner">DESIGN SKILLS</div>
                    </div>
                    <div className="skills">
                        <ul className="list-unstyled">
                            <li className="my-4">
                                <div className="d-flex">
                                    <div className="name my-2" style={{ "width": "100%" }}>Web Design</div>
                                    <div className="percent my-2">100%</div>
                                </div>
                                <div class="progress" style={{ "height": "3px" }}>
                                    <div class="progress-bar" role="progressbar" style={{ "width": "100%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </li>
                            <li className="my-4">
                                <div className="d-flex">
                                    <div className="name my-2" style={{ "width": "100%" }}>Illustrations</div>
                                    <div className="percent my-2">100%</div>
                                </div>
                                <div class="progress" style={{ "height": "3px" }}>
                                    <div class="progress-bar" role="progressbar" style={{ "width": "100%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </li>
                            <li className="my-4">
                                <div className="d-flex">
                                    <div className="name my-2" style={{ "width": "100%" }}>Photoshop</div>
                                    <div className="percent my-2">100%</div>
                                </div>
                                <div class="progress" style={{ "height": "3px" }}>
                                    <div class="progress-bar" role="progressbar" style={{ "width": "100%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </li>
                            <li className="my-4">
                                <div className="d-flex">
                                    <div className="name my-2" style={{ "width": "100%" }}>Graphic Design</div>
                                    <div className="percent my-2">100%</div>
                                </div>
                                <div class="progress" style={{ "height": "3px" }}>
                                    <div class="progress-bar" role="progressbar" style={{ "width": "100%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section skills container">
                <div className="content position-relative">
                    <div className="title mb-5">
                        <div className="title_inner">LANGUAGE SKILLS</div>
                    </div>
                    <div className="skills dotted d-block">
                        <ul className="list-unstyled row justify-content-around">
                            <li className="col-12 col-md-5 ">
                                <div className="name mb-1">English</div>
                                <div className="prog position-relative d-block mb-5">
                                    <span className="dg">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </div>
                            </li>
                            <li className="col-12 col-md-5 ">
                                <div className="name mb-1">French</div>
                                <div className="prog position-relative d-block mb-5">
                                    <span className="dg">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </div>
                            </li>

                        </ul>
                        <ul className="list-unstyled row justify-content-around">
                            <li className="col-md-5 col-12">
                                <div className="name mb-1">Urdu</div>
                                <div className="prog position-relative d-block mb-5">
                                    <span className="dg">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </div>
                            </li>
                            <li className="col-md-5 col-12">
                                <div className="name mb-1">Swahili</div>
                                <div className="prog position-relative d-block mb-5">
                                    <span className="dg">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>



        </>
    )
}
import React, { useState } from "react";
import Sim from './../img/sim.jpg';
import Min from './../img/miniature.png';
import MinDeux from './../img/miniature2.png';

export default function Resume() {

    window.onscroll = () => {
        let target = document.getElementById('target');
        if (window.pageYOffset < 70) {
            // target.style.display = "block";
            target.classList.add('d-block');
            target.classList.remove('d-none');
        }
        else if (window.pageYOffset > 70) {
            // target.style.display = "none";
            target.classList.add('d-none');
            target.classList.remove('d-block');
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
                <p className> <a href="/home">Home</a> / <a href="/portfolio">Portfolio</a> </p>

                <a href="#" className="mouse">
                    <div className="my-5" id="target" className="d-block">
                        <i class="fas fa-mouse"></i>
                    </div>
                </a>
            </section>



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

            <section className="section about container mt-5">
                <div className="content">
                    <div className="title my-4">
                        <div className="title_inner">ABOUT ME</div>
                    </div>
                    <div className="row d-flex align-items-center">
                        <div className="image col-12 col-md-2 d-flex justify-content-center mb-3">
                            <img src={Sim} id="sim"></img>
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
                        <div className="col-md-2"></div>
                        <div className="col-md-3 col-4">
                            <p> <span>Name: </span> Simran Kazmi</p>
                            <p> <span>Citizenship: </span> Belgium</p>
                        </div>
                        <div className="col-md-3 col-4">
                            <p><span>Age: </span>20 Years</p>
                            <p><span>Residence: </span>Brussels</p>
                        </div>
                        <div className="col-md-3 col-4">
                            <p><span>Job: </span>Web developer</p>
                            <p><span>E-mail: </span>kazmisimran@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section resume container mb-5">
                <div className="content">
                    <div className="row">
                        <div className="col-md-6 col-12">
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
                        <div className="col-md-6 col-12">
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

            <section className="section skills container pb-5 mb-5">
                <div className="content ">
                    <div className="title mb-5">
                        <div className="title_inner">CODING SKILLS</div>
                    </div>
                    <div className="skills circle row">
                        <div className="d-flex flex-column align-items-center mr-5 col-md-2 col-12">
                            <div class="radialProgressBar progress-100  d-flex flex-column">
                                <div class="overlay-circle">100%</div>
                            </div>
                            <div>
                                <p className="">WordPress</p>
                            </div>
                        </div>
                        <div className="d-flex flex-column align-items-center mr-5 col-md-2 col-12">
                            <div class="radialProgressBar progress-100  d-flex flex-column">
                                <div class="overlay-circle">100%</div>
                            </div>
                            <div>
                                <p className="">PHP / MYSQL</p>
                            </div>
                        </div>
                        <div className="d-flex flex-column align-items-center mr-5 col-md-2 col-12">
                            <div class="radialProgressBar progress-100  d-flex flex-column">
                                <div class="overlay-circle">100%</div>
                            </div>
                            <div>
                                <p className="">Angular /<br /> Javascript</p>
                            </div>
                        </div>
                        <div className="d-flex flex-column align-items-center mr-5 col-md-2 col-12">
                            <div class="radialProgressBar progress-100  d-flex flex-column">
                                <div class="overlay-circle">100%</div>
                            </div>
                            <div>
                                <p className="">HTML / CSS</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="section skills container mb-5">
                <div className="content mb-5">
                    <div className="title mb-5">
                        <div className="title_inner">KNOWLEDGE</div>
                    </div>
                    <div className="skills list row">
                        <ul className="d-flex flex-column list-unstyled mb-5 knowledge-list col-md-6 ">
                            <li><i class="fas fa-check mx-2 my-2"></i>Website hosting</li>
                            <li><i class="fas fa-check mx-2 my-2"></i>Create logo design</li>
                            <li><i class="fas fa-check mx-2 my-2"></i>Modern and mobile-ready</li>
                            <li><i class="fas fa-check mx-2 my-2"></i>Graphics and animations</li>
                        </ul>
                        <ul className="d-flex flex-column list-unstyled mb-5 knowledge-list col-md-6 ">
                            <li><i class="fas fa-check mx-2 my-2"></i>Website hosting</li>
                            <li><i class="fas fa-check mx-2 my-2"></i>Create logo design</li>
                            <li><i class="fas fa-check mx-2 my-2"></i>Modern and mobile-ready</li>
                            <li><i class="fas fa-check mx-2 my-2"></i>Graphics and animations</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section service container mb-5 pb-5">
                <div className="content">
                    <div className="title mb-5">
                        <div className="title_inner">MY SERVICES</div>
                    </div>
                    <div className="service items">
                        <div className="row">
                            <div className="col-md-4 service-item">
                                <div className="row mb-3 align-items-center">
                                    <i className="fab fa-html5 mr-3 "></i>
                                    <p className="font-weight-bold mt-2">Front-end</p>
                                </div>
                                <div className="row">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                </div>
                            </div>
                            <div className="col-md-4 service-item">
                                <div className="row mb-3 align-items-center">
                                    <i class="fas fa-mobile mr-3"></i>
                                    <p className="font-weight-bold mt-2">Mobile app</p>
                                </div>
                                <div className="row">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                </div>
                            </div>
                            <div className="col-md-4 service-item">
                                <div className="row mb-3 align-items-center">
                                    <i className="fas fa-search mr-3 "></i>
                                    <p className="font-weight-bold mt-2">Investigation</p>
                                </div>
                                <div className="row">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-4 service-item">
                                <div className="row mb-3 align-items-center">
                                    <i class="fas fa-code mr-3"></i>
                                    <p className="font-weight-bold mt-2">Programming</p>
                                </div>
                                <div className="row">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                </div>
                            </div>
                            <div className="col-md-4 service-item">
                                <div className="row mb-3 align-items-center">
                                    <i className="fas fa-life-ring mr-3 "></i>
                                    <p className="font-weight-bold mt-2">Front-end</p>
                                </div>
                                <div className="row">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                </div>
                            </div>
                            <div className="col-md-4 service-item">
                                <div className="row mb-3 align-items-center">
                                    <i class="fab fa-chrome mr-3"></i>
                                    <p className="font-weight-bold mt-2">Web development</p>
                                </div>
                                <div className="row">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section clients container mb-5">
                <div className="content">
                    <div className="title mb-5">
                        <div className="title_inner">CLIENTS</div>
                    </div>
                    <div className="box-items">
                        <div className="row mb-4">
                            <div className="col-md-4 col-12 box-item">
                                <div className="image">
                                    <a href="https://www.google.com">
                                        <img src={MinDeux} alt="" className="w-100" />
                                        <div className="overlay w-100 h-100"> </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 box-item">
                                <div className="image">
                                    <a href="https://www.google.com">
                                        <img src={MinDeux} alt="" className="w-100" />
                                        <div className="overlay w-100 h-100"> </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 box-item">
                                <div className="image">
                                    <a href="https://www.google.com">
                                        <img src={MinDeux} alt="" className="w-100" />
                                        <div className="overlay w-100 h-100"> </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-md-4 col-12 box-item">
                                <div className="image">
                                    <a href="https://www.google.com">
                                        <img src={MinDeux} alt="" className="w-100" />
                                        <div className="overlay w-100 h-100"> </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 box-item">
                                <div className="image">
                                    <a href="https://www.google.com">
                                        <img src={MinDeux} alt="" className="w-100" />
                                        <div className="overlay w-100 h-100"> </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4 col-12 box-item">
                                <div className="image">
                                    <a href="https://www.google.com">
                                        <img src={MinDeux} alt="" className="w-100" />
                                        <div className="overlay w-100 h-100"> </div>
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </section>



        </>
    )
}
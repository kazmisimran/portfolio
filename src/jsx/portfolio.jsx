import React, { useState } from "react";
import Min from './../img/miniature.png';
import MinDeux from './../img/miniature2.png';
import Video from './../img/video.png';
import Music from './../img/music.png';
import Links from './../img/links.png';
import Footer from './footer.jsx';
import Cadre from './cadre.jsx';




export default function Portfolio() {
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

    let filterAll=()=>{
        let tabBox=document.getElementsByClassName('box-item');
       for(let i=0;i<tabBox.length;i++){
        tabBox[i].classList.remove('d-none');
       }
    }

    let filterVideos=()=>{
        let tabBox=document.getElementsByClassName('box-item');
       for(let i=0;i<tabBox.length;i++){
           if(tabBox[i].classList.contains('video')){
            tabBox[i].classList.add('d-block');
        }else{
               tabBox[i].classList.add('d-none');
               tabBox[i].classList.remove('d-block');

           }
       }
    }

    let filterMusic=()=>{
        let tabBox=document.getElementsByClassName('box-item');
        for(let i=0;i<tabBox.length;i++){
            if(tabBox[i].classList.contains('music')){
             tabBox[i].classList.add('d-block');
         }else{
                tabBox[i].classList.add('d-none');
                tabBox[i].classList.remove('d-block');

            }
        }
    }
    let filterLinks=()=>{
        let tabBox=document.getElementsByClassName('box-item');
        for(let i=0;i<tabBox.length;i++){
            if(tabBox[i].classList.contains('links')){
             tabBox[i].classList.add('d-block');
         }else{
                tabBox[i].classList.add('d-none');
                tabBox[i].classList.remove('d-block');

            }
        }
    }

    return (
        <div className="container bg-white d-flex flex-column justify-content-center align-items-center">
          <Cadre></Cadre>

            <section className="intro d-flex flex-column align-items-center justify-content-center my-5">
                <h1 className="glitch" data-text="PORTFOLIO">PORTFOLIO</h1>
                <p className> <a href="/home">Home</a> / <a href="/resume">Resume</a> </p>

                <a href="#" className="mouse">
                    <div className="my-5" id="target" className="d-block">
                        <i class="fas fa-mouse"></i>
                    </div>
                </a>
            </section>



         

            <section className="section works container mb-5">
                <div className="content">
                    <div className="filter menu">
                        <div className="filters">
                            <ul className="list-unstyled">
                                <li>
                                    <button className="btn myfont secondColor mx-2" onClick={filterAll}>All</button>
                                    <button className="btn myfont secondColor mx-2" onClick={filterVideos}>Video</button>
                                    <button className="btn myfont secondColor mx-2" onClick={filterMusic}>Music</button>
                                    <button className="btn myfont secondColor mx-2" onClick={filterLinks}>Links</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="box-items">
                    <div className="row mb-4">
                        <div className="col-md-4 col-12 box-item video">
                            <div className="image">
                                <a href="https://www.google.com">
                                    <img src={Video} alt="" className="w-100" />
                                    <div className="overlay"> </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 box-item music">
                            <div className="image">         
                                <a href="https://www.google.com">
                                    <img src={Music} alt="" className="w-100" />
                                    <div className="overlay"> </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 box-item links">
                            <div className="image">
                                <a href="https://www.google.com">
                                    <img src={Links} alt="" className="w-100" />
                                    <div className="overlay"> </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-4 col-12 box-item video">
                            <div className="image">
                                <a href="https://www.google.com">
                                    <img src={Video} alt="" className="w-100" />
                                    <div className="overlay"> </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 box-item music">
                            <div className="image">
                                <a href="https://www.google.com">
                                    <img src={Music} alt="" className="w-100" />
                                    <div className="overlay"> </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 box-item links">
                            <div className="image">
                                <a href="https://www.google.com">
                                    <img src={Links} alt="" className="w-100" />
                                    <div className="overlay"> </div>
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
            <Footer></Footer>

        </div>
    )
}
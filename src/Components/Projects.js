import React from 'react';
import {PROJECTS_TITLES,PROJECT_CONTENT} from './../Constants/Constants';
const image_1 = require('../img/3.png');
const image_2 = require('../img/2.png');
const image_3 = require('../img/4.png');
const image_4 = require('../img/5.png');
const image_5 = require('../img/6.png');
const image_6 = require('../img/1.png');

function Projects() {
    return (
        <React.Fragment>
            <h5>PROJECTS</h5>
            <em><p>Code for following projects can be found on my github.</p></em>
            <div id="carouselExampleCaptions" className="carousel slide project" data-ride="carousel">
                <ol className="carousel-indicators">
                    {
                        PROJECTS_TITLES.map((item,index)=>{
                         return   <li data-target="#carouselExampleCaptions" data-slide-to={index} className="active"/>
                        })
                    }

                </ol>
                <div className="carousel-inner" >
                    <div className="carousel-item active">
                        <img src={image_1} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption  d-md-block">
                                <h5>{PROJECTS_TITLES[0]}</h5>
                                <p>{PROJECT_CONTENT[0]}</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={image_2} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption  d-md-block">
                                <h5>{PROJECTS_TITLES[1]}</h5>
                                <p>{PROJECT_CONTENT[1]}</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={image_3} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption  d-md-block">
                                <h5>{PROJECTS_TITLES[2]}</h5>
                                <p>{PROJECT_CONTENT[2]}</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={image_4} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption  d-md-block">
                                <h5>{PROJECTS_TITLES[3]}</h5>
                                <p>{PROJECT_CONTENT[3]}</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={image_6} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption  d-md-block">
                                <h5>{PROJECTS_TITLES[4]}</h5>
                                <p>{PROJECT_CONTENT[4]}</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={image_5} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption  d-md-block">
                                <h5>{PROJECTS_TITLES[5]}</h5>
                                <p>{PROJECT_CONTENT[5]}</p>
                            </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="projects-mobile">
                {
                    PROJECTS_TITLES.map((item,index)=>{
                        return <div className="card card-project" style={{marginBottom:"15px"}}>
                            <img src={require(`../img/${index+1}.png`)} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h6 className="card-title">{item}</h6>
                                <p className="card-text">{PROJECT_CONTENT[index]}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default Projects;

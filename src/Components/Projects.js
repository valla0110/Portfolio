import React from 'react';
import {PROJECTS_TITLES,PROJECT_CONTENT} from './../Constants/Constants';
const one = require('../img/1.png');
const Hacker = require('../img/Hacker.svg');
const LinkDin = require('../img/LinkDin.svg');

function Projects() {
    return (
        <div className="projects">
            {
                PROJECTS_TITLES.map((item,index)=>{
                    return <div className="card card-project" style={{width: "600px"}}>
                        <img src={one} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h6 className="card-title">{item}</h6>
                            <p className="card-text">{PROJECT_CONTENT[index]}</p>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Projects;

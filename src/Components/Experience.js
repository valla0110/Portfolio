import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion,Card} from 'react-bootstrap'
import {EXPERIENCE} from './../Constants/Constants';


function Experience() {
    return (
        <div>
            <div className="accordion" id="accordionExample">

                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{color:'white',textDecoration:'none'}}>
                                {Object.keys(EXPERIENCE)[0]}
                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                         data-parent="#accordionExample">
                        <div className="card-body">
                            <ul>
                            {EXPERIENCE[Object.keys(EXPERIENCE)[0]].map((item)=>{
                                return <li>{item}</li>
                            })}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-right collapsed" type="button"
                                    data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                    aria-controls="collapseTwo" style={{color:'white',textDecoration:'none'}}>
                            {Object.keys(EXPERIENCE)[1]}
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                        <ul>
                            <li>
                                {EXPERIENCE[Object.keys(EXPERIENCE)[1]]}
                            </li></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Experience;

import React from 'react'
import {EXPERIENCE} from './../Constants/Constants';


function Experience(props) {
    return (
        <div className="experience">
            <h5 style={{marginBottom:"70px"}}>EXPERIENCE</h5>
            <div className="accordion" id="accordionExample">

                <div className="card">
                    <div className="card-header" id="headingOne">
                        <button className="btn btn-link btn-block" type="button" data-toggle="collapse"
                                data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{color:'white',textDecoration:'none'}}>
                            {Object.keys(EXPERIENCE)[0]}
                        </button>
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
            </div>
            <div className="accordion" id="accordionExample2" >


                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <button className="btn btn-link btn-block collapsed" type="button"
                                data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                aria-controls="collapseTwo" style={{color:'white',textDecoration:'none'}}>
                            {Object.keys(EXPERIENCE)[1]}
                        </button>
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

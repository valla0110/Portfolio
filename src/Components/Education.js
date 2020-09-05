import React from 'react'
import {EXPERIENCE} from './../Constants/Constants';


function Education(props) {
    return (
        <div className="experience">
            <h5 style={{marginBottom:"70px"}}>EDUCATION</h5>

            <div className="accordion" id="accordionExample2" >


                <div className="card">
                    <div className="card-header" id="headingThree">
                        <button className="btn btn-link btn-block collapsed" type="button"
                                data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                                aria-controls="collapseTwo" style={{color:'white',textDecoration:'none'}}>
                            Bachelor of Engineering: Computer Science and Engineering
                        </button>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="card-body">
                            <ul>
                                <li>
                                    Shri Ramdeobaba College Of Engineering - Nagpur, Maharashtra (Aug’14-May’18)
                                </li>
                                <li>
                                    Majored with CGPA 8.72 and developed 5 projects like chatbots, CMS, etc using NLP, AWS, etc
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Education;
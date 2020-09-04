import React from 'react'
import {RESEARCH_INFO} from '../Constants/Constants';
const researchFlow = require('./../img/researchFlow.png');
function Research() {
    return (
        <div className="research">
            <div className="research-header">
                <h5>RESEARCH --</h5>
                <h4> An Ensemble Approach to Identify Hindi Speech Emotions :</h4>
                <h5>Publisher: Journal of Advanced Research in Dynamical and Control Systems, October 2019 </h5>
            </div>
            <div className="research-body">
                <div className="research-item research-item-left">
                    <p>
                        {RESEARCH_INFO}
                    </p>
                    Link:<a href="https://www.jardcs.org/archivesview.php?volume=1&issue=11&page=3">https://www.jardcs.org/archivesview.php?volume=1&issue=11&page=3</a>
                </div>
                <div className="research-item research-item-right">
                    <img src={researchFlow}/>
                </div>
            </div>

        </div>
    )
}

export default Research;

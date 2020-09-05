import React,{useRef} from 'react';
import Experience from './Experience.js';
import Education from "./Education";

const arrow = require('../img/Down arrow.svg');
function Home() {

    return (
        <React.Fragment>
       <div className="home">
           <div className="home-left">
               <em><h4 >Hello I'm</h4></em>
           <h1>Vinuthna Alla</h1>
               <em> <h2>& I'm a Software Developer</h2></em>
           </div>
           <div className="home-arrow">
               <img src={arrow} width="60%"/>
           </div>
           <div className="home-right">
               <Experience/>
           </div>
           <div className="home-arrow">
               <img src={arrow} width="60%"/>
           </div>
           <div className="home-right">
               <Education/>
           </div>
       </div>

        </React.Fragment>
    )
}

export default Home;

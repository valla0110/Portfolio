import React,{useRef} from 'react';
import Experience from './Experience.js';

function Home() {

    return (
        <React.Fragment>
       <div className="home">
           <div className="home-left">
               <em><h4 >Hello I'm</h4></em>
           <h1>Vinuthna Alla</h1>
               <em> <h2>& I'm a Software Developer</h2></em>
           </div>
           <div className="home-right">
               <Experience/>
           </div>
       </div>

        </React.Fragment>
    )
}

export default Home;

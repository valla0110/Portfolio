import React from 'react'
const GitHub = require('../img/GitHub.svg');
const Hacker = require('../img/Hacker.svg');
const LinkDin = require('../img/LinkDin.svg');
const line = require('../img/Line Vertical Black.svg');
const one = require('../img/1.png');
function About() {
    return (
        <div className="about">
             <div>
                           <img src={one} style={{ width: '28rem' }}/>
                       </div>
                       <div className="about-body">
                           <div className="about-left">
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                           </div>
                           <div className="about-center">
                               <img src={line}/>
                           </div>
                           <div className="about-right">
                               <a href="https://github.com/valla0110/" target="_blank"> <img src={GitHub} /></a>
                               <a href="" target="_blank"> <img src={Hacker}/></a>
                               <a href="https://www.linkedin.com/in/vinuthna-alla-516474129/" target="_blank"> <img src={LinkDin}/></a>
                           </div>
                       </div>

        </div>
    )
}

export default About;

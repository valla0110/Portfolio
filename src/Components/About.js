import React from 'react'
const GitHub = require('../img/GitHub.svg');
const Hacker = require('../img/Hacker.svg');
const LinkDin = require('../img/LinkDin.svg');
const lang = require('../img/Lang.svg');
const langHori = require('../img/LangHori.svg');
const me = require('../img/me.jpg');

function About() {
    return (

        <div className="about">
             <h5 style={{ marginBottom: '20px' }}>ABOUT</h5>
                       <div className="about-body">
                           <div className="about-left">
                               <img src={me} style={{marginBottom:"20px"}}/>
                               <p>
                                   Hi, my name is Vinuthna, I’m working as a software developer for the last 2 years mostly using Javascript, Java, React, spring on day to day basis  & I’m particularly passionate about frontend development. The field of machine learning really intrigues me so I spend time reading about it a lot & I even have a paper published on the same as well.
                                   I’m very fond of martial arts and have also acquired a yellow belt in Taekwondo apart from this I spend my time  playing video games or reading books.
                               </p>
                             <em>  <p>
                                   Email : allavs01@gmail.com<br/>
                                   Phone : 9552827790<br/>
                                 <div className="about-right-hori">
                                     <img src={langHori}/></div>

                             </p></em>
                           </div>
                           <div className="about-center"/>
                           <div className="about-right">
                               <img src={lang} width="170%"/></div>
                       </div>

        </div>
    )
}

export default About;

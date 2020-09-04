import React from 'react'
const GitHub = require('../img/GitHub.svg');
const Hacker = require('../img/Hacker.svg');
const LinkDin = require('../img/LinkDin.svg');
function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">
               <a style={{color:"white"}} href="" target="_blank">RESUME</a>
            </div>
            <div className="footer-right">
                <a href="https://github.com/valla0110/" target="_blank"> <img src={GitHub} /></a>
                <a href="" target="_blank"> <img src={Hacker}/></a>
                <a href="https://www.linkedin.com/in/vinuthna-alla-516474129/" target="_blank"> <img src={LinkDin}/></a>
            </div>
        </div>
    )
}

export default Footer;

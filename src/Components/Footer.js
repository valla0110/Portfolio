import React from 'react'
const GitHub = require('../img/GitHub.svg');
const Hacker = require('../img/Hacker.svg');
const LinkDin = require('../img/LinkDin.svg');
function Footer() {
    return (
        <div className="footer">
            <div className="footer-right">
                <a href="https://github.com/valla0110/" target="_blank"> <img src={GitHub} width="20%" /></a>
                <a href="https://www.hackerrank.com/allavs01" target="_blank"> <img src={Hacker} width="15%"/></a>
                <a href="https://www.linkedin.com/in/vinuthna-alla-516474129/" target="_blank"> <img src={LinkDin} width="15%"/></a>
            </div>
        </div>
    )
}

export default Footer;

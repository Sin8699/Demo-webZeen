import React from "react";
import "./Header.css";
import { connect } from "react-redux";

window.onscroll = () => {
  document.getElementById("hero").style.opacity=(500 -document.documentElement.scrollTop) / 500;
};

var Header = () => {
  return (
    <div className="Header">
      <div className="head">
        <img src="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/codetipi-logo.png" />
        <div className="link">
          <a href="#">Demos</a>
          <a href="#">Features</a>
          <div className="buy_contain">
            <a className="buy" href="#">
              Buy now
            </a>
            <i class="fa fa-save" />
          </div>
        </div>
      </div>
      <div className="back">
        <img
          className="background"
          src="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/hero.jpg"
        />
      </div>
      <div class="hero__inner" id="hero">
        <span class="pretitle">a next generation theme</span>
        <div class="logo">
          <img
            class="img"
            src="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/zeen-logo.png"
            srcset="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/zeen-logo@2x.png 2x"
            alt="Zeen WordPress Theme"
          />
          <img
            class="logo--v"
            src="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/zeen-v.png"
            srcset="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/zeen-v@2x.png 2x"
            alt="Zeen WordPress Theme version"
          />
        </div>
        <span class="subtitle">
          Power your creative ideas with cutting-edge technology and
          pixel-perfect design. Create your beautiful website now.
        </span>
        <div class="btn__title">Show Me</div>
      </div>
    </div>
  );
};

export default Header;

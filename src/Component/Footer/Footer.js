import React from "react";
import "./Footer.css";
import { connect } from "react-redux";

var Footer = () => {
  return (
    <div className="Footer">
      <div class="block__inner">
        <div class="block__title__wrap loaded">
          <div class="block__title">Beautiful Articles</div>
          <div class="block__subtitle block__description row--limit--narrow">
            Codetipi pioneered having different article layouts in the WordPress
            world. Zeen now takes the concept to a whole new level. From bold
            &amp; graphic-heavy articles, to pure text articles, there's a
            combination for every article need.
          </div>
        </div>
        <div class="slider slider--centered flickity-enabled" tabindex="0">
          <div class="arrows row--limit--narrow">
            <div class="arrow arrow__prev">
              <i class="zeen-long-left" />
            </div>
            <div class="arrow arrow__next">
              <i class="zeen-long-right" />
            </div>
          </div>
          <div class="flickity-viewport">
            <div class="flickity-slider">
              <img
                src="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/article-slide-1.jpg"
                srcset="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/article-slide-1@2x.jpg 2x"
                alt=""
              />

              <img
                src="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/article-slide-2.jpg"
                srcset="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/article-slide-2@2x.jpg 2x"
                alt=""
              />

              <img
                src="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/article-slide-3.jpg"
                srcset="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/article-slide-3@2x.jpg 2x"
                alt=""
              />
              <img
                src="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/article-slide-4.jpg"
                srcset="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/article-slide-4@2x.jpg 2x"
                alt=""
              />

              <img
                src="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/article-slide-5.jpg"
                srcset="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/article-slide-5@2x.jpg 2x"
                alt=""
              />

              <img
                src="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/article-slide-6.jpg"
                srcset="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/article-slide-6@2x.jpg 2x"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

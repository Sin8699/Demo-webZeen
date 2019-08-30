import React from "react";
import "./Body.css";
import { connect } from "react-redux";

var Body = () => {
  return (
    <div className="Body">
      <div id="demos" class="demos flex row block">
        <div class="row--limit block__inner">
          <div class="block__title__wrap loaded">
            <div class="block__title">Ready To Use Demos</div>
            <div class="block__subtitle row--limit--narrow">
              It has never been easier to create a modern, creative and stunning
              magazine, blog or shop. With thousands of option combinations
              &amp; superior design, you can finally have your dream site. Demos
              can be imported with one click.
            </div>
          </div>
          <div class="demos__wrap flex">
            <div class="demo ani--up xs-12 s-6 l-4 col demo-1 loaded">
              <div class="demo__wrap">
                <span class="bar">
                  <i class="zeen-more" />
                </span>
                <a href="https://demos.codetipi.com/zeen/" target="_blank">
                  <img
                    src="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/demos/zeen-1.jpg"
                    srcset="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/demos/zeen-1@2x.jpg 2x"
                    alt="Zeen"
                  />
                </a>
              </div>
              <div class="demo__title title">
                <a href="https://demos.codetipi.com/zeen/" target="_blank">
                  Zeen{" "}
                </a>
              </div>
              <div class="demo__subtitle subtitle">
                A clean multipurpose concept with modern features throughout.
                Includes slide-in newsletter box, shop, big slide menu and much
                more.{" "}
              </div>
            </div>
            <div class="demo ani--up xs-12 s-6 l-4 col demo-2 loaded">
              <div class="demo__wrap">
                <span class="bar">
                  <i class="zeen-more" />
                </span>
                <a href="https://demos.codetipi.com/zeen-food/" target="_blank">
                  <img
                    src="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/demos/food-1.jpg"
                    srcset="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/demos/food-1@2x.jpg 2x"
                    alt="Food"
                  />
                </a>
              </div>
              <div class="demo__title title">
                <a href="https://demos.codetipi.com/zeen-food/" target="_blank">
                  Food{" "}
                </a>
              </div>
              <div class="demo__subtitle subtitle">
                Share your delicious recipes in a sophisticated layout. Includes
                recipe schema, trending blocks, a call to action block and much
                more.{" "}
              </div>
            </div>
            <div class="demo ani--up xs-12 s-6 l-4 col demo-3 loaded">
              <div class="demo__wrap">
                <span class="bar">
                  <i class="zeen-more" />
                </span>
                <a href="https://demos.codetipi.com/zeen-tech/" target="_blank">
                  <img
                    src="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/demos/tech-1.jpg"
                    srcset="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/demos/tech-1@2x.jpg 2x"
                    alt="Tech"
                  />
                </a>
              </div>
              <div class="demo__title title">
                <a href="https://demos.codetipi.com/zeen-tech/" target="_blank">
                  Tech{" "}
                </a>
              </div>
              <div class="demo__subtitle subtitle">
                his techy concept showcases subtle gradients, Let's Live Blog
                (Included Free), subscriptions, reviews with affiliate links,
                video player and more.{" "}
              </div>
            </div>
            <div class="demo ani--up xs-12 s-6 l-4 col demo-1 loaded">
              <div class="demo__wrap">
                <span class="bar">
                  <i class="zeen-more" />
                </span>
                <a href="https://demos.codetipi.com/zeen-play/" target="_blank">
                  <img
                    src="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/demos/play-1.jpg"
                    srcset="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/demos/play-1@2x.jpg 2x"
                    alt="Videogames"
                  />
                </a>
              </div>
              <div class="demo__title title">
                <a href="https://demos.codetipi.com/zeen-play/" target="_blank">
                  Videogames{" "}
                </a>
              </div>
              <div class="demo__subtitle subtitle">
                An impactful concept for big magazines with multiple categories.
                Includes live Twitch Stream, smooth ajax login/register and much
                more.{" "}
              </div>
            </div>
            <div class="demo ani--up xs-12 s-6 l-4 col demo-2 loaded">
              <div class="demo__wrap">
                <span class="bar">
                  <i class="zeen-more" />
                </span>
                <a
                  href="https://demos.codetipi.com/zeen-comics/"
                  target="_blank"
                >
                  <img
                    src="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/demos/comics-1.jpg"
                    srcset="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/demos/comics-1@2x.jpg 2x"
                    alt="Comics"
                  />
                </a>
              </div>
              <div class="demo__title title">
                <a
                  href="https://demos.codetipi.com/zeen-comics/"
                  target="_blank"
                >
                  Comics{" "}
                </a>
              </div>
              <div class="demo__subtitle subtitle">
                A playful concept ideal for sites with lots of vertical images.
                Includes hanging menu logo, above site grid, sleek reviews and
                much more.{" "}
              </div>
            </div>
            <div class="demo ani--up xs-12 s-6 l-4 col demo-3 loaded">
              <div class="demo__wrap">
                <span class="bar">
                  <i class="zeen-more" />
                </span>
                <a
                  href="https://demos.codetipi.com/zeen-minimal/"
                  target="_blank"
                >
                  <img
                    src="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/demos/minimal-1.jpg"
                    srcset="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/demos/minimal-1@2x.jpg 2x"
                    alt="Minimal"
                  />
                </a>
              </div>
              <div class="demo__title title">
                <a
                  href="https://demos.codetipi.com/zeen-minimal/"
                  target="_blank"
                >
                  Minimal{" "}
                </a>
              </div>
              <div class="demo__subtitle subtitle">
                A silky minimalist concept perfect for creative sites that
                showcase beautiful imagery. Includes gallery posts, inline
                mid-post promo box and much more.{" "}
              </div>
            </div>
            <div class="demo ani--up xs-12 s-6 l-4 col demo-1">
              <div class="demo__wrap">
                <span class="bar">
                  <i class="zeen-more" />
                </span>
                <a
                  href="https://demos.codetipi.com/zeen-style/"
                  target="_blank"
                >
                  <img
                    src="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/demos/style-1.jpg"
                    srcset="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/demos/style-1@2x.jpg 2x"
                    alt="Style"
                  />
                </a>
              </div>
              <div class="demo__title title">
                <a
                  href="https://demos.codetipi.com/zeen-style/"
                  target="_blank"
                >
                  Style{" "}
                </a>
              </div>
              <div class="demo__subtitle subtitle">
                A minimal, bold and impactful demo with fixed social icons on
                the left side and big images throughout. Perfect for any niches
                with bold imagery.{" "}
              </div>
            </div>
            <div class="demo ani--up xs-12 s-6 l-4 col demo-2">
              <div class="demo__wrap">
                <span class="bar">
                  <i class="zeen-more" />
                </span>
                <a
                  href="https://demos.codetipi.com/zeen-science/"
                  target="_blank"
                >
                  <img
                    src="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/demos/science-1.jpg"
                    srcset="https://179324-535732-2-raikfcquaxqncofqfm.stackpathdns.com/zeen/img/demos/science-1@2x.jpg 2x"
                    alt="Science"
                  />
                </a>
              </div>
              <div class="demo__title title">
                <a
                  href="https://demos.codetipi.com/zeen-science/"
                  target="_blank"
                >
                  Science{" "}
                </a>
              </div>
              <div class="demo__subtitle subtitle">
                A gorgeous dark concept with full-screen feature grids, parallax
                call to action block, full-screen megamenus and much more.{" "}
              </div>
            </div>
            <div class="demo ani--up xs-12 s-6 l-4 col demo-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;

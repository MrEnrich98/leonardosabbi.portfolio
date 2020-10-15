import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Animated } from "react-animated-css";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Card from "../components/Cards";
import Card2 from "../components/Card2";
import Header from "../components/header";
import Behance1 from "../images/behance.png";
import Dribbble1 from "../images/dribbble.png";
import dribbble from "../images/dribbble_white.png";
import behance from "../images/be_white.png";
import Instagram from "../images/instagram-icon.png";
import LinkedIn from "../images/linked-logo.png";
import Handz1 from "../images/hand1.png";
import Handz2 from "../images/handz2.png";
import designIcon from "../images/design-icon2.svg";
import brandingIcon from "../images/branding-icon2.svg";
import codeIcon from "../images/code-icon2.svg";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import axios from "axios";
import { toggleDarkmode, toggleDarkMode } from "../state/app";
import { checkPropTypes } from "prop-types";
import { Link } from "gatsby";

//import App from "../components/app"

//import "../components/fullpage.min.css"
//import "../components/fullpage.min.js"

const IndexPage = ({ isDarkMode, dispatch }) => {
  let [data, setData] = useState();
  function effectCallback() {
    async function call() {
      let resp = await axios.get(
        "https://api.dribbble.com/v2/user/shots?access_token=72b5fa97edd8a4ee26e12f93b7495be78c094c68c5416afa42b944a3f9e2a352"
      );
      /*https://api.dribbble.com/v2/user/shots?access_token=72b5fa97edd8a4ee26e12f93b7495be78c094c68c5416afa42b944a3f9e2a352&per_page=100*/
      setData(resp.data);
    }
    call();
  }

  useEffect(effectCallback, []);

  return (
    <Layout>
      <SEO title="Portfolio" />

      <Header />
      <div className="navTrigger"></div>
      <div className={isDarkMode ? "Hero isDark" : "Hero"}>
        <div className={isDarkMode ? "HeroGroup isDark" : "HeroGroup"}>
          <h1>
            UI/UX and <br /> Interaction Designer
          </h1>
          <p>
            Hello, I'm <span>Leonardo</span> and I came from Italy🇮🇹, Rome.{" "}
            <br /> I'm an Interaction Designer and my passion is create <br />{" "}
            beautiful web and mobile User Experience that can make people's
            navigation better.
          </p>
          {/* <a className={isDarkMode ? "darkModeButton" : "lightModeButton"}> */}
          {/* View works */}
          {/* </a> */}
          {/*<a
            className={isDarkMode ? "darkModeButton" : "lightModeButton"}
            onClick={() => dispatch(toggleDarkMode(!isDarkMode))}
          >
            Dark Mode{isDarkMode ? " On" : " Off"}
          </a>
          */}

          <div className="mouse"></div>
        </div>
      </div>

      <div
        id="anchor-1"
        className={isDarkMode ? "CardsTitle isDark" : "CardsTitle"}
      >
        <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
          <h2> Recent work</h2>

          <h1>Portfolio</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
          <div className="CardsGroup">
            {data ? (
              data.map((card, index) => (
                <Card
                  key={index}
                  Image={card.images.hidpi}
                  url={card.html_url}
                />
              ))
            ) : (
              <ClipLoader
                size={80}
                //size={"150px"} this also works
                color={"#454bff"}
              />
            )}
          </div>
        </ScrollAnimation>

        <div className="btn-group">
          <button>
            {" "}
            <a href="https://dribbble.com/leonardosabbi" target="_blank">
              {" "}
              Dribbble Profile
            </a>
            <img src={Dribbble1} width="20px" height="20px" />{" "}
          </button>
          <button className="behance-btn">
            {" "}
            <a href="https://www.behance.net/leonardosabbi" target="_blank">
              {" "}
              Behance Profile
            </a>
            <img src={Behance1} width="24px" height="15px" />
          </button>
        </div>
      </div>

      <div
        id="anchor-2"
        className={isDarkMode ? "service-title isDark" : "service-title"}
      >
        <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
          <h2>How I work</h2>
          <h1>Service</h1>
        </ScrollAnimation>
      </div>
      <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
        <div className={isDarkMode ? "Service-bg isDark" : "Service-bg"}>
          <div className={isDarkMode ? "Service isDark" : "Service"}>
            <Card2
              title={"UI/UX Design"}
              subtitle={
                "Focused on solving the problem. I will create fantastic and intuitive interfaces for your online business, be it a website or a mobile application."
              }
              image={Handz2}
            />
            <Card2
              className="card-dev"
              title={"Front End Development"}
              subtitle={
                "As a designer who can code too, i strictly collab with developers and create a beautiful websites or web app."
              }
              image={Handz1}
            />
          </div>
        </div>
      </ScrollAnimation>
      <div className="footer">
        <div className="div-row">
          <div className="text-01">
            <h1>Let's work together!</h1>

            <h2>
              If you want to hire me please send me a mail to:
              <a href="mailto:leonardo.sabbi98@gmail.com">
                leonardo.sabbi98@gmail.com
              </a>
            </h2>
          </div>

          <ul className="social-link">
            <li className="social-item">
              <a href="https://dribbble.com/leonardosabbi" target="_blank">
                <img src={dribbble} width="25px" height="25px"></img>
              </a>
            </li>
            <li className="social-item">
              <a href="https://www.behance.net/leonardosabbi" target="_blank">
                <img src={behance} width="30px" height="20px"></img>
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://www.instagram.com/enrich.design/"
                target="_blank"
              >
                <img src={Instagram} width="25px" height="25px"></img>
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://www.linkedin.com/in/leonardo-sabbi-873bb516a/"
                target="_blank"
              >
                <img src={LinkedIn} width="25px" height="25px"></img>
              </a>
            </li>
          </ul>
        </div>
        <p>
          © 2020 All right reserved - Designed & Coded by{" "}
          <a id="name" href="#">
            Leonardo Sabbi
          </a>
        </p>
      </div>
    </Layout>
  );
};
export default connect(
  (state) => ({
    isDarkMode: state.app.isDarkMode,
  }),
  null
)(IndexPage);

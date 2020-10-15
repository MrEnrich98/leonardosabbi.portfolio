import { a } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import logo from "../images/name.png"
import "./header.css"
import { Collapse } from "react-burgers"
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"
import dribbble from "../images/dribbble_white.png"
import behance from "../images/be_white.png"
import Twitter from "../images/twitter-logo.png"
import LinkedIn from "../images/linked-logo.png"
import Dribbble1 from "../images/dribbble.png"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      HasScrolled: false,
      isToggled: false,
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset
    if (scrollTop > 50) {
      this.setState({ HasScrolled: true })
    } else {
      this.setState({ HasScrolled: false })
    }
  }

  toggle() {
    this.setState(currentState => ({
      isToggled: !currentState.isToggled,
    }))
  }

  render() {
    return (
      <div
        className={this.state.HasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div id="responsive-nav">
          <a to="/myname">
            Leonardo <span>Sabbi</span>
          </a>
          <a id="hamburger-icon" onClick={() => this.toggle()}>
            <Collapse
              active={this.state.isToggled ? true : false}
              width={20}
              lineHeight={2}
              lineSpacing={4}
              borderRadius={6}
              padding={0}
            />
          </a>
        </div>
        <ul className={this.state.isToggled ? "true" : "false"}>
          <li className="item1-anim">
            <Link to="anchor-1">Works</Link>
          </li>
          <li className="item2-anim">
            <Link to="anchor-2">Service</Link>
          </li>
          <li>
            <button id="item3-anim" className="contact">
              <a href="mailto:leonardo.sabbi98@gmail.com">Contact</a>
            </button>
          </li>
        </ul>

        <div className="HeaderGroup">
          <a to="/myname">
            Leonardo <span>Sabbi</span>
          </a>
          <Link to="anchor-1" spy={true} smooth={true} duration="500">
            Works
          </Link>
          <Link to="anchor-2" spy={true} smooth={true} duration="500">
            Services
          </Link>
          <button className="contact">
            {" "}
            <a href="mailto:leonardo.sabbi98@gmail.com">Contact me</a>
          </button>
        </div>
      </div>
    )
  }
}

export default Header

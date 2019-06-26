import React from 'react'
import {Link} from "react-router-dom";
import './Header.css'
import logo from '../assets/banner.png';

class Header extends React.Component {
  constructor(props) {
		super(props);

		this.state = {};

    this.handleScroll = this.handleScroll.bind(this);
  }
  handleScroll() {
		this.setState({scroll: window.scrollY});
  }
  componentDidMount() {
		const el = document.querySelector('nav');
		this.setState({top: el.offsetTop, height: el.offsetHeight});
		window.addEventListener('scroll', this.handleScroll);
  }
  
  componentDidUpdate() {
		this.state.scroll > this.state.top ? 
			document.body.style.paddingTop = `${this.state.height}px` :
			document.body.style.paddingTop = 0;
	}
  render(){
    return (
      <div className="container">
          <div className="row">
            <nav className={this.state.scroll > this.state.top ? "navbar navbar-expand-lg fixed-top navbar-light sticky-bar" : "navbar navbar-expand-md fixed-top navbar-light"}>
              <Link to="/" className="navbar-brand">
                {
                  this.state.scroll > this.state.top ? 
                  <h3 className="h-text"><span id="n-text">IEEE Turkey Computer Society</span></h3>:
                  <img src={logo} alt="logo" className="banner"/>
                }
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to = "/about" className="nav-link">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link to = "/madc" className="nav-link">MadC</Link>
                  </li>
                  <li className="nav-item">
                    <Link to ="/ieeextreme" className="nav-link">IEEEXtreme</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/cscon" className="nav-link">CSCON</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
    )
  }
}
export default Header;
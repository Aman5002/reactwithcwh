import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <><nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link> */}
                 <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.abouttitle}
                </Link>
              </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}


<div className= {`form-check form-switch text-${props.mode==='light'?'dark' : 'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.modehandler} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Enable' : 'Disable'} Dark  Mode</label>
</div>
            
          </div>
        </div>
      </nav>
    </>
  );
}
// propTypes are used to define the data type which the prop will recive for every particutlar object... if any of other datatypes passed here then it will show error on console..
Navbar.propTypes = {
  title: PropTypes.string.isRequired, // isRequired is used to set the prop to be pass requred otherwise the error will shown in console.. this only work if default prop is not defined..
  abouttitle: PropTypes.string.isRequired,
};
//defaultProps are used if we not pass any prop to the component then the values inside the defaultProps object will be automatically assigned to the props element.
Navbar.defaultProps = {
  title: "Set title here",
  abouttitle: "About",
};

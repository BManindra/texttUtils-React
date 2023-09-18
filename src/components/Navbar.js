import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {

  let [colorTheme, setColorTheme] = useState("light");

  const colorPalette = () => {
    let colorName = document.getElementById("colorScheme").elements["colorSelection"].value;
    setColorTheme(colorName);
    document.body.style.backgroundColor = "#" + colorName;
    document.body.style.color = "#FFFFFF";
  }

  const navBg=()=>{
    setColorTheme("dark");
  }



  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg${colorTheme} bg-${props.mode === 'dark' ? 'dark' : 'light'} navbar-${props.mode === 'dark' ? 'dark' : 'light'}`} >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about}</Link>
              </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary" type="submit">Search</button>
            </form> */}

            <form action="#" id="colorScheme">
              <input type="radio" className="btn-check" value="E1866B" name="colorSelection" id="danger-outlined" autoComplete="off" onClick={colorPalette} />
              <label className="btn btn-border bgE1866B" htmlFor="danger-outlined"></label>
              <input type="radio" className="btn-check" value="96E16B" name="colorSelection" id="success-outlined" autoComplete="off" onClick={colorPalette} />
              <label className="btn btn-border bg96E16B" htmlFor="success-outlined"></label>
              <input type="radio" className="btn-check" value="73AAEB" name="colorSelection" id="blue-outlined" autoComplete="off" onClick={colorPalette} />
              <label className="btn btn-border bg73AAEB" htmlFor="blue-outlined"></label>
              <input type="radio" className="btn-check" value="CF6DD3" name="colorSelection" id="purple-outlined" autoComplete="off" onClick={colorPalette} />
              <label className="btn btn-border bgCF6DD3" htmlFor="purple-outlined"></label>
            </form>

            {/* <div className="dropdown mx-4">
              <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Colored Background
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" onClick={props.changegreen} href="#">Green</a></li>
                <li><a className="dropdown-item" onClick={props.changered} href="#">Red</a></li>
                <li><a className="dropdown-item" onClick={props.changeyellow} href="#">Yellow</a></li>
              </ul>
            </div> */}

            <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={navBg} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
}

Navbar.defaultProps = {
  title: "set the title",
  about: "About us"

}



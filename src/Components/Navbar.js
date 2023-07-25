import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <>
            <nav
                className={`navbar navbar-expand-lg ${props.mode === "dark"
                    ? `navbar-${props.mode} bg-${props.mode}`
                    : props.gmode === "success"
                        ? `navbar-${props.gmode} bg-${props.gmode}`
                        : `navbar-${props.bmode} bg-${props.bmode}`
                    }`}
            >
                <div className="container-fluid">
                    <Link className={`navbar-brand ${props.gmode === "success" || props.bmode === "primary" || props.mode === "dark" ? "text-white" : "text-black"
                        }`} to="/">
                        {props.title}
                    </Link>
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
                                <Link className={`nav-link active ${props.gmode === "success" || props.bmode === "primary" || props.mode === "dark" ? "text-white" : "text-black"
                                    }`} aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${props.gmode === "success" || props.bmode === "primary" || props.mode === "dark" ? "text-white" : "text-black"
                                    }`} to="/about">
                                    {props.aboutText}
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex ">
                            <input
                                className={`form-control me-2 ${props.mode === 'dark' ? 'text-white bg-black' : 'text-black bg-white'}`}
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className={`btn ${props.mode === "dark" || props.gmode === "success" || props.bmode === "primary"
                                    ? "btn-outline-light"
                                    : "btn-outline-dark"
                                    }`}
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                        <div className="form-check form-switch mx-3">
                            <input
                                className="form-check-input"
                                onClick={props.toggleMode}
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault"
                                defaultChecked={props.mode === "dark"}
                            />
                            <label
                                className={`form-check-label ${props.mode === "dark" || props.gmode === "success" || props.bmode === "primary" ? "text-white" : "text-black"
                                    }`}
                                htmlFor="flexSwitchCheckDefault"
                            >
                                Enable Dark Mode
                            </label>
                        </div>

                        {/* <div className="form-check form-switch mx-3">
              <input
                className="form-check-input"
                onClick={props.tiggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckGreen"
                defaultChecked={props.gmode === "success"}
              />
              <label
                className={`form-check-label ${props.mode === "dark" || props.gmode === "success" || props.bmode === "primary"? "text-white" : "text-black"
              }`}
                htmlFor="flexSwitchCheckGreen"
              >
                Enable Green Dark Mode
              </label>
            </div> */}

             {/* <div className="form-check form-switch mx-3">
              <input
                className="form-check-input"
                onClick={props.triggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckBlue"
                defaultChecked={props.bmode === "primary"}
              />
              <label
                className={`form-check-label ${props.mode === "dark" || props.gmode === "success" || props.bmode === "primary"? "text-white" : "text-black"
              }`}
                htmlFor="flexSwitchCheckBlue"
              >
                Enable Blue Dark Mode
              </label>
            </div> */}

                    </div>
                </div>
            </nav>
        </>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string,
};

Navbar.defaultProps = {
    title: "Set the title",
    aboutText: "Wrte about",
};

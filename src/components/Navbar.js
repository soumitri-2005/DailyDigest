import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render(props) {
        return (
            <div>
                <nav className={`navbar fixed-top navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">DailyDigest</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="mx-auto">
                                <ul className="navbar-nav">
                                    <li className="nav-item mx-2">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item dropdown mx-2">
                                        <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Categories
                                        </Link>
                                        <ul className="dropdown-menu" style={{ backgroundColor: this.props.mode === "light" ? "white" : "black", color: this.props.mode === "light" ? "black" : "white", border: "1px solid gray" }}>
                                            <li className="nav-item mx-2">
                                                <Link className="nav-link" to="/business">Business</Link>
                                            </li>
                                            <li className="nav-item mx-2">
                                                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                                            </li>
                                            <li className="nav-item mx-2">
                                                <Link className="nav-link" to="/general">General</Link>
                                            </li>
                                            <li className="nav-item mx-2">
                                                <Link className="nav-link" to="/health">Health</Link>
                                            </li>
                                            <li className="nav-item mx-2">
                                                <Link className="nav-link" to="/science">Science</Link>
                                            </li>
                                            <li className="nav-item mx-2">
                                                <Link className="nav-link" to="/sports">Sports</Link>
                                            </li>
                                            <li className="nav-item mx-2">
                                                <Link className="nav-link" to="/technology">Technology</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className={`form-check form-switch text-${this.props.mode === "light" ? "dark" : "light"}`}>
                                <input className="form-check-input" onClick={this.props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change mode</label>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;

import React, { Component } from "react";

class Homes extends Component {
  state = {
    navOpen: false
  };

  navOpenHandler(event) {
    event.preventDefault();
    this.setState({ navOpen: !this.state.navOpen });
  }

  render() {
    return (
      <div className="sidebar">
        <input
          type="checkbox"
          className="sidebar__checkbox"
          id="nav"
          checked={this.state.navOpen}
        />
        <label
          className="sidebar__btnbox"
          htmlFor="nav"
          onClick={event => this.navOpenHandler(event)}
        >
          <button className="sidebar__btn" />
        </label>
        <div className="sidebar__expand-background">
          <ul className="sidebar__nav">
            <li
              className="sidebar__nav-item"
              onClick={event => this.navOpenHandler(event)}
            >
              <a href="#" className="sidebar__nav-link">
                Find Your Dream Home
              </a>
            </li>
            <li
              className="sidebar__nav-item"
              onClick={event => this.navOpenHandler(event)}
            >
              <a href="#" className="sidebar__nav-link">
                Request Proposal
              </a>
            </li>
            <li
              className="sidebar__nav-item"
              onClick={event => this.navOpenHandler(event)}
            >
              <a href="#" className="sidebar__nav-link">
                Download Home Planner
              </a>
            </li>
            <li
              className="sidebar__nav-item"
              onClick={event => this.navOpenHandler(event)}
            >
              <a href="#" className="sidebar__nav-link">
                List Your Property
              </a>
            </li>
            <li
              className="sidebar__nav-item"
              onClick={event => this.navOpenHandler(event)}
            >
              <a href="#" className="sidebar__nav-link">
                Contact Us
              </a>
            </li>
            <li
              className="sidebar__nav-item"
              onClick={event => this.navOpenHandler(event)}
            >
              <a href="#" className="sidebar__nav-link">
                Careers
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Homes;

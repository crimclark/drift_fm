import React, { Component } from 'react';

class NavLink extends Component {
  constructor() {
    super();
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick(evt) {
    evt.preventDefault();
    let name = this.props.link;
    this.props.handleClick(name);
  }

  render() {
    return (
      <li className="pure-menu-item"><a onClick={this.handleNavClick} href="#" className="pure-menu-link">{this.props.link}</a></li>
    )
  }
}

export default NavLink;

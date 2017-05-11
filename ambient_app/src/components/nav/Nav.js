import React, { Component } from 'react';
import NavLink from './NavLink';
import './nav.css';

class Nav extends Component {

  // destructure handleClick
  render() {
    return (
      <div className="pure-menu pure-menu-horizontal">
        <ul className="pure-menu-list">
          <NavLink link={"CHORDS"} handleClick={this.props.handleClick} />
          <NavLink link={"MELODY"} handleClick={this.props.handleClick}/>
          <NavLink link={"SAMPLE"} handleClick={this.props.handleClick} />
          <NavLink link={"GLOBAL"} handleClick={this.props.handleClick} />
        </ul>
      </div>
    )
  }
}

// const Nav = ({ handleClick }) => {
//   return (
//     <div className="pure-menu pure-menu-horizontal">
//       <ul className="pure-menu-list">
//         <NavLink link={"CHORDS"} handleClick={handleClick} />
//         <NavLink link={"MELODY"} handleClick={handleClick}/>
//         <NavLink link={"SAMPLE"} handleClick={handleClick} />
//         <NavLink link={"GLOBAL"} handleClick={handleClick} />
//       </ul>
//     </div>
//   )
// }

export default Nav;

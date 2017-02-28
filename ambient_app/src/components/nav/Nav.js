import React, { Component } from 'react';
import NavLink from './NavLink';

class Nav extends Component {

  // handleNavClick() {

  // }

//   render() {
//     return (
//       <div className="pure-menu pure-menu-horizontal">
//         <ul className="pure-menu-list">
//           <li className="pure-menu-item"><a href="#" className="pure-menu-link">CHORDS</a></li>
//           <li className="pure-menu-item"><a href="#" className="pure-menu-link">MELODY</a></li>
//           <li className="pure-menu-item"><a href="#" className="pure-menu-link">SAMPLE</a></li>
//         </ul>
//       </div>
//       )
//   }
// }
  render() {
    return (
      <div className="pure-menu pure-menu-horizontal">
        <ul className="pure-menu-list">
          <NavLink link={"CHORDS"} handleClick={this.props.handleClick} />
          <NavLink link={"MELODY"} handleClick={this.props.handleClick}/>
          <NavLink link={"SAMPLE"} handleClick={this.props.handleClick} />
        </ul>
      </div>
      )
  }
}

export default Nav;

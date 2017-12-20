import React, { Component } from 'react';
import TitleBlock from './TitleBlock';
import NavBarItem from './NavBarItem';

class NavBar extends Component {
  render(props) {
    const navBarStyle = {
      // backgroundColor: '#E91E63',
      height: '10%',
      padding: 30,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      // TODO: add vendor prefixes (need to account for duplicate keys)
    };

    return (
      <div style={navBarStyle}>
        <TitleBlock />
        {this.props.pages.map((page) => <NavBarItem page={page} />)}
      </div>
    )
  }
}

export default NavBar;
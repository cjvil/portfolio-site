import React, { Component } from 'react';
import NavBarItem from './NavBarItem';
import TitleBlock from './TitleBlock';

class NavBar extends Component {
  render(props) {
    const navBarStyle = {
      // backgroundColor: '#E91E63',
      height: '10%',
      width: '100%',
      padding: 40,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      // TODO: add vendor prefixes (need to account for duplicate keys)
    };

    const navItemsStyle = {
      width: '60%',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    }

    return (
      <div style={navBarStyle}>
        <TitleBlock />
        <div style={navItemsStyle}>
          {this.props.pages.map((page) => <NavBarItem page={page} />)}
        </div>
      </div>
    )
  }
}

export default NavBar;
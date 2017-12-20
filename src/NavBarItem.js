import React from 'react';

const NavBarItem = function(props) {
  const navBarItemStyle = {
    fontFamily: 'Roboto',
    fontSize: '90%',
    color: '#E91E63',
    letterSpacing: 3,
  };

  return (
    <div style={navBarItemStyle}>{props.page}</div>
  );
};

export default NavBarItem;
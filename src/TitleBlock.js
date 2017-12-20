import React from 'react';

const TitleBlock = function() {
  const titleStyle = {
    fontFamily: 'Helvetica',
    fontSize: '110%',
    color: '#E91E63',
    letterSpacing: 3,
  };

  const subtitleStyle = {
    fontSize: '100%',
    color: '#880E4F',
    letterSpacing: 1,
  }

  return (
    <div>
      <div style={titleStyle}>Christie<br />Villanueva</div>
      <div style={subtitleStyle}>software engineer</div>
    </div>
  );
};

export default TitleBlock;
import React from 'react';

const Circle = ({ initial, name }) => {
  const circleClasser = (n) => (n === 'FB account' ? 'circle yellow-bg' : 'circle blue-bg white-tx');
  const iconPath = name === 'FB account' ? '/images/fb-icon.svg' : '/images/ig-icon.svg';

  return (
    <div className="circle-container">
      <div className="icon">
        <img src={iconPath} width="20" />
      </div>
      <div className={circleClasser(name)}>
        <p>{initial}</p>
      </div>
    </div>
  );
};

export default Circle;

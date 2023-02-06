import React from 'react';

const IconBox = (props) => {
  return (
    <div className={'icon-box'}>
      <div className={'icon-box__icon'}>
        <img src={'/src/assets/images/' + props.icon} alt=""/>
      </div>
      <p>{props.text}</p>
    </div>
  );
};

export default IconBox;

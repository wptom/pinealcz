import React from 'react';

const GlassBox = (props) => {
  return (
    <div className={'glass-box'}>
      {props.children}
    </div>
  );
};

export default GlassBox;

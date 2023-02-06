import React from 'react';

const ArrowButton = (props) => {
  return (
    <a href={props.url} className={'arrow-btn'} target={'_self'}><span>{props.text}</span></a>
  );
};

export default ArrowButton;

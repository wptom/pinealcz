import React from 'react';

const ButtonDefault = (props) => {
  console.log(props);
  if (props.text === undefined) {
    return (
      <></>
    )
  } else {
    return (
      <a href={props.link} target='_blank' className={'btn' + props.modifier}>{props.text}</a>
    )
  }
}

export default ButtonDefault;

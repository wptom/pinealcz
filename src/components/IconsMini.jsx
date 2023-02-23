import React from 'react';
import iconReferences from "../../public/images/icon-references.png";

const IconsMini = () => {
  return (
    <div className={'icons-mini'}>
      <span className={'icons-mini__circle icons-mini__circle--one'}></span>
      <span className={'icons-mini__circle icons-mini__circle--two'}></span>
      <span className={'icons-mini__circle icons-mini__circle--three'}></span>
      <img src={iconReferences} className={'icons-mini__main'} alt=""/>
    </div>
  );
};

export default IconsMini;

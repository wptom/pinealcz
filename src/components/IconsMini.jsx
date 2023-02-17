import React from 'react';
import { Parallax, ParallaxBanner, useParallax } from 'react-scroll-parallax';
import iconReferences from "../../public/images/icon-references.svg";

const IconsMini = () => {
  return (
    <div className={'icons-mini'}>
      <Parallax translateX={['10px', '0px']} translateY={['10px', '0px']}>
        <span className={'icons-mini__circle icons-mini__circle--one'}></span>
      </Parallax>
      <Parallax translateX={['-20px', '0px']} translateY={['-20px', '0px']}>
        <span className={'icons-mini__circle icons-mini__circle--two'}></span>
      </Parallax>
      <Parallax translateX={['5px', '0px']} translateY={['15px', '0px']}>
        <span className={'icons-mini__circle icons-mini__circle--three'}></span>
      </Parallax>
      <Parallax translateX={['-20px', '0px']} translateY={['-20px', '0px']}>
        <img src={iconReferences} className={'icons-mini__main'} alt=""/>
      </Parallax>
    </div>
  );
};

export default IconsMini;

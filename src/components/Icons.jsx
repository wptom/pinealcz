import React from "react";
import { Parallax, ParallaxBanner, useParallax } from 'react-scroll-parallax';

const Icons = (props) => {

  return (
    <>
     <div className={'icons'}>
       <Parallax translateX={['10px', '-10px']} translateY={['10px', '-10px']} scale={[5, 1, 'easeOutCubic']}>
         <span className={'icons__circle icons__circle--one'}></span>
       </Parallax>
       <Parallax translateX={['-20px', '20px']} translateY={['-20px', '20px']} scale={[5, 1, 'easeOutCubic']}>
         <span className={'icons__circle icons__circle--two'}></span>
       </Parallax>
       <Parallax translateX={['5px', '-5px']} translateY={['15px', '-15px']} scale={[5, 1, 'easeOutCubic']}>
         <span className={'icons__circle icons__circle--three'}></span>
       </Parallax>
       <Parallax translateX={['10px', '-10px']} translateY={['10px', '-10px']}>
         <span className={'icons__square icons__square--one'}></span>
       </Parallax>
       <Parallax translateX={['10px', '10px']} translateY={['10px', '10px']}>
         <span className={'icons__square icons__square--two'}></span>
       </Parallax>
       <Parallax translateX={['15px', '-15px']} translateY={['15px', '-15px']}>
         <span className={'icons__square icons__square--three'}></span>
       </Parallax>
       <Parallax translateX={['-20px', '20px']} translateY={['-20px', '20px']}>
         <img src={props.pageIcon} className={'icons__main'} alt=""/>
       </Parallax>
     </div>
    </>
  )
}

export default Icons;

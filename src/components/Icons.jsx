import React from "react";

const Icons = (props) => {

  return (
    <>
     <div className={'icons'}>
       <span className={'icons__circle icons__circle--one'}></span>
       <span className={'icons__circle icons__circle--two'}></span>
       <span className={'icons__circle icons__circle--three'}></span>
       <span className={'icons__square icons__square--one'}></span>
       <span className={'icons__square icons__square--two'}></span>
       <span className={'icons__square icons__square--three'}></span>
       <img src={props.pageIcon} className={'icons__main'} alt=""/>
     </div>
    </>
  )
}

export default Icons;

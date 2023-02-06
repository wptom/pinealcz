import React from "react";
import pageDescItem from "./pageDescItem.jsx";

const PageDesc = (props) => {
  return (
    <div className={'page-desc'}>
      {props.children}
    </div>
  )
}

export default PageDesc;

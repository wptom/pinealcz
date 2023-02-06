import React from "react";

const PageDescItem = (props) => {
  return (
    <p dangerouslySetInnerHTML={{ __html: props.desc }}></p>
  )
}

export default  PageDescItem;

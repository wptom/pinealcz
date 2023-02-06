import React from "react";

const PageTitle = (props) => {
  return (
    <h1 className={'page-title'} dangerouslySetInnerHTML={{ __html: props.title }} />
  );
}

export default PageTitle;

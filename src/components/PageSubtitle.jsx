import React from 'react';

const PageSubtitle = (props) => {
  return (
    <div className={'page-subtitle'}>
      <p className={'text-big'} dangerouslySetInnerHTML={{ __html: props.text }} />
    </div>
  );
};

export default PageSubtitle;

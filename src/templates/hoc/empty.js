import React from 'react';
import withSectionWrapper from './with-section-wrapper';

const EmptyTemplate = props => {
  return <div {...props} />;
};

export default withSectionWrapper(EmptyTemplate);

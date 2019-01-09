import React from 'react';
import withSectionWrapper from './with-section-wrapper';

const DefaultTemplate = props => {
  return (
    <div className="template-wrapper">
      <p>Hello, World!</p>
    </div>
  );
};

export default withSectionWrapper(DefaultTemplate);

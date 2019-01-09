import React from 'react';

const withSectionWrapper = TemplateComponent => props => (
  <div className="section">
    <TemplateComponent {...props} />
  </div>
);

export default withSectionWrapper;

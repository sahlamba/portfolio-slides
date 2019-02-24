import React from 'react';

const withSectionWrapper = TemplateComponent => props => {
  const { order, siteContext } = props;

  let styles = {};
  if (siteContext && siteContext.style === '1-page') {
    styles = {
      display: 'flex',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '40px 0',
      backgroundColor: order % 2 ? '#F0F0F0' : '#FAFAFA',
    };
  }

  return (
    <div className="section" style={styles}>
      <TemplateComponent {...props} />
    </div>
  );
};

export default withSectionWrapper;

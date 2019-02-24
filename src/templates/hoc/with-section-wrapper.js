import React from 'react';
import { convertStringToValidId } from '../../containers/utils';

const withSectionWrapper = TemplateComponent => props => {
  const { config, order, siteContext } = props;

  if (siteContext && siteContext.style === '1-page') {
    const styles = {
      display: 'flex',
      alignItems: 'center',
      minHeight: '80vh',
      padding: '40px 0',
      backgroundColor: order % 2 ? '#F0F0F0' : '#FAFAFA',
    };
    return (
      <div
        className="section"
        id={`${convertStringToValidId(config.tooltip)}`}
        style={styles}
      >
        <TemplateComponent {...props} />
      </div>
    );
  }

  return (
    <div className="section">
      <TemplateComponent {...props} />
    </div>
  );
};

export default withSectionWrapper;

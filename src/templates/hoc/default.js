import React from 'react';
import PropTypes from 'prop-types';

import withSectionWrapper from './with-section-wrapper';

const DefaultTemplate = props => {
  const { data } = props;

  return (
    <div className="template-wrapper">
      <p style={{ color: '#444', fontSize: 36 }}>{data.pageTitle}</p>
      <p style={{ color: '#555', whiteSpace: 'pre-wrap' }}>{data.content}</p>
    </div>
  );
};

DefaultTemplate.propTypes = {
  data: PropTypes.shape({
    pageTitle: PropTypes.string.isRequired,
    content: PropTypes.any,
  }),
};

export default withSectionWrapper(DefaultTemplate);

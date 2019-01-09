import React from 'react';

import EmptyTemplate from './hoc/empty';
import DefaultTemplate from './hoc/default';

const AvailableTemplates = {
  empty: props => <EmptyTemplate {...props} />,
  default: props => <DefaultTemplate {...props} />,
};

const getTemplate = (templateName, key = 0, props = {}) => {
  const T = AvailableTemplates[templateName];
  return <T key={key} {...props} />;
};

export default AvailableTemplates;
export { getTemplate };

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import LinkTag from './linktag';

const styles = {
  _tags: {
    display: 'block',
    marginTop: 7,
  },
};

const TagList = props => {
  const { classes, tags } = props;
  if (!tags.length) {
    return null;
  }
  return (
    <div className={classes._tags}>
      {tags.map((tagProps, i) => (
        <LinkTag key={i} {...tagProps} style={{ margin: '3px 3px 0 0' }} />
      ))}
    </div>
  );
};

TagList.propTypes = {
  classes: PropTypes.object.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string,
      background: PropTypes.string,
      color: PropTypes.string,
    })
  ).isRequired,
};

export default withStyles(styles)(TagList);

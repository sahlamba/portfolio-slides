import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  _tag_wrapper: {
    display: 'inline-block',
    border: 0,
    borderRadius: 20,
    padding: '2px 8px',
    background: '#474f85',
  },
  _tag_text: {
    fontSize: 11,
    color: '#fff',
  },
  _link: {
    textDecoration: 'none',
  },
};

const LinkTag = props => {
  const { style, classes, text, link, background, color } = props;
  return (
    <div className={classes._tag_wrapper} style={{ background, ...style }}>
      {link ? (
        <a href={link} className={classes._link}>
          <Typography className={classes._tag_text} style={{ color }}>
            {text}
          </Typography>
        </a>
      ) : (
        <Typography className={classes._tag_text} style={{ color }}>
          {text}
        </Typography>
      )}
    </div>
  );
};

LinkTag.defaultProps = {
  style: {},
  text: '',
  link: '',
  background: '',
  color: '',
};

LinkTag.propTypes = {
  style: PropTypes.object,
  classes: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
};

export default withStyles(styles)(LinkTag);

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
    fontSize: 12,
    color: '#fff',
  },
  _link: {
    display: 'inline-block',
    border: 0,
    borderRadius: 5,
    padding: '2px 8px',
    background: '#4285f4',
    textDecoration: 'none',
    '&:hover': {
      background: '#3f51b5',
    },
  },
  _link_text: {
    color: '#ffffff',
    fontFamily: 'arial !important',
  },
};

const LinkTag = props => {
  const { style, classes, text, link, background, color } = props;
  if (link && link.length > 0) {
    return (
      <a href={link} className={classes._link} style={{ ...style }}>
        <Typography className={classes._link_text} style={{ color }}>
          {text}
        </Typography>
      </a>
    );
  }
  return (
    <div className={classes._tag_wrapper} style={{ background, ...style }}>
      <Typography className={classes._tag_text} style={{ color }}>
        {text}
      </Typography>
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

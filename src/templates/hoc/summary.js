import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { Email } from '@material-ui/icons';

import withSectionWrapper from './with-section-wrapper';

const styles = {
  _size_50: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '50%',
    padding: '20px',
  },
  _size_100: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '100%',
    padding: '20px',
  },
  _profile_img: {
    width: '70%',
    border: 0,
    borderRadius: '50%',
  },
  _title: {
    color: '#444',
    fontSize: '500%',
  },
  _subtitle1: {
    color: '#333',
    fontSize: '150%',
  },
  _subtitle2: {
    color: '#999',
    fontSize: '140%',
  },
  _social: {
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0',
  },
  _link_tag: {
    color: '#333',
    textDecoration: 'none',
    marginRight: 20,
  },
  _footer: {
    display: 'block',
    textAlign: 'center',
    position: 'absolute',
    left: '50%',
    bottom: 50,
    padding: 20,
    marginLeft: '-11px',
  },
  _align_center: {
    textAlign: 'center',
  },
  _text_justify: {
    textAlign: 'justify',
  },
  _margin_b20: {
    marginBottom: 20,
  },
};

const SummaryTemplate = props => {
  const { classes, data } = props;

  return (
    <div className="template-wrapper">
      <div className={classes._size_50}>
        <Typography className={`${classes._title}`}>{data.title}</Typography>
        <Typography className={`${classes._subtitle1} `}>
          {data.subtitle1}
        </Typography>
        <Typography className={`${classes._subtitle2} `}>
          {data.subtitle2}
        </Typography>
        <div className={classes._social}>
          {data.social.map((link, idx) => (
            <a className={classes._link_tag} href={link.href} key={idx}>
              {/* TODO: Dynamic icons, use link.display */}
              <Email />
            </a>
          ))}
        </div>
      </div>
      <div className={`${classes._size_50} ${classes._align_center}`}>
        <img
          src={data.imagePath ? require('../../' + data.imagePath) : null}
          className={classes._profile_img}
        />
      </div>
      <div className={classes._size_100}>
        {data.bio ? (
          <Typography
            className={`${classes._subtitle1} ${classes._margin_b20}`}
          >
            Biography
          </Typography>
        ) : null}
        <Typography className={classes._text_justify}>{data.bio}</Typography>
      </div>
      <div className={classes._footer}>
        <div className="icon-scroll" />
      </div>
    </div>
  );
};

SummaryTemplate.defaultProps = {
  data: {
    title: '',
    subtitle1: '',
    subtitle2: '',
    imagePath: '',
    social: [],
    bio: '',
  },
};

SummaryTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle1: PropTypes.string,
    subtitle2: PropTypes.string,
    imagePath: PropTypes.string,
    social: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string.isRequired,
        display: PropTypes.string.isRequired,
      })
    ),
    bio: PropTypes.string,
  }),
};

export default withSectionWrapper(withStyles(styles)(SummaryTemplate));

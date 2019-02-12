import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import withSectionWrapper from './with-section-wrapper';

const styles = {
  _inline_block_middle: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  _size_65: {
    width: '65%',
    padding: '20px',
  },
  _size_35: {
    width: '35%',
  },
  _size_100: {
    width: '100%',
    padding: '20px',
  },
  _profile_img: {
    width: '100%',
    border: 0,
    borderRadius: '50%',
  },
  _title: {
    color: '#444',
    fontSize: 72,
  },
  _subtitle1: {
    color: '#333',
    fontSize: 24,
  },
  _subtitle2: {
    color: '#888',
    fontSize: 18,
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
    // position: 'absolute',
    // left: '50%',
    // bottom: 50,
    // marginLeft: '-11px',
    padding: '40px 20px 20px 20px',
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
      <div className={`${classes._size_65} ${classes._inline_block_middle}`}>
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
              <FontAwesomeIcon
                icon={link.display}
                size={link.size ? link.size : 'lg'}
              />
            </a>
          ))}
        </div>
      </div>
      <div
        className={`${classes._size_35} ${classes._inline_block_middle} ${
          classes._align_center
        }`}
      >
        <img
          src={data.imagePath ? require('../../' + data.imagePath) : null}
          className={classes._profile_img}
        />
      </div>
      {data.bio && data.bio.title && data.bio.body ? (
        <div className={`${classes._size_100} ${classes._inline_block_middle}`}>
          <Typography
            className={`${classes._subtitle1} ${classes._margin_b20}`}
          >
            {data.bio.title}
          </Typography>
          <Typography className={classes._text_justify}>
            {data.bio.body}
          </Typography>
        </div>
      ) : null}
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
        display: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
          .isRequired,
        size: PropTypes.string,
      })
    ),
    bio: PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  }),
};

export default withSectionWrapper(withStyles(styles)(SummaryTemplate));

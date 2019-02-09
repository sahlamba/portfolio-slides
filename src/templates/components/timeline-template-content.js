import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

import TagList from '../components/taglist';

const styles = {
  _root: {
    padding: '1em',
  },
  _textbox: {
    display: 'flex',
  },
  _title: {
    flexGrow: 7,
    color: '#444',
    fontSize: 18,
  },
  _date: {
    flexGrow: 3,
    textAlign: 'right',
    color: '#888',
    fontSize: 14,
  },
  _subtitle: {
    color: '#888',
    fontSize: 14,
  },
  _desc: {
    marginTop: 10,
    marginBottom: 2,
    color: '#555',
    fontSize: 14,
    whiteSpace: 'pre-wrap',
  },
  _tags: {
    padding: 10,
  },
};

const TimelineContent = props => {
  const { classes, content, trimContent, onClick } = props;
  return (
    <div className={classes._root} onClick={onClick}>
      <div className={classes._textbox}>
        <Typography className={`${classes._title}`}>{content.title}</Typography>
        <Typography className={`${classes._date}`}>{content.date}</Typography>
      </div>
      <Typography className={`${classes._subtitle}`}>
        {content.subtitle}
      </Typography>
      {content.desc && !trimContent ? (
        <Typography className={`${classes._desc}`}>{content.desc}</Typography>
      ) : null}
      <TagList tags={content.tags} />
    </div>
  );
};

TimelineContent.defaultProps = {
  trimContent: true,
  content: {},
};

TimelineContent.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  trimContent: PropTypes.bool,
  content: PropTypes.shape({
    date: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    desc: PropTypes.string,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        link: PropTypes.string,
        background: PropTypes.string,
        color: PropTypes.string,
      })
    ),
  }),
};

export default withStyles(styles)(TimelineContent);

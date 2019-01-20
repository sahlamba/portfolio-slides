import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import TagList from '../components/taglist';

import withSectionWrapper from './with-section-wrapper';

const styles = {
  _page_title: {
    color: '#444',
    fontSize: 36,
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

const TimelineTemplate = props => {
  const { classes, data } = props;

  return (
    <div className="template-wrapper">
      <Typography className={classes._page_title}>{data.pageTitle}</Typography>
      <VerticalTimeline layout="1-column">
        {data.events.map((evt, idx) => (
          <VerticalTimelineElement
            key={idx}
            icon={evt.icon ? <FontAwesomeIcon icon={evt.icon} /> : null}
          >
            <div className={classes._textbox}>
              <Typography className={`${classes._title}`}>
                {evt.title}
              </Typography>
              <Typography className={`${classes._date}`}>{evt.date}</Typography>
            </div>
            <Typography className={`${classes._subtitle}`}>
              {evt.subtitle}
            </Typography>
            {evt.desc ? (
              <Typography className={`${classes._desc}`}>{evt.desc}</Typography>
            ) : null}
            <TagList tags={evt.tags} />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

TimelineTemplate.defaultProps = {
  data: {
    events: [],
  },
};

TimelineTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.shape({
    pageTitle: PropTypes.string.isRequired,
    events: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
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
      })
    ),
  }),
};

export default withSectionWrapper(withStyles(styles)(TimelineTemplate));

import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import MoreInfoModal from '../components/more-info-modal';
import TimelineContent from '../components/timeline-template-content';

import withSectionWrapper from './with-section-wrapper';

const styles = {
  _page_title: {
    color: '#444',
    fontSize: 36,
  },
};

class TimelineTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      modalContent: {},
    };
    this.openMoreInfoModal = this.openMoreInfoModal.bind(this);
    this.closeMoreInfoModal = this.closeMoreInfoModal.bind(this);
  }

  openMoreInfoModal(e, content) {
    e.preventDefault();
    this.setState({ openModal: true, modalContent: content });
  }

  closeMoreInfoModal() {
    this.setState({ openModal: false, modalContent: {} });
  }

  render() {
    const { classes, data } = this.props;

    return (
      <div className="template-wrapper">
        <Typography className={classes._page_title}>
          {data.pageTitle}
        </Typography>
        <VerticalTimeline layout="1-column">
          {data.events.map((evt, idx) => (
            <VerticalTimelineElement
              key={idx}
              icon={evt.icon ? <FontAwesomeIcon icon={evt.icon} /> : null}
            >
              <TimelineContent
                content={evt}
                onClick={e => {
                  this.openMoreInfoModal(e, evt);
                }}
              />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        <MoreInfoModal
          open={this.state.openModal}
          handleClose={this.closeMoreInfoModal}
          content={this.state.modalContent}
        />
      </div>
    );
  }
}

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
      })
    ),
  }),
};

export default withSectionWrapper(withStyles(styles)(TimelineTemplate));

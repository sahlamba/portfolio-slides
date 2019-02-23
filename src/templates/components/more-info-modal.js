import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import TimelineContent from './timeline-template-content';

const styles = {
  _wrapper: {
    position: 'absolute',
    width: 800,
    top: '50%',
    left: '50%',
    padding: 12,
    borderRadius: 3,
    transform: 'translate(-50%, -50%)',
    background: '#fff',
    outline: 'none',
  },
};

const MoreInfoModal = props => {
  const { classes, open, handleClose, content } = props;

  return (
    <Modal
      aria-labelledby="timeline-modal-title"
      aria-describedby="timeline-modal-description"
      open={open}
      onClose={handleClose}
    >
      <div className={classes._wrapper}>
        <TimelineContent content={content} trimContent={false} />
      </div>
    </Modal>
  );
};

MoreInfoModal.defaultProps = {
  content: {},
};

MoreInfoModal.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  content: PropTypes.object,
};

export default withStyles(styles)(MoreInfoModal);

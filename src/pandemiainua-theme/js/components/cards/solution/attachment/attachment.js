import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@pinua/uikit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArchive, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons';

import styles from './attachment.scss';

const iconsMapper = {
  source: faExternalLinkAlt,
  attachment: faGoogleDrive,
  instruction: faFileArchive
};

const Attachment = ({ href, text, type, ...props }) => {
  const icon = iconsMapper[type];

  return (
    <Text className={styles.source} top="s" size="s" color="navigational" component="a" target="_blank" href={href}>
      <Box padding="s">
        <FontAwesomeIcon className={styles.sourceIcon} icon={icon} />
        {text}
      </Box>
    </Text>
  );
};

Attachment.propTypes = {
  type: PropTypes.oneOf(['source', 'attachment', 'attachment']),
  href: PropTypes.string,
  text: PropTypes.string
};

export default Attachment;

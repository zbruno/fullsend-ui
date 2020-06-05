import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import IconProps from './icon.types';

const Icon = ({ iconName }: IconProps) => {
  return (
    <FontAwesomeIcon icon={['fas', iconName]} size="1x" fixedWidth />
  )
}

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
};

export default Icon;

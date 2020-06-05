import React from 'react';
import PropTypes from 'prop-types';

import LoaderProps from './loader.types';
import { LoaderElement, InnerLoaderElement } from './loader.styles';

const Loader = ({ loaderStyle = 'primary' }: LoaderProps) => (
  <LoaderElement loaderStyle={loaderStyle}>
    <InnerLoaderElement />
    <InnerLoaderElement />
  </LoaderElement>
);

Loader.propTypes = {
  color: PropTypes.oneOf([
    'border-purple-500',
    'border-white',
    'border-gray-500',
  ]),
};

export default Loader;

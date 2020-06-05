import React from 'react';

import Loader from '.';

export default {
  title: 'Loader',
  component: Loader,
  parameters: {
    jest: [],
  },
};

export const base = () => (
  <Loader />
);

import React from 'react';
import { select } from "@storybook/addon-knobs";

import Icon from './index';

export default {
  title: 'Icon',
  component: Icon,
  parameters: {
    jest: [],
  },
};

export const base = () => (
  <Icon iconName={select('Icon Name', ['camera', 'glasses', 'coffee'], 'coffee')} />
);

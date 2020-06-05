import React from 'react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from "@storybook/addon-actions";

import Button from './index';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    jest: [],
  },
};

export const base = () => (
  <Button
    loading={boolean('Loading', false)}
    disabled={boolean('Disabled', false)}
    onClick={action('button-click')}
    buttonStyle={select('Button Style', ['primary', 'secondary'], 'primary')}
    iconName={select('Icon', ['', 'coffee'], '')}
  >
    {text('Button Text', 'Button')}
  </Button>
);

export const primary = () => (
  <Button
    loading={boolean("Loading", false)}
    disabled={boolean("Disabled", false)}
    onClick={action('button-click')}
    buttonStyle="primary"
  >
    {text('Button Text', 'Primary Button')}
  </Button>
);

export const secondary = () => (
  <Button
    loading={boolean("Loading", false)}
    disabled={boolean("Disabled", false)}
    onClick={action('button-click')}
    buttonStyle="secondary"
  >
    {text('Button Text', 'Secondary Button')}
  </Button>
);

export const iconButton = () => (
  <Button
    loading={boolean("Loading", false)}
    disabled={boolean("Disabled", false)}
    onClick={action("button-click")}
    buttonStyle={select('Button Style', ['primary', 'secondary'], 'primary')}
    iconName={select("Icon", ["coffee"], "coffee")}
  >
    {text("Button Text", "Secondary Button")}
  </Button>
);

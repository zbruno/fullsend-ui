import React from 'react';
import renderer from 'react-test-renderer';

import Loader from './index';

describe('Loader UI snapshots', () => {
  test('renders purple', () => {
    const component = renderer.create(
      <Loader />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

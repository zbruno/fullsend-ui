import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Button from './index';

describe('<Button />', () => {
  describe('UI snapshots', () => {
    test('renders primary with icon', () => {
      const tree = renderer
        .create(
          <Button onClick={() => { }} iconName="sign-in-alt">
            Icon Button
          </Button>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('renders secondary', () => {
      const tree = renderer
        .create(
          <Button onClick={() => { }} buttonStyle="secondary">
            Button Text
          </Button>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('renders loading', () => {
      const tree = renderer
        .create(
          <Button onClick={() => { }} loading>
            Button Text
          </Button>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('renders disabled', () => {
      const tree = renderer
        .create(
          <Button onClick={() => { }} disabled>
            Button Text
          </Button>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('onClick callback', () => {
    test('should be invoked onClick', () => {
      const spy = jest.fn();
      const button = mount(<Button onClick={spy}>Button Text</Button>);

      button.simulate('click');
      expect(spy).toHaveBeenCalled();
    });

    test('should not be invoked if disabled', () => {
      const spy = jest.fn();
      const button = mount(
        <Button disabled onClick={spy}>
          Button Text
        </Button>,
      );

      button.simulate('click');
      expect(spy).not.toHaveBeenCalled();
    });

    test('should not be invoked if loading', () => {
      const spy = jest.fn();
      const button = mount(
        <Button loading onClick={spy}>
          Button Text
        </Button>,
      );

      button.simulate('click');
      expect(spy).not.toHaveBeenCalled();
    });
  });
});

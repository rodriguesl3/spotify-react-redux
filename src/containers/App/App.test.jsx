/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('App snaphot test', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

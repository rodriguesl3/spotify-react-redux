/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { CustomCard } from './CustomCard';

test('CustomCard snaphot test', () => {
  const component = renderer.create(<CustomCard image="https://cdn-images-1.medium.com/max/900/1*G2QwxPF2TvWXzRUnA4axoA.png" content="teste" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { CustomCard } from './CustomCard';

test('CustomCard snaphot test', () => {
  const component = renderer.create(<CustomCard image="https://cdn-images-1.medium.com/max/900/1*G2QwxPF2TvWXzRUnA4axoA.png" content="teste" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('shallow custom card', () => {
  const output = shallow(<CustomCard image="https://cdn-images-1.medium.com/max/900/1*G2QwxPF2TvWXzRUnA4axoA.png" content="teste" />);
  expect(shallowToJson(output)).toMatchSnapshot();
});

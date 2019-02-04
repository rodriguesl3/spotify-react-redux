/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { RatingStart } from './RatingStar';

test('RatingStart snaphot test', () => {
  const component = renderer.create(<RatingStart ratingValue="7.5" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

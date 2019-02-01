/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import FollowingArtists from './FollowingArtists';

test('FollowingArtists snaphot test', () => {
  const component = renderer.create(<FollowingArtists />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

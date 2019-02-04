/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import FollowingArtists from './FollowingArtists';

import { followingArtists } from '../UserInfo/__mocks__/objectsMocks';

test('FollowingArtists snaphot test', () => {
  const component = renderer.create(<FollowingArtists />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test('FollowingArtists list of card', () => {
  const component = renderer.create(<FollowingArtists followingArtists={followingArtists.data} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

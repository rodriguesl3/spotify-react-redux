
import React from 'react';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import FollowingArtists from './FollowingArtists';

import { followingArtists } from '../UserInfo/__mocks__/objectsMocks';

test('FollowingArtists snaphot test', () => {
  const component = renderer.create(<FollowingArtists />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test('FollowingArtists list of card', () => {
  const component = shallow(<FollowingArtists followingArtists={followingArtists.data} />);
  expect(shallowToJson(component)).toMatchSnapshot();
});

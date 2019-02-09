/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import SideBar from './SideBar';
import { userInfo } from '../UserInfo/__mocks__/objectsMocks';

test('SideBar snaphot test', () => {
  const component = renderer.create(<SideBar showSideBar="true" spotifyUserInfo={userInfo.data} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

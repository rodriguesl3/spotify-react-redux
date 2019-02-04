/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import UserInfo from './UserInfo';
import { userInfo, userListening } from './__mocks__/objectsMocks';

test('UserInfo snaphot test', () => {
  const component = renderer.create(
    <UserInfo
      userListening={userListening.data}
      spotifyUserInfo={userInfo.data}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

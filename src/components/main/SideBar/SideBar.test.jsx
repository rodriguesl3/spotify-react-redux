/* eslint-disable no-undef */
import React from 'react';

// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import SideBar from './SideBar';
import { userInfo, userListeningItem } from '../UserInfo/__mocks__/objectsMocks';

test('SideBar snaphot test', () => {
  const component = shallow(<SideBar showSideBar="true" spotifyUserInfo={userInfo.data} />);
  expect(shallowToJson(component)).toMatchSnapshot();
});


test('SideBar event test', () => {
  const onMockShowSideBar = jest.fn();

  const output = shallow(<SideBar
    showSideBar
    spotifyUserInfo={userInfo.data}
    onShowSideBar={onMockShowSideBar}
    userListening={userListeningItem}
  />);

  expect(shallowToJson(output)).toMatchSnapshot();
  output.find('.closeButton').simulate('click');
  expect(onMockShowSideBar).toHaveBeenCalledWith(false);
});

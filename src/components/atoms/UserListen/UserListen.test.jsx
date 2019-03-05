import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import UserListen from './UserListen';

test('clicking next music.', () => {
  const onMockChangeMusic = jest.fn();
  const userListenMock = {
    item: { name: 'teste' },
    device: {
      name: 'huawei',
      type: 'mobile',
    },
  };

  const output = shallow(<UserListen
    userListening={userListenMock}
    onChangeMusic={onMockChangeMusic}
  />);

  expect(shallowToJson(output)).toMatchSnapshot();

  output.find('.next').simulate('click');
  expect(onMockChangeMusic).toBeCalledWith('next');
});


test('clicking previous music.', () => {
  const onMockChangeMusic = jest.fn();
  const userListenMock = {
    item: { name: 'teste' },
    device: {
      name: 'huawei',
      type: 'mobile',
    },
  };

  const output = shallow(<UserListen
    userListening={userListenMock}
    onChangeMusic={onMockChangeMusic}
  />);

  expect(shallowToJson(output)).toMatchSnapshot();

  output.find('.previous').simulate('click');
  expect(onMockChangeMusic).toBeCalledWith('previous');
});
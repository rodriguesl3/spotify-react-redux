import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import searchList from '../__snapshots__/searchList';
import Search from './Search';

test('closing search component.', () => {
  const onMockIsSearching = jest.fn();

  const output = shallow(<Search
    onIsSearching={onMockIsSearching}
    isSearching
    searchResult={searchList.data}
    onSearchTracksArtists={() => { }}
  />);
  expect(shallowToJson(output)).toMatchSnapshot();

  output.find('.closeButton').simulate('click');
  expect(output.prop('isSearching')).toBeFalsy();
});

test('veryfing isSearching property.', () => {
  const onMockIsSearching = jest.fn();

  const output = shallow(<Search
    onIsSearching={onMockIsSearching}
    isSearching
    searchResult={searchList.data}
    onSearchTracksArtists={() => { }}
  />);
  expect(shallowToJson(output)).toMatchSnapshot();

  output.find('.closeButton').simulate('click');
  expect(onMockIsSearching).toHaveBeenCalledWith(false);
});

test('searching something', async () => {
  const onMockIsSearching = jest.fn();
  const onMockSearchTrackArtists = jest.fn();
  const delay = ms => new Promise(res => setTimeout(res, ms));


  const output = shallow((
    <Search
      onIsSearching={onMockIsSearching}
      isSearching
      searchResult={searchList.data}
      onSearchTracksArtists={onMockSearchTrackArtists}
    />));
  expect(shallowToJson(output)).toMatchSnapshot();

  const value = 'Emicida';
  output.find('.form-control').simulate('change', { target: { value } });

  await delay(2000);
  expect(onMockSearchTrackArtists).toHaveBeenCalledWith(value);
});

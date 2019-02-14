import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import searchList from '../__snapshots__/searchList';
import Search from './Search';


test('closing search component.', () => {
  const output = shallow(<Search
    onIsSearching={() => { }}
    isSearching
    searchResult={searchList.data}
    onSearchTracksArtists={() => { }}
  />);
  expect(shallowToJson(output)).toMatchSnapshot();

  output.find('.closeButton').simulate('click');
  expect(output.prop('isSearching')).toBeFalsy();
});


// test('searching something', () => {
//   const output = shallow((
//     <Search
//       onIsSearching={() => { }}
//       isSearching
//       searchResult={searchList.data}
//       onSearchTracksArtists={() => { }}
//     />));
//   expect(shallowToJson(output)).toMatchSnapshot();

//   const onChange = jest.fn();
//   const value = 'Emicida';
//   output.find('.form-control').simulate('change', { target: { value } });

//   expect(onChange).toHaveBeenCalledWith(value);

// });

/* eslint-disable no-undef */
import React from 'react';
// import renderer from 'react-test-renderer';
// import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import NavBar from './navbar';


// test('SideBar snaphot test', () => {
//   const component = renderer.create(
//     <MemoryRouter>
//       <NavBar brandName="Spotify React" />
//     </MemoryRouter>,
//   );
//   const tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });

// test('Search snaphot test', () => {
//   const component = renderer.create(
//     <MemoryRouter>
//       <NavBar brandName="Spotify React" isSearching />
//     </MemoryRouter>,
//   );
//   const tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });

test('Search snaphot test', () => {
  const component = shallow(
    <NavBar
      brandName="Spotify React"
      onShowSideBar={jest.fn()}
      onIsSearching={jest.fn()}
      isSearching
      onSearchTracksArtists={jest.fn()}
      searchResult={{}}
    />,
  );
  expect(shallowToJson(component)).toMatchSnapshot();
  //component.find('.searchArtist').simulate('click');
  expect(component.prop('isSearching')).toBeFalsy();
});


test('shallow navbar', () => {
  const onIsSearching = jest.fn();

  const output = shallow(
    <NavBar
      brandName="Spotify React"
      onShowSideBar={jest.fn()}
      onIsSearching={onIsSearching}
      isSearching
      onSearchTracksArtists={jest.fn()}
      searchResult={{}}
    />,
  );
  expect(shallowToJson(output)).toMatchSnapshot();
  output.find('span').at(1).simulate('click');
  expect(onIsSearching).toBeCalledWith(false);

  expect(output.prop('isSearching')).toBeFalsy();
});

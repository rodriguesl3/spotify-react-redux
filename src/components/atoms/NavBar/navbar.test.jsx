/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './navbar';


test('SideBar snaphot test', () => {
  const component = renderer.create(
    <MemoryRouter>
      <NavBar brandName="Spotify React" />
    </MemoryRouter>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Search snaphot test', () => {
  const component = renderer.create(
    <MemoryRouter>
      <NavBar brandName="Spotify React" isSearching />
    </MemoryRouter>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

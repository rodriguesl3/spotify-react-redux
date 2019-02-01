/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';

test('Login snaphot test', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Login />
    </MemoryRouter>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

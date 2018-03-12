import PageHeader from './page_header';
import React from 'react';
import renderer from 'react-test-renderer';


test('header loads correctly', () => {
  const tree = renderer
    .create(<PageHeader />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

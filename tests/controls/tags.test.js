import React from 'react';
import renderer from 'react-test-renderer';

// Link to component(s)
import ControlsTags from '../../app/js/components/controls/Tags';
import Tag from '../../app/js/components/controls/Tags';

// Describe
test('ControlsTags Renders', () => {
  const component = renderer.create(
    <ControlsTags />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test('Tag Renders', () => {
  const component = renderer.create(
    <Tag />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

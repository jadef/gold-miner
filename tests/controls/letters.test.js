import React from 'react';
import renderer from 'react-test-renderer';

// Link to component(s)
import ControlsLetters from '../../app/js/components/controls/Letters';
import Letter from '../../app/js/components/controls/Letters';

// Describe
test('ControlsLetters Renders', () => {
  const component = renderer.create(
    <ControlsLetters />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test('Letter Renders', () => {
  const component = renderer.create(
    <Letter />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

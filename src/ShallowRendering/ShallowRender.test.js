import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6
import ComponentA from "./ComponentA";
const renderer = new ShallowRenderer();

it('renders correctly', () => {
    const tree = renderer
        .render(<ComponentA />)
    expect(tree).toMatchSnapshot();
});

it('renders correctly other', () => {
    const tree = renderer
        .render(<ComponentA />)
    expect(tree).toMatchSnapshot();
});
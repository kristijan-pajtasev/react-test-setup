import React from 'react';
import renderer from 'react-test-renderer';
import ComponentA from "./ComponentA";

it('renders correctly', () => {
    const tree = renderer
        .create(<ComponentA />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
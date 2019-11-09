import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer';
import App from './app'
import SearchPanel from './search';
import Table from './table';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    // ReactDOM.unmountComponentAtNode(div);
});

it('search renders correctly', () => {
    const search = renderer.create(<SearchPanel  />)
    const tree = search.toJSON();
    expect(tree).toMatchSnapshot();
});

it('table renders correctly', () => {
    const table = renderer
        .create(<Table data={
            [
                {
                "name": "Luke Skywalker",
                "height": "172",
                "mass": "77",
                "hair_color": "blond",
                "skin_color": "fair",
                "eye_color": "blue",
                "birth_year": "19BBY"
                }
            ]
        } />)
    const tree = table.toJSON();
    expect(tree).toMatchSnapshot();
});

it('changes the data in the input when user writes something ', () => {
    const component = renderer.create(<SearchPanel />)
    
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

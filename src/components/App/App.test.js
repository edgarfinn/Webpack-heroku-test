import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import { shallowToJson } from 'enzyme-to-json';

import {App} from './App';

describe('<App />', () => {
  it('renders correctly', () => {

    const wrapper = shallow(<App />)
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  })
})

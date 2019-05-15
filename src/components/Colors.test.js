import React from 'react';
import { shallow } from 'enzyme';
import Colors from './Colors';

describe('Colors component', () => {
  it('renders Colors', () => {
    const colors = [
      { name: 'Red', rgb: { red: 255, green: 0, blue: 0 } },
      { name: 'Blue', rgb: { red: 0, green: 0, blue: 255 } },
      { name: 'Green', rgb: { red: 0, green:255, blue: 0 } }
    ];
    const wrapper = shallow(<Colors colors={colors} />);
    expect(wrapper).toMatchSnapshot();
  });
});

/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';

import Price from '../../client/src/components/Price';

describe('Price Component Render Behavior', () => {
  it('should display a loading with no price', () => {
    const wrapper = shallow(<Price />);
    expect(wrapper.find('div').text()).toBe('Loading...');
  });
  it('should display a span with the price', () => {
    const wrapper = shallow(<Price price={100} />);
    expect(wrapper.find('div').text()).toBe('$100 per night');
  });
});

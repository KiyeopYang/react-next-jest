import React from 'react';
import { shallow } from 'enzyme';
import TextField from './index';

describe('<TextField />', () => {
  it('render <TextField />', () => {
    const wrapper = shallow(
      <TextField
        onChange={() => {}}
        title="title"
        value="hah"
      />
    );
    expect(wrapper.find('.to-do-title').text()).toBe('title');
  });
  it('value change in <TextField />', () => {
    const wrapper = shallow(
      <TextField
        onChange={() => {}}
        title="title"
        value={"hah"}
      />
    );
    expect(wrapper.find('.to-do-input').props().value).toBe('hah');
  });
  it('simulate input <TextField />', () => {
    const toggleChangeSpy = jest.fn();
    const wrapper = shallow(
      <TextField
        onChange={toggleChangeSpy}
        title="title"
        value={"hah"}
      />
    );
    wrapper.find('.to-do-input').simulate('change');
    expect(toggleChangeSpy).toHaveBeenCalled();
  });
});

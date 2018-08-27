import React from 'react';
import { shallow } from 'enzyme';
import TextField2 from './index';

describe('[Stateful] <TextField />', () => {
  it('render <TextField />', () => {
    const wrapper = shallow(
      <TextField2 submit={() => {}} />
    );
    wrapper.find('.to-do-input').simulate('change', {
      target: { value: 'UNIT TESTING' },
    });
    expect(wrapper.state().value).toBe('UNIT TESTING');
  });
  it('[Stateful] Submit <TextField />', () => {
    const submit = jest.fn();
    const wrapper = shallow(
      <TextField2 submit={submit} />
    );
    wrapper.find('.to-do-input').simulate('change', {
      target: { value: 'test' },
    });
    wrapper.find('.to-do').simulate('submit', { preventDefault() {} });
    expect(submit).toHaveBeenCalledWith('test');
  });
  it('[Stateful] PreventDefault <TextField />', () => {
    const preventDefault = jest.fn();
    const wrapper = shallow(
      <TextField2 submit={() => {}} />
    );
    wrapper.find('.to-do').simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalled();
  });
  it('[Stateful] Reset Value <TextField />', () => {
    const wrapper = shallow(
      <TextField2 submit={() => {}} />
    );
    wrapper.find('.to-do').simulate('submit', { preventDefault() {} });
    expect(wrapper.state().value).toBe('');
  });
});

import React from 'react'
import { shallow } from 'enzyme'
import CheckboxGroup from '../checkbox-group'

describe('uikit/checkbox-group', () => {
  it('should renders correctly', () => {
    const options = [
      { value: 'val1', label: 'Value1' },
      { value: 'val2', label: 'Value2' }
    ]
    const wrapper = shallow(
      <CheckboxGroup
        disabled
        options={options}
        value={['val1', 'val2']}
        onChange={() => {}}
      />
    )

    wrapper
      .find('Checkbox')
      .at(0)
      .prop('onChange')({ target: { value: 'val1' } })

    expect(wrapper).toMatchSnapshot()

    wrapper.setProps({ value: [] })

    wrapper
      .find('Checkbox')
      .at(0)
      .prop('onChange')({ target: { value: 'val1' } })
  })
})

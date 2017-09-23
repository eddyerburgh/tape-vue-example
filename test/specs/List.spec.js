import test from 'tape'
import { shallow } from 'vue-test-utils'
import List from '../../src/components/List'

test('List.vue renders a <li> for each item in props.items', t => {
  t.plan(1)
  const items = ['', '']
  const wrapper = shallow(List, {
    propsData: { items }
  })
  const msg = 'li length matches items.length'
  t.equal(wrapper.findAll('li').length, items.length, msg)
})

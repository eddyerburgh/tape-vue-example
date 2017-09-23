import test from 'tape'
import { shallow } from 'vue-test-utils'
import MessageToggle from '../../src/components/MessageToggle'

test('MessageToggle.vue renders default message', t => {
  t.plan(1)
  const wrapper = shallow(MessageToggle)
  t.equal(wrapper.find('p').text(), 'default message', 'has a default message')
})

test('MessageToggle.vue renders default message', t => {
  t.plan(2)
  const wrapper = shallow(MessageToggle)
  const button = wrapper.find('#toggle-message')
  const p = wrapper.find('p')
  button.trigger('click')
  t.equal(p.text(), 'message', 'toggles <p> text to "message"')
  button.trigger('click')
  t.equal(p.text(), 'toggled message', 'toggles <p> text to "toggled message"')
})

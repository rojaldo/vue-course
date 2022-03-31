import { shallowMount } from '@vue/test-utils'
import CalculatorComponent from '@/components/calculator/CalculatorComponent.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(CalculatorComponent, {
      propsData: { msg }
    })
    // expect(wrapper.text()).toMatch(msg)
    console.log(wrapper.text());
    console.log(wrapper.html());
    console.log(wrapper.element);
    
    
    // expect(wrapper.attributes).toBe('calculator')
  })
})

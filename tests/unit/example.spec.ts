import { shallowMount } from '@vue/test-utils'
import CalculatorComponent from '@/components/calculator/CalculatorComponent.vue'
import { CalculatorState } from '@/models/Calculator'

describe('Sample CalculatorComponent test', () => {
  test('Test 3+4', () => {
    const wrapper = shallowMount(CalculatorComponent, {
      propsData: { calculatorData: { result: 3, operator: '-', firstNumber: 4, secondNumber: 1, currentState:CalculatorState.RESULT , display: '4-1=3' } }
    })
    expect(wrapper.text()).toContain('')
        
  })
})

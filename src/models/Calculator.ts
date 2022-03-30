export enum CalculatorState {
    INIT,
    FIRSTFIGURE,
    SECONDFIGURE,
    RESULT,
  }

export class Calculator {
    result = 0;
    operator = "";
    firstNumber = 0;
    secondNumber = 0;
    currentState = CalculatorState.INIT;
    display = '';

    constructor() {
    }

    handleNumber(value: number): string {
        switch (this.currentState) {
          case CalculatorState.INIT:
            this.firstNumber = value;
            this.currentState = CalculatorState.FIRSTFIGURE;
            this.display += value;
            break;
          case CalculatorState.FIRSTFIGURE:
            this.firstNumber = this.firstNumber * 10 + value;
            this.display += value;
            break;
          case CalculatorState.SECONDFIGURE:
            this.secondNumber = this.secondNumber * 10 + value;
            this.display += value;
            break;
          case CalculatorState.RESULT:
            this.firstNumber = value;
            this.secondNumber = 0;
            this.operator = '';
            this.result = 0;
            this.currentState = CalculatorState.FIRSTFIGURE;
            this.display = value.toString();
            break;
          default:
            break;
        }
        return this.display;
      }

      calculate(): number {
        switch (this.operator) {
          case "+":
            return this.firstNumber + this.secondNumber;
          case "-":
            return this.firstNumber - this.secondNumber;
          case "*":
            return this.firstNumber * this.secondNumber;
          case "/":
            return this.firstNumber / this.secondNumber;
          default:
            return 0;
        }
      }

      handleSymbol(value: string): string {
        switch (this.currentState) {
          case CalculatorState.INIT:
            break;
          case CalculatorState.FIRSTFIGURE:
            if(value === '+' || value === '-' || value === '*' || value === '/') {
              this.operator = value;
              this.currentState = CalculatorState.SECONDFIGURE;
              this.display += value;
            } 
            break;
          case CalculatorState.SECONDFIGURE:
            if(value === '=') {
              this.result = this.calculate();
              this.currentState = CalculatorState.RESULT;
              this.display += value + this.result;
            }
            break;
          case CalculatorState.RESULT:
            if(value === '+' || value === '-' || value === '*' || value === '/') {
              this.firstNumber = this.result;
              this.secondNumber = 0;
              this.operator = value;
              this.result = 0;
              this.currentState = CalculatorState.SECONDFIGURE;
              this.display = this.firstNumber + value;
            }
            break;
          default:
            break;
        }
        return this.display;
      }

      setData(data: any): void {
        this.display = data.display;
        this.firstNumber = data.firstNumber;
        this.secondNumber = data.secondNumber;
        this.operator = data.operator;
        this.result = data.result;
        this.currentState = data.currentState;
      }

      getData(): any {
        return {
          display: this.display,
          firstNumber: this.firstNumber,
          secondNumber: this.secondNumber,
          operator: this.operator,
          result: this.result,
          currentState: this.currentState
        }
      }
}
enum State {
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
    currentState = State.INIT;
    display = '';

    constructor() {
    }

    handleNumber(value: number): string {
        switch (this.currentState) {
          case State.INIT:
            this.firstNumber = value;
            this.currentState = State.FIRSTFIGURE;
            this.display += value;
            break;
          case State.FIRSTFIGURE:
            this.firstNumber = this.firstNumber * 10 + value;
            this.display += value;
            break;
          case State.SECONDFIGURE:
            this.secondNumber = this.secondNumber * 10 + value;
            this.display += value;
            break;
          case State.RESULT:
            this.firstNumber = value;
            this.secondNumber = 0;
            this.operator = '';
            this.result = 0;
            this.currentState = State.FIRSTFIGURE;
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
          case State.INIT:
            break;
          case State.FIRSTFIGURE:
            if(value === '+' || value === '-' || value === '*' || value === '/') {
              this.operator = value;
              this.currentState = State.SECONDFIGURE;
              this.display += value;
            } 
            break;
          case State.SECONDFIGURE:
            if(value === '=') {
              this.result = this.calculate();
              this.currentState = State.RESULT;
              this.display += value + this.result;
            }
            break;
          case State.RESULT:
            if(value === '+' || value === '-' || value === '*' || value === '/') {
              this.firstNumber = this.result;
              this.secondNumber = 0;
              this.operator = value;
              this.result = 0;
              this.currentState = State.SECONDFIGURE;
              this.display = this.firstNumber + value;
            }
            break;
          default:
            break;
        }
        return this.display;
      }
}
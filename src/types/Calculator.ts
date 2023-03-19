export enum CalculatorButtonType {
  NUMBER = "number",
  OPERATOR = "operator",
  TOGGLE_SIGN = "toggle_sign",
  RESET = "reset",
  CALCULATE = "calculate",
}

export interface CalculatorButtonAttribute {
  label: string;
  value: string | number;
  type: CalculatorButtonType;
  isRounded: boolean;
}

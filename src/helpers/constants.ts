import { CalculatorButtonAttribute, CalculatorButtonType } from "types/Calculator";

export const CALCULATOR_BUTTONS: CalculatorButtonAttribute[] = [
  {
    label: "AC",
    value: "AC",
    type: CalculatorButtonType.RESET,
    isRounded: false,
  },
  {
    label: "+/-",
    value: "+/-",
    type: CalculatorButtonType.TOGGLE_SIGN,
    isRounded: false,
  },
  {
    label: "%",
    value: "%",
    type: CalculatorButtonType.OPERATOR,
    isRounded: false,
  },
  {
    label: "/",
    value: "/",
    type: CalculatorButtonType.OPERATOR,
    isRounded: true,
  },
  {
    label: "7",
    value: 7,
    type: CalculatorButtonType.NUMBER,
    isRounded: false,
  },
  {
    label: "8",
    value: 8,
    type: CalculatorButtonType.NUMBER,
    isRounded: false,
  },
  {
    label: "9",
    value: 9,
    type: CalculatorButtonType.NUMBER,
    isRounded: false,
  },
  {
    label: "x",
    value: "*",
    type: CalculatorButtonType.OPERATOR,
    isRounded: true,
  },
  {
    label: "4",
    value: 4,
    type: CalculatorButtonType.NUMBER,
    isRounded: false,
  },
  {
    label: "5",
    value: 5,
    type: CalculatorButtonType.NUMBER,
    isRounded: false,
  },
  {
    label: "6",
    value: 6,
    type: CalculatorButtonType.NUMBER,
    isRounded: false,
  },
  {
    label: "-",
    value: "-",
    type: CalculatorButtonType.OPERATOR,
    isRounded: true,
  },
  {
    label: "1",
    value: 1,
    type: CalculatorButtonType.NUMBER,
    isRounded: false,
  },
  {
    label: "2",
    value: 2,
    type: CalculatorButtonType.NUMBER,
    isRounded: false,
  },
  {
    label: "3",
    value: 3,
    type: CalculatorButtonType.NUMBER,
    isRounded: false,
  },
  {
    label: "+",
    value: "+",
    type: CalculatorButtonType.OPERATOR,
    isRounded: true,
  },
  {
    label: "0",
    value: 0,
    type: CalculatorButtonType.NUMBER,
    isRounded: false,
  },
  {
    label: ".",
    value: ".",
    type: CalculatorButtonType.OPERATOR,
    isRounded: false,
  },
  {
    label: "=",
    value: "=",
    type: CalculatorButtonType.CALCULATE,
    isRounded: true,
  },
];

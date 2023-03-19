import { findLast } from "lodash-es";
import { computed, ref } from "vue";
import { CalculatorButtonAttribute, CalculatorButtonType } from "types/Calculator";

type FormulaLastDigit = Pick<CalculatorButtonAttribute, "type"> & {
  value: number;
};

type FormulaLastOperator = Pick<CalculatorButtonAttribute, "type"> & {
  value: string;
};

export default function useCalculator() {
  const calculatedResult = ref(0);
  const formulaData = ref<Pick<CalculatorButtonAttribute, "type" | "value">[]>([]);

  const displayValue = computed(() => {
    const result = parseFloat(calculatedResult.value.toFixed(8));
    const resultString = result.toString();

    return resultString.length > 12 ? result.toExponential(4) : resultString;
  });

  const formula = computed(() =>
    formulaData.value.reduce(
      (accumulate, { type, value }) =>
        (accumulate +=
          type === CalculatorButtonType.NUMBER || value === "." ? value : ` ${value} `),
      "",
    ),
  );

  const lastDigit = computed(
    () =>
      findLast(formulaData.value, ({ type }) => type === CalculatorButtonType.NUMBER) as
        | FormulaLastDigit
        | undefined,
  );

  const lastOperator = computed(
    () =>
      findLast(formulaData.value, ({ type }) => type === CalculatorButtonType.OPERATOR) as
        | FormulaLastOperator
        | undefined,
  );

  const lastFormulaData = computed(() => findLast(formulaData.value));

  const handleKeyboardInput = (event: KeyboardEvent) => {
    const key = event.key;

    if (/\d/.test(key)) {
      handleAppendFormula({ type: CalculatorButtonType.NUMBER, value: parseInt(key) });

      return;
    }

    if ([".", "+", "-", "*", "/", "%", "+/-"].includes(key)) {
      handleAppendFormula({ type: CalculatorButtonType.OPERATOR, value: key });

      return;
    }

    if (key === "=" || key === "Enter") {
      handleCalculate();

      return;
    }

    if (key === "Escape") {
      handleReset();

      return;
    }
  };

  const handleAppendFormula = ({
    type,
    value,
  }: Pick<CalculatorButtonAttribute, "type" | "value">) => {
    if (type === CalculatorButtonType.CALCULATE) {
      return;
    }

    // if the first operand is operator => add 0 as first operand
    if (!formula.value.length && type !== CalculatorButtonType.NUMBER) {
      formulaData.value.push({ type: CalculatorButtonType.NUMBER, value: 0 });
    }

    // case 1 + 02 => remove the 0 preceed
    if (
      type === CalculatorButtonType.NUMBER &&
      lastFormulaData.value?.value === 0 &&
      lastOperator.value?.value !== "."
    ) {
      formulaData.value.splice(-1);
    }

    if (type === CalculatorButtonType.TOGGLE_SIGN) {
      // store last digit to identify if it is number or operator
      // case number: splice the last digit to replace it with negative one
      // case operator: push the stored last digit with negative sign
      const currentLastDigit = lastDigit.value?.value || 0;

      if (lastFormulaData.value?.type === CalculatorButtonType.NUMBER) {
        formulaData.value.splice(-1);
      }

      formulaData.value.push({ type: CalculatorButtonType.NUMBER, value: -1 * currentLastDigit });

      return;
    }

    formulaData.value.push({ type, value });
  };

  const handleReset = () => {
    calculatedResult.value = 0;
    formulaData.value = [];
  };

  function handleCalculate() {
    if (!formula.value.length) {
      return;
    }

    // if the last operand is an operator
    // if the operator is "." add 0
    // otherwise add the last digit value to the formula data
    if (lastFormulaData.value?.type === CalculatorButtonType.OPERATOR) {
      if (lastFormulaData.value.value === ".") {
        formulaData.value.push({
          type: CalculatorButtonType.NUMBER,
          value: 0,
        });
      } else {
        formulaData.value.push({
          type: CalculatorButtonType.NUMBER,
          value: lastDigit.value?.value || 0,
        });
      }
    }

    // calculate the display value by formula
    calculatedResult.value = eval(formula.value);
  }

  return {
    formulaData,
    displayValue,
    calculatedResult,
    formula,
    handleAppendFormula,
    handleCalculate,
    handleKeyboardInput,
    handleReset,
  };
}

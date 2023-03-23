import { mount } from "@vue/test-utils";
import CalculatorView from "@/components/CalculatorView.vue";


describe("Calculator", () => {
  let wrapper;
  let result;
  let formula;

  beforeEach(() => {
    wrapper = mount(CalculatorView);
    result = wrapper.get('[data-testid="calculator-result"]');
    formula = wrapper.get('[data-testid="calculator-formula"]');
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('should display "0" on startup', () => {
    expect(result.text()).toBe("0");
  });

  test("should able to add digits to the formula", async () => {
    await wrapper.get('[data-testid="calculator-button-1"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-2"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-3"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-4"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-5"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-6"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-7"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-8"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-9"]').trigger("click");

    expect(formula.text()).toBe("123456789");
  });

  test("should able to add decimal point to the formula", async () => {
    await wrapper.get('[data-testid="calculator-button-1"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-."]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-5"]').trigger("click");

    expect(formula.text()).toBe("1.5");
  });

  test("should able toggle the sign of the display", async () => {
    await wrapper.get('[data-testid="calculator-button-1"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-+/-"]').trigger("click");

    expect(formula.text()).toBe("-1");

    await wrapper.get('[data-testid="calculator-button-+/-"]').trigger("click");

    expect(formula.text()).toBe("1");
  });

  test("should able to reset the calculator", async () => {
    await wrapper.get('[data-testid="calculator-button-1"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-2"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-3"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-AC"]').trigger("click");

    expect(result.text()).toBe("0");
    expect(formula.text()).toBe("");
  });

  test("should able to perform addition", async () => {
    await wrapper.get('[data-testid="calculator-button-1"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-+"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-2"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-="]').trigger("click");

    expect(result.text()).toBe("3");
  });

  test("should able to perform subtraction", async () => {
    await wrapper.get('[data-testid="calculator-button-5"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button--"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-2"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-="]').trigger("click");

    expect(result.text()).toBe("3");
  });

  test("should able to perform multiplication", async () => {
    await wrapper.get('[data-testid="calculator-button-3"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-x"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-2"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-="]').trigger("click");

    expect(result.text()).toBe("6");
  });

  test("should able to perform division", async () => {
    await wrapper.get('[data-testid="calculator-button-9"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-/"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-3"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-="]').trigger("click");

    expect(result.text()).toBe("3");
  });

  test("should able to perform division by zero", async () => {
    await wrapper.get('[data-testid="calculator-button-5"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-/"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-0"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-="]').trigger("click");

    expect(result.text()).toBe("Infinity");
  });

  test("should able to handle consecutive operations", async () => {
    await wrapper.get('[data-testid="calculator-button-5"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-+"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-2"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-x"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-3"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button--"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-4"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-="]').trigger("click");

    expect(result.text()).toBe("7");
  });

  test("should able to display exponential result", async () => {
    await wrapper.get('[data-testid="calculator-button-9"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-9"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-9"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-9"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-9"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-9"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-9"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-x"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-8"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-8"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-8"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-8"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-8"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-8"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-8"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-="]').trigger("click");

    expect(result.text()).toBe("8.8889e+13");
  });

  test("should able toggle the sign of multiple digits number", async () => {
    await wrapper.get('[data-testid="calculator-button-1"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-2"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-3"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-+/-"]').trigger("click");
    expect(formula.text()).toBe("-123");

    await wrapper.get('[data-testid="calculator-button-+/-"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-+"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-1"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-2"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-3"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-+/-"]').trigger("click");

    expect(formula.text()).toBe("123 + -123");

    await wrapper.get('[data-testid="calculator-button-+/-"]').trigger("click");

    expect(formula.text()).toBe("123 + 123");
  });

  test("should able toggle the sign of decimal digits number", async () => {
    await wrapper.get('[data-testid="calculator-button-."]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-3"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-3"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-+/-"]').trigger("click");
    expect(formula.text()).toBe("-0.33");

    await wrapper.get('[data-testid="calculator-button-AC"]').trigger("click");

    await wrapper.get('[data-testid="calculator-button-1"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-."]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-5"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-+"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-."]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-5"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-5"]').trigger("click");
    await wrapper.get('[data-testid="calculator-button-+/-"]').trigger("click");
    expect(formula.text()).toBe("1.5 + -0.55");
  });
});

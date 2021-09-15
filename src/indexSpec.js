import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";

describe("Calculator test", () => {
  it("should return the correct sum value", () => {
    const { getByTestId } = render(<App />);

    const btn5 = getByName("5");
    const btnSum = get("+");
    const btn2 = getByTestId("2");
    const btnEql = getByTestId("=");
    const result = getByTestId("result");
    fireEvent.click(btn5);
    fireEvent.click(btnSum);
    fireEvent.click(btn2);
    fireEvent.click(btnEql);
    expect(result.value).toBe("7");
  });
   
  it("should return the correct subtract value", () => {
    const { getByTestId } = render(<App />);

    const btn5 = getByTestId("5");
    const btnSub = getByTestId("--");
    const btn2 = getByTestId("2");
    const btnEql = getByTestId("=");
    const result = getByTestId("result");
    fireEvent.click(btn5);
    fireEvent.click(btnSub);
    fireEvent.click(btn2);
    fireEvent.click(btnEql);
    expect(result.value).toBe("3");
  });

  it("should return the correct multiplication value", () => {
    const { getByTestId } = render(<App />);

    const btn5 = getByTestId("5");
    const btnMul = getByTestId("*");
    const btn2 = getByTestId("2");
    const btnEql = getByTestId("=");
    const result = getByTestId("result");
    fireEvent.click(btn5);
    fireEvent.click(btnMul);
    fireEvent.click(btn2);
    fireEvent.click(btnEql);
    expect(result.value).toBe("10");
  });

  it("should return correct division ", () => {
    const { getByTestId } = render(<App />);

    const btn5 = getByTestId("5");
    const btnDiv = getByTestId("/");
    const btn2 = getByTestId("2");
    const btnEql = getByTestId("=");
    const result = getByTestId("result");
    fireEvent.click(btn7);
    fireEvent.click(btnDiv);
    fireEvent.click(btn2);
    fireEvent.click(btnEql);
    expect(result.value).toBe("2.5");
  })
});
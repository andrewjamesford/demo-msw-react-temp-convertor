import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

test("renders button", () => {
  render(<App />);
  const btnElement = screen.getByText(/Get Temp in Fahrenheit from API/i);
  expect(btnElement).toBeInTheDocument();
});

test("gets expected temp getTempInFahrenheit", async () => {
  render(<App />);
  const btnElement = screen.getByText(/Get Temp in Fahrenheit from API/i);

  fireEvent.click(btnElement);

  expect(await screen.findByText(/Fahrenheit is 210/i)).toBeInTheDocument()
});

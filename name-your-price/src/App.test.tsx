import { fireEvent, render, screen } from "@testing-library/react";
import { Slider, Switch } from "../src/components/platform";
import { useSlider, useSwitch } from "./hooks";
import userEvent from "@testing-library/user-event";

const pageViewMarkers = [
  {
    value: 0,
    scaledValue: 10000,
    label: "10K",
    price: 8,
  },
  {
    value: 25,
    scaledValue: 50000,
    label: "50K",
    price: 12,
  },
  {
    value: 50,
    scaledValue: 100000,
    label: "100K",
    price: 16,
  },
  {
    value: 75,
    scaledValue: 500000,
    label: "500K",
    price: 24,
  },
  {
    value: 100,
    scaledValue: 1000000,
    label: "1M",
    price: 36,
  },
];

function UseSliderHook() {
  const [scale, scaledValue, value, onChange] = useSlider(pageViewMarkers);
  return (
    <>
      <div>Current label: {scaledValue.label}</div>
      <div>Current price: ${scaledValue.price}.00</div>
      <Slider scale={scale} value={value} onChange={onChange} />
    </>
  );
}

function UseSwitchHook() {
  const [isMonthlyBilling, setIsMonthlyBilling] = useSwitch();
  const [scale, scaledValue, value, onChange] = useSlider(pageViewMarkers);

  const price = isMonthlyBilling ? scaledValue.price * 0.75 : scaledValue.price;

  return (
    <>
      <div>Current label: {scaledValue.label}</div>
      <div>Current price: ${price}.00</div>
      <Slider scale={scale} value={value} onChange={onChange} />
      <Switch checked={isMonthlyBilling} setChecked={setIsMonthlyBilling} />
    </>
  );
}

test("the slider exists and slides until the maximum range and the price and viewmark gets updated", () => {
  const { container } = render(<UseSliderHook />);
  const slider = screen.getByRole("slider");

  expect(container).toBeInTheDocument();

  const label = screen.getByText(/current label/i);
  const price = screen.getByText(/current price/i);
  expect(label).toHaveTextContent("Current label: 10K");
  expect(price).toHaveTextContent("Current price: $8.00");

  fireEvent.change(slider, { target: { value: 100 } });

  expect(slider).toHaveValue("100");
  expect(label).toHaveTextContent("Current label: 1M");
  expect(price).toHaveTextContent("Current price: $36.00");
});

test("a 25% discount is applied when the switch is checked", () => {
  const { container } = render(<UseSwitchHook />);
  const slider = screen.getByRole("slider");
  const toggle = screen.getByRole("checkbox");

  expect(container).toBeInTheDocument();

  const label = screen.getByText(/current label/i);
  const price = screen.getByText(/current price/i);

  userEvent.click(toggle);
  expect(toggle).toBeChecked();
  expect(label).toHaveTextContent("Current label: 10K");
  expect(price).toHaveTextContent("Current price: $6.00");

  fireEvent.change(slider, { target: { value: 100 } });

  expect(label).toHaveTextContent("Current label: 1M");
  expect(price).toHaveTextContent("Current price: $27.00");

  userEvent.click(toggle);
  expect(toggle).not.toBeChecked();

  expect(label).toHaveTextContent("Current label: 1M");
  expect(price).toHaveTextContent("Current price: $36.00");
});

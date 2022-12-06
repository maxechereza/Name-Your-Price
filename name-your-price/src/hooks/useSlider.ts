import { useCallback, useState } from "react";
import { ensure } from "../utilities";

export interface PageViewMark {
  value: number;
  scaledValue: number;
  label: string;
  price: number;
}

export function useSlider(
  sliderMarkers: Array<PageViewMark> | [],
  scaleProportion: number = 25
): [
  (value: number) => number,
  PageViewMark,
  number,
  (event: Event, newValue: number | number[]) => void
] {
  const [value, setValue] = useState<number>(0);

  function scale(value: number) {
    const previousMarkIndex = Math.floor(value / scaleProportion);
    const previousMark = sliderMarkers[previousMarkIndex];
    const remainder = value % scaleProportion;

    if (remainder === 0) {
      return previousMark.scaledValue;
    }

    return sliderMarkers[previousMarkIndex + 1].scaledValue;
  }

  const scaledResponse = scale(value);
  const scaledValue = ensure(
    sliderMarkers.find((x) => x.scaledValue === scaledResponse)
  );

  const onChange = useCallback(
    (event: Event, newValue: number | number[]): void => {
      console.log(newValue);

      if (typeof newValue === "number") {
        setValue(newValue);
      }
    },
    []
  );

  return [scale, scaledValue, value, onChange];
}

export default useSlider;

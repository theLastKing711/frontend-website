import { useState } from "react";
import {
  MainContainer,
  ActionButton,
  SpinButton,
} from "./CustomInputNumbert.styles";

const minValue = 1;
const maxValue = 100;

interface Props {
  inputValue: number;
  label: string;
  handleIncrement: () => void;
  handleDecrement: () => void;
  handleResetValueSet: () => void;
  handleMaxValueSet: () => void;
}

const CustomInputNumber = ({
  inputValue,
  label,
  handleDecrement,
  handleIncrement,
  handleMaxValueSet,
  handleResetValueSet,
}: Props) => {
  const [value, setValue] = useState(inputValue);

  const isValueAtMax = () => {
    return value === maxValue;
  };

  const isValueAtMin = () => {
    return value === minValue;
  };

  const incrementValue = () => {
    if (!isValueAtMax()) {
      setValue((prev) => prev + 1);
    }
  };

  const decrementValue = () => {
    if (!isValueAtMin()) {
      setValue((prev) => prev - 1);
    }
  };

  const handleSpinButtonKeyPressed = (
    e: React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (e.key !== "Tab") {
      e.preventDefault();
    }
    switch (e.key) {
      case "ArrowUp": {
        handleIncrement();
        break;
      }
      case "ArrowDown": {
        handleDecrement();
        break;
      }
      case "Home": {
        setValue(1);
        break;
      }
      case "End": {
        setValue(100);
        break;
      }
      default:
        return;
    }
  };

  return (
    <MainContainer>
      <ActionButton
        onClick={handleDecrement}
        tabIndex={-1}
        aria-label="decrease value"
      >
        -
      </ActionButton>
      <SpinButton
        role="spinbutton"
        tabIndex={0}
        aria-valuemin={0}
        aria-aria-valuemax={100}
        aria-valuenow={value}
        aria-label={label}
        onKeyDown={handleSpinButtonKeyPressed}
      >
        {value}
      </SpinButton>
      <ActionButton
        onClick={handleIncrement}
        tabIndex={-1}
        aria-label="increase value"
      >
        +
      </ActionButton>
    </MainContainer>
  );
};

export default CustomInputNumber;

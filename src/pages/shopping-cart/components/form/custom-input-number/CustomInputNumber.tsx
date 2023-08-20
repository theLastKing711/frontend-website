import {
  MainContainer,
  ActionButton,
  SpinButton,
} from "./CustomInputNumbert.styles";

interface Props {
  inputValue: number;
  minValue: number;
  maxValue: number;
  label: string;
  handleIncrement: () => void;
  handleDecrement: () => void;
  handleResetValueSet: (minValue: number) => void;
  handleMaxValueSet: (maxValue: number) => void;
}

const CustomInputNumber = ({
  inputValue,
  minValue,
  maxValue,
  label,
  handleDecrement,
  handleIncrement,
  handleMaxValueSet,
  handleResetValueSet,
}: Props) => {
  const isToBeGreaterThanMax = () => {
    return inputValue + 1 > maxValue;
  };

  const isToBeLessThanMin = () => {
    return inputValue - 1 < minValue;
  };

  const handleSpinButtonKeyPressed = (
    e: React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (e.key !== "Tab") {
      e.preventDefault();
    }
    switch (e.key) {
      case "ArrowUp": {
        if (isToBeGreaterThanMax()) {
          break;
        }

        handleIncrement();
        break;
      }
      case "ArrowDown": {
        if (isToBeLessThanMin()) {
          break;
        }

        handleDecrement();
        break;
      }
      case "Home": {
        handleResetValueSet(minValue);
        break;
      }
      case "End": {
        handleMaxValueSet(maxValue);
        break;
      }
      default:
        return;
    }
  };

  return (
    <MainContainer>
      <ActionButton
        onClick={() => {
          if (isToBeLessThanMin()) {
            return;
          }
          handleDecrement();
        }}
        tabIndex={-1}
        aria-label="decrease value"
      >
        -
      </ActionButton>
      <SpinButton
        role="spinbutton"
        tabIndex={0}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={inputValue}
        aria-label={label}
        onKeyDown={handleSpinButtonKeyPressed}
      >
        {inputValue}
      </SpinButton>
      <ActionButton
        onClick={() => {
          if (isToBeGreaterThanMax()) {
            return;
          }
          handleIncrement();
        }}
        tabIndex={-1}
        aria-label="increase value"
      >
        +
      </ActionButton>
    </MainContainer>
  );
};

export default CustomInputNumber;

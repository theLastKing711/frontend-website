import { InputBaseProps, InputProps } from "@mui/material";
import { StyledErrorText, StyledFilterInput } from "./PriceFilterInput.styles";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  placeholder: string;
}

const PriceFilterInput = ({ ...inputProps }: InputBaseProps) => {
  console.log("error", inputProps.error);

  return (
    <>
      <StyledFilterInput
        {...inputProps}
        endAdornment={<SearchIcon sx={{ fill: "#BCBDDB" }} />}
      />
      {inputProps.error && (
        <StyledErrorText>
          Text should be of shape like $150.00 - $504.00 or $150 +
        </StyledErrorText>
      )}
    </>
  );
};

export default PriceFilterInput;

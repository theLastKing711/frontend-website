import { InputProps } from "@mui/material";
import { StyledFilterInput } from "./PriceFilterInput.styles";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  placeholder: string;
}

const PriceFilterInput = ({
  placeholder,
  value,
  onChange,
}: Props & InputProps) => {
  return (
    <StyledFilterInput
      inputProps={{
        placeholder,
      }}
      value={value}
      onChange={onChange}
      endAdornment={<SearchIcon sx={{ fill: "#BCBDDB" }} />}
    />
  );
};

export default PriceFilterInput;

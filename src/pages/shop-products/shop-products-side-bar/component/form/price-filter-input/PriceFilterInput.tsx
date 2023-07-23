import { StyledFilterInput } from "./PriceFilterInput.styles";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  placeholder: string;
}

const PriceFilterInput = ({ placeholder }: Props) => {
  return (
    <StyledFilterInput
      inputProps={{
        placeholder,
      }}
      endAdornment={<SearchIcon sx={{ fill: "#BCBDDB" }} />}
    />
  );
};

export default PriceFilterInput;

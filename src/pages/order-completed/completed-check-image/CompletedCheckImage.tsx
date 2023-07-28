import {
  StyledCheckedCircleImg,
  StyledCheckedCorrectSignImg,
  StyledCheckedOuterBackground,
} from "./CompletedCheckImage.styles";
import CheckedCorrectSignImage from "../../../assets/checked-correct-sign.png";
import CheckedCircleImage from "../../../assets/checked-circle.png";

const CompletedCheckImage = () => {
  return (
    <StyledCheckedOuterBackground>
      <StyledCheckedCircleImg src={CheckedCircleImage} />
      <StyledCheckedCorrectSignImg src={CheckedCorrectSignImage} />
    </StyledCheckedOuterBackground>
  );
};

export default CompletedCheckImage;

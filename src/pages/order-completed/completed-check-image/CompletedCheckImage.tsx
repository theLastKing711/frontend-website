import {
  StyledCheckedCircleBackground,
  StyledCheckedCorrectSignBackground,
  StyledCheckedOuterBackground,
} from "./CompletedCheckImage.styles";

const CompletedCheckImage = () => {
  return (
    <div>
      <StyledCheckedOuterBackground>
        <StyledCheckedCircleBackground>
          <StyledCheckedCorrectSignBackground />
        </StyledCheckedCircleBackground>
      </StyledCheckedOuterBackground>
    </div>
  );
};

export default CompletedCheckImage;

import {
  StyledClockContainer,
  StyledClockImage,
  StyledClockVerticalLine,
  StyledContainer,
  StyledContentContainer,
  StyledListImage,
  StyledListImageContainer,
  StyledListImageHorizantalLine,
  StyledListImageRowContainer,
} from "./TaskTimeDrawing.styles";
import ClockImage from "../../../assets/clock.png";
import ListImage from "../../../assets/checklist.png";

const TaskTimeDrawing = () => {
  return (
    <StyledContainer>
      <StyledContentContainer>
        <StyledClockContainer>
          <StyledClockImage src={ClockImage} />
          <StyledClockVerticalLine />
        </StyledClockContainer>
        <StyledListImageContainer>
          <StyledListImageRowContainer>
            <StyledListImageHorizantalLine />
            <StyledListImage src={ListImage} />
          </StyledListImageRowContainer>
        </StyledListImageContainer>
      </StyledContentContainer>
    </StyledContainer>
  );
};

export default TaskTimeDrawing;

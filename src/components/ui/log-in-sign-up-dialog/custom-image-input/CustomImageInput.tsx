import { ButtonProps } from "@mui/material";
import {
  ImageInputContainer,
  StyledButtonOverlay,
  StyledImageInput,
} from "./CustomImageInput.styles";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { ChangeEventHandler, useRef } from "react";
import LoadingIcon from "./loading-icon/LoadingIcon";
import WebStoriesIcon from "@mui/icons-material/WebStories";

interface Props {
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
  buttonProps?: ButtonProps;
  rootProps?: Record<string, string>;
  isLoading?: boolean;
}

const CustomImageInput = ({
  handleInputChange,
  buttonProps,
  rootProps,
  isLoading = false,
}: Props) => {
  const uploadButtonRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    handleInputChange(e);
  };

  const buttonIcon = isLoading ? <LoadingIcon /> : <WebStoriesIcon />;

  console.log("is loading", isLoading);

  return (
    <ImageInputContainer {...rootProps}>
      <StyledImageInput
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        disabled={isLoading}
        isLoading={isLoading}
      />
      <StyledButtonOverlay
        ref={uploadButtonRef}
        role="presentation"
        tabIndex={-1}
        variant="contained"
        startIcon={buttonIcon}
        onClick={handleButtonClick}
        disabled={isLoading}
        {...buttonProps}
      >
        Upload
      </StyledButtonOverlay>
    </ImageInputContainer>
  );
};

export default CustomImageInput;

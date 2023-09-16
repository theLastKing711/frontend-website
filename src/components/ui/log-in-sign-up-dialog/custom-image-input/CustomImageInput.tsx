import { ButtonProps, CircularProgress } from "@mui/material";
import {
  ImageInputContainer,
  StyledButtonOverlay,
  StyledImageInput,
} from "./CustomImageInput.styles";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { ChangeEventHandler, useRef } from "react";
import TailSpin from "react-loading-icons/dist/esm/components/tail-spin";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
  buttonProps?: ButtonProps;
  rootProps?: Record<string, string>;
  isLoading?: boolean;
}

const FramerFileUploadIcon = motion(FileUploadIcon);

const FramerCircularProgress = motion(CircularProgress);

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

  const buttonIcon = isLoading ? (
    <FramerCircularProgress
      size={20}
      initial={{
        opacity: 0,
        transform: "scale(0)",
      }}
      animate={{
        opacity: 1,
        transform: "scale(1)",
      }}
      transition={{
        duration: 0.25,
        delay: 0.25,
      }}
    />
  ) : (
    <FramerFileUploadIcon
      key={2}
      initial={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.25,
      }}
    />
  );
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
        startIcon={<AnimatePresence>{buttonIcon}</AnimatePresence>}
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

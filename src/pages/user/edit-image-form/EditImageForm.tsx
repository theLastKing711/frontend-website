import {
  StyeldImageInputContainer,
  StyledProfilePictureImage,
  StyledProfilePictureImageContainer,
} from "./EditImageForm.tsx.styles";
import CustomImageInput from "../../../components/ui/log-in-sign-up-dialog/custom-image-input/CustomImageInput";

interface Props {
  imagePath: string;
  handleInputChange: (e: File) => void;
  isLoading?: boolean;
}

const EditImageForm = ({
  imagePath,
  handleInputChange,
  isLoading = false,
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleInputChange(e.target.files[0]);
    }
  };

  return (
    <>
      <StyledProfilePictureImageContainer>
        <StyledProfilePictureImage src={imagePath} />
      </StyledProfilePictureImageContainer>
      <StyeldImageInputContainer>
        <CustomImageInput
          handleInputChange={handleChange}
          isLoading={isLoading}
        />
      </StyeldImageInputContainer>
    </>
  );
};

export default EditImageForm;

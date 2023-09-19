import { Container } from "@mui/material";
import {
  StyeldMainContent,
  StyledProfilePictureContainer,
  StyledPaper,
  StyledUserDataContainer,
  StyledMain,
  StyledHeader,
} from "./User.styles";
import {
  useGetUserQuery,
  useUpdateUserImageMutation,
  useUpdateUserMutation,
} from "../../redux/services/user/userApi";
import { useParams } from "react-router-dom";
import EditForm, { UpdateUserFormProps } from "./edit-form/EditForm";
import EditImageForm from "./edit-image-form/EditImageForm";

const User = () => {
  const { id = "25" } = useParams();
  const { data, isLoading, isFetching } = useGetUserQuery(id);
  const [updateImage, updateImageData] = useUpdateUserImageMutation();
  const [updateUser, updateUserData] = useUpdateUserMutation();

  const handleImageChange = (file: File) => {
    console.log("file", file);
    void updateImage({
      id,
      file,
    });
  };

  const handleUpdateUserSubmit = (updatedUser: UpdateUserFormProps) => {
    void updateUser({
      ...updatedUser,
      id: +id,
    });
  };

  return (
    <StyledMain>
      <Container>
        <StyledPaper>
          <StyledHeader>Edit your Profile</StyledHeader>
          {data && (
            <StyeldMainContent>
              <StyledProfilePictureContainer>
                <EditImageForm
                  imagePath={data.imagePath}
                  handleInputChange={handleImageChange}
                  isLoading={updateImageData.isLoading}
                />
              </StyledProfilePictureContainer>
              <StyledUserDataContainer>
                <EditForm
                  oldUserData={{ userName: data.userName }}
                  handleFormSubmit={handleUpdateUserSubmit}
                />
              </StyledUserDataContainer>
            </StyeldMainContent>
          )}
        </StyledPaper>
      </Container>
    </StyledMain>
  );
};

export default User;

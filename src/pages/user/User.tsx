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
} from "../../redux/services/user/userApi";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import EditForm from "./edit-form/EditForm";
import EditImageForm from "./edit-image-form/EditImageForm";
import { useState } from "react";

const schema = yup
  .object({
    userName: yup.string().required().min(2).max(20),
    password: yup.string().required().min(5).max(30),
  })
  .required();

const User = () => {
  const { id = "25" } = useParams();
  const { data, isLoading, isFetching } = useGetUserQuery(id);
  const [updateImage, updateImageData] = useUpdateUserImageMutation();

  console.log("datas", data);

  const handleImageChange = (file: File) => {
    console.log("file", file);
    void updateImage({
      id,
      file,
    });
  };

  const [test, setTest] = useState(false);

  console.log("is loading 1", isLoading);

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
                  handleSubmit={console.log}
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

import { FetchArgs } from '@reduxjs/toolkit/dist/query';
import { apiSlice } from '../../../api/apiSlice';

  interface AppUserDto {
    id: number;
    createdAt: Date;
    userName: string;
    password: string;
    imagePath: string;
  }
  
  export type AppUserImageDto = {id: string, file: File };

  export interface UpdateAppUserDto {
      id: number;
      // createdAt: Date;
      userName: string;
      password: string;
      file: File;
  }

  const userUrl = 'customer-user';

  const getUserRoute = (id: string) => `${userUrl}/${id}`

  const buildUserFormData = (user: UpdateAppUserDto): string | FetchArgs => {

    const StringId = user.id.toString();
    
    const formData = new FormData();
    formData.append('id', StringId);
    formData.append('userName', user.userName);
    if(user.password)
    {
        formData.append('password', user.password);
    }

    return {
        url: getUserRoute(StringId),
        body: formData,
        method: 'POST',
    }

  }

  const buildUserImageFormData = (user: AppUserImageDto): string | FetchArgs => {

    const StringId = user.id.toString();
    
    const formData = new FormData();
    formData.append('file', user.file);

        return {
        url: getUserRoute(StringId),
        body: formData,
        method: 'PATCH',
    }

  }

  export const userApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
      getUser: build.query<AppUserDto, string>({
        query: getUserRoute,
        providesTags: ['User'],
      }),
      updateUser: build.mutation<number, UpdateAppUserDto>({
        query: buildUserFormData,
        invalidatesTags: ['User'],
      }),
      updateUserImage: build.mutation<number, AppUserImageDto>({
        query: buildUserImageFormData,
        invalidatesTags: ['User'],
      }),
    })
  });
  
  export const { useGetUserQuery, useUpdateUserMutation, useUpdateUserImageMutation } = userApi;
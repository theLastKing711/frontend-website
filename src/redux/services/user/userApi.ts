import { FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { apiSlice } from '../../../api/apiSlice';
import { Token, saveToken } from '../../../redux/features/auth/auth';

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
      userName: string;
      password: string;
  }

  const userUrl = 'customer-user';

  const getUserRoute = (id: string) => `${userUrl}/${id}`
  

  const getUpdateImageUrl = (id: string) => `${userUrl}/${id}` + '/updateImage';

  const buildUpdateUserFormData = (user: UpdateAppUserDto): string | FetchArgs => {

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
        method: 'PATCH',
    }

  }

  const buildUserImageFormData = (user: AppUserImageDto): string | FetchArgs => {

    const StringId = user.id.toString();
    
    const formData = new FormData();
    formData.append('file', user.file);

        return {
        url: getUpdateImageUrl(StringId),
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
      updateUser: build.mutation<Token, UpdateAppUserDto>({
        async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
          
          const updatedUser = await fetchWithBQ(buildUpdateUserFormData(_arg));

          if (updatedUser.error) {
            return { error: updatedUser.error }
          }
          
          const result = await fetchWithBQ('auth/getAccessToken');

          console.log('result', result);
          
          if (result.error)
            return { error: result.error }

          const accessToken = result.data as Token;
          
          _queryApi.dispatch(saveToken(accessToken))
          
          return result.data
            ? { data: accessToken}
            : { error: result.error as unknown as FetchBaseQueryError}
        },
        invalidatesTags: ['User'],
      }),
      updateUserImage: build.mutation<number, AppUserImageDto>({
        query: buildUserImageFormData,
        invalidatesTags: ['User'],
      }),
    })
  });
  
  export const { useGetUserQuery, useUpdateUserMutation, useUpdateUserImageMutation } = userApi;
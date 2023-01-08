import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";



const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:4000/',
  });
  
  export const userApiSlice = createApi({
    baseQuery,
      reducerPath: 'userApiSlice',
      endpoints: (builder) => ({
          addUser: builder.mutation({
              query: (credentials) => ({
                  url: 'create-user',
                  method: 'POST',
                  body:{...credentials}
              })
          }),
          getAllUsers: builder.mutation({
            query: (credentials) => ({
                url: 'get-user',
                method: 'GET',
            })
          }),
          addMultipleUsers: builder.mutation({
            query: (credentials) => ({
                url: 'inset-many-user',
                method: 'POST',
                body:{...credentials}
            })
          }),
          deleteUser: builder.mutation({
            query: (credentials) => ({
                url: `delete-user/${credentials}`,
                method: 'DELETE',
                // data: credentials
            })
          })

      })
  });

  export const {useAddUserMutation, useGetAllUsersMutation, useAddMultipleUsersMutation, useDeleteUserMutation} =userApiSlice
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const Token = JSON.parse(localStorage.getItem("authToken"));
// console.log("TokenSlice", Token);

export const getAllApi = createApi({
  reducerPath: "getAllApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://adminaman.herokuapp.com/",
  }),

  endpoints : (build) => ({
    getRegisterUser: build.mutation({
      query: (registerUser) => ({
        url: `register`,
        method: `POST`,
        body: registerUser,
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
    getLoginUser: build.mutation({
      query: (loginUser) => {
        console.log("LoginUserDataRTK", loginUser);
        return {
          url: `login`,
          method: "POST",
          body: loginUser,
          headers: {
            "Content-type": "application/json",
          },
        };
      }, 
    }),
    getAllPostData: build.query({
      query: () => {
        return {
          url: `all`,
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${Token}`,
          },
        };
      },
      providesTags : ['all']
    }),
    getForgetPassword: build.mutation({
      query: (forgetPass) => {
        debugger;
        console.log("Slice Forget", forgetPass);
        return {
          url: `forget`,
          method: `POST`,
          body: forgetPass,
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${Token}`,
          },
        };
      },
      invalidatesTags :['forget']
    }),
    getAddUser: build.mutation({
      query: (addUser) => ({
        url: `post`,
        method: "POST",
        body: addUser,
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${Token}`,
        },
      }),
      invalidatesTags :['post']
    }),
    getChangePassword: build.mutation({
      query: (changePass) =>{
        console.log(555,changePass)
        return({
        url: `changePassword`,
        method: "POST",
        body: changePass,
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${Token}`,
        },
        })
      },
      invalidatesTags :['update']
    }),
    getDeleteUser: build.mutation({
      query: (id) => {
        console.log("DeleteSliceId",id)
        return {
          url: `delete/${id}`,
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${Token}`,
          },
        };
      },
      invalidatesTags: (result, error, arg) => [{ type: 'delete', id: arg.id }],
    }),
    getEditUser: build.mutation({
      query: (id) => {
        // console.log("DeleteSliceId",id)
        return {
          url: `get/${id}`,
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${Token}`,
          },
        };
      },
      invalidatesTags :['get']
    }),
    getUpdateUser: build.mutation({
      query: (updateUser) => {
           const id = updateUser?._id;
        console.log("update id",id)
        return {
          url: `update/${id}`,
          method: "PUT",
          body : updateUser,
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${Token}`,
          },
        };
      },
      invalidatesTags :['update']
    }),
  }),
});

export const {
  useGetRegisterUserMutation,
  useGetLoginUserMutation,
  useGetAllPostDataQuery,
  useGetAddUserMutation,
  useGetForgetPasswordMutation,
  useGetChangePasswordMutation,
  useGetDeleteUserMutation,
  useGetEditUserMutation,
  useGetUpdateUserMutation
} = getAllApi;
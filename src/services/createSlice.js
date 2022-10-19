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
    }),
    getChangePassword: build.mutation({
      query: (changePass) => ({
        url: `update`,
        method: "POST",
        body: changePass,
        headers: {
          "Content-type": "application/json",
        },
      }),
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
    }),
    getEditUser: build.mutation({
      query: (id) => {
        console.log("DeleteSliceId",id)
        return {
          url: `get/${id}`,
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${Token}`,
          },
        };
      },
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
  useGetEditUserMutation
} = getAllApi;
import styled from "styled-components";

export const AdminWrapper = styled.div`
 background-color: antiquewhite;
  h1{
     text-align : center;
   }
   .deleteBtn{
    width: 100px;
    box-shadow: 0 0 1px 1px;
    border-radius: 0px !important;
 }
  .addBtn{
    width: 200px;
    float : right;
    box-shadow: 0 0 1px 1px;
    border-radius: 0px !important;
    margin : 0 27px 0px 0px;
 }
`;

export const HeadingAddUser = styled.p`
 font-size: 32px;
 text-align: center;
 border-bottom: 2px solid aliceblue;
 font-family: none;
 margin: 20px 0 0 0; 
`;

export const FormWrapper = styled.div`
margin: 15px 37px 0 -20px !important;
#addUserbtn{
 width: 200px;
 box-shadow: 0 0 1px 1px;
 border-radius: 0px !important;
}
`;

export const CloseBtn = styled.button`
 width: 100px;
 box-shadow: 0 0 1px 1px;
 border-radius: 0px !important;
`;

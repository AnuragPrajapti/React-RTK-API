import styled from 'styled-components';

export const Container = styled.div`
  height: 110vh;
  width : 100%;
  background-size:cover;
  background-repeat: no-repeat;
  display : flex;
`;

export const HeadingRegister = styled.p`
 font-size: 32px;
 text-align: center;
 border-bottom: 2px solid #8ca5b8;
 font-family: none;
`;

export const RegisterWrapper = styled.div`
 margin: 50px 0px 0px 600px;
 padding: 25px;
 border: 2px solid #6b6c6e;
 background-color: white;
 height: 750px;
 box-shadow : 0px 5px 6px  0px; 
 .registerBtn{
   width: 200px;
   box-shadow: 0 0 1px 1px;
   border-radius: 0px !important;
 }
 .registerForm{
    margin: 25px 55px 0 0;
 }
`;

export const ImageWrapper = styled.div`
 display: flex;
 height: 750px;
 margin: 51px 0 0 0;
 border-bottom: 2px solid aliceblue;
  
@media screen and (max-width : 767px) {
  display: none;
}
`;
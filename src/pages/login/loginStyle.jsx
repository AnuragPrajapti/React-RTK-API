import styled from 'styled-components';
import BackgrounImage from '../../images/loginForm/loginbackgroundImage.jpg'


export const Container = styled.div`
 background-image : url(${BackgrounImage});
 height: 110vh;
 width : 100%;
 background-size:cover;
 background-repeat: no-repeat;
 display : flex;
`;

export const LoginWrapper = styled.div`
margin: 70px 0px 0px 550px;
padding: 25px;
border: 2px solid aliceblue;
// background-color: white;
box-shadow: 0 0 0 2px #75a1a2;
height: 400px;
.login-form{
    width : 400px;
    padding : 25px;
}
.loginBtn{
   width: 200px;
   box-shadow: 0 0 1px 1px;
   border-radius: 0px !important;
   margin : 0 20px 0 0;
}
.forgetBtn{
 width: 200px;
 box-shadow: 0 0 1px 1px;
 border-radius: 0px !important;
 margin : 0 20px 0 0;
}
`;

export const HeadingLogin = styled.p`
 font-size: 32px;
 text-align: center;
 border-bottom: 2px solid #b6d2ea;
 font-family: none;
 letter-spacing: .3em;
 color: white;
`;
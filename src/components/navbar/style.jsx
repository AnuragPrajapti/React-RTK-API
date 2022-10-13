import styled from 'styled-components'

export const NavbarWrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 background-color:  rgb(122 144 137);
 padding-top : 20px;
 .navbarLinkActive{
   border-bottom: 3px solid red !important;
   transition: border-bottom .5s ease-in-out !important;
 }
 linkTag :hover {
   transform: translateY(-2px);
 }

`;

export const ListTag = styled.li`
 display: inline;
 margin: 50px;
 .linkTag {
   font-family: 'Roboto', sans-serif;
   letter-spacing: .3em;
   text-indent: .3em;
   color: #181818;
   border-bottom: 3px solid transparent;
 }
`;



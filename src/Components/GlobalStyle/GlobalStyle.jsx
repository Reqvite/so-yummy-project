import { createGlobalStyle } from "styled-components";

import "modern-normalize";
import "react-toastify/dist/ReactToastify.css";

import Poppins700 from "../../fonts/Poppins-Bold.ttf";
import Poppins600 from "../../fonts/Poppins-SemiBold.ttf";
import Poppins500 from "../../fonts/Poppins-Medium.ttf";
import Poppins400 from "../../fonts/Poppins-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url(${Poppins400}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  
  @font-face {
    font-family: 'Poppins';
    src: url(${Poppins500}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${Poppins600}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${Poppins700}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }


body {
   color: ${(p) => p.theme.colors.mainText};
 background-color: ${(p) => p.theme.colors.mainBackground};
  margin: 0;
   font-family: 'Poppins', sans-serif;

  * {
  transition: color 500ms cubic-bezier(0.075, 0.82, 0.165, 1), background-color 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
}
}


code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
#root{
  height: 100%;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: currentColor;
}  

*::-webkit-scrollbar {
  width: 8px;
}
 
*::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
*::-webkit-scrollbar-thumb {
    border-radius: 5px;
  background-color: darkgrey;
}

`;

import { createGlobalStyle } from "styled-components";
import { css } from "styled-components";
import Theme from "./theme";
import { Media } from "./media";

// import openSans from "../assets/fonts/Open_Sans/OpenSans-Light.ttf";
// export const fontFaces = css`
//   @font-face {
//     font-family: "Open Sans";
//     src: url(${openSans}) format("ttf");
//     font-style: normal;
//   }
// `;

const GlobalStyle = createGlobalStyle`
   
	::selection {
		color: ${Theme.colors.primary};
		background: ${Theme.colors.bg};
	}
    html {
		height: 100%;
	  }
	  body,#root {
		
	  }
	  
	body {
		margin:0;
		font-family: 'Open Sans';
		background: ${Theme.colors.bg};
		color: ${Theme.colors.primary};
		
	}
   
	.shadow{
		position: absolute;
		width: 100%;
		height: 100%;
		background: linear-gradient(0deg, black, transparent);
	}
	h1, h2, h3, h4 {
		color: ${Theme.colors.white};
	}



	label {
		margin-bottom: .5rem;
		color: ${Theme.colors.secondary};
	}

	input, textarea {
		border-radius: .5rem;
		border: none;
		background: rgba(0, 0, 0, 0.05);
		padding: .25rem 1rem;

		&:focus {
			outline: none;
		}
	}

	.textRight {
		text-align: right;
	}
  
`;

export default GlobalStyle;

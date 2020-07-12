import { createGlobalStyle } from "styled-components";

import Theme from "./theme";
import { Media } from "./media";

const GlobalStyle = createGlobalStyle`
				
	::selection {
		color: ${Theme.colors.primary};
		background: ${Theme.colors.bg};
	}
    html {
		height: 100%;
	  }
	  body,#root {
		min-height: 100%;
	  }
	  
	body {
		margin:0;
		font-family: 'Open Sans';
		background: ${Theme.colors.bg};
		color: ${Theme.colors.primary};
		@media ${Media.phone} {
		
		}
	}

	h1, h2, h3, h4 {
		color: ${Theme.colors.primary};
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

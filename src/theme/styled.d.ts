import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg: string;
      primary: string;
      white: string;
      secondary: string;
      active: string;
      gray: string;
      show: string;
      button: string;
    };

    background: {
      footerbg: string;
    };

    transitions: {
      normal: string;
    };

    fontSize: {
      big: string;
      small: string;
      paragraph: string;
      span: string;
      ipadHeading: string;
      semiHeading: string;
    };

    lineHeight: {
      big: string;
      steps: string;
      semiHeading: string;
    };

    font: {
      heading: string;
      paragraph: string;
      primary: string;
    };
  }
}

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    // text - primary
    --desaturated-blue: hsl(238, 29%, 16%);
    --soft-red: hsl(14, 88%, 65%);

    // text - neutral
    --very-dark-grayish-blue: hsl(237, 12%, 33%);
    --dark-grayish-blue:  hsl(240, 6%, 50%);

    // background gradient
    --soft-violet: hsl(273, 75%, 66%);
    --soft-blue: hsl(240, 73%, 65%);
    --off-white: #FAF9F6;

    // dividers 
    --light-grayish-blue: hsl(240, 5%, 91%);

    font-size: 12px;
  }

  *,
  *::before,
  *::after{
    box-sizing: border-box;
	  margin: 0;
	  padding: 0;
    font-family: 'Kumbh Sans', sans-serif;
  }

  html {
    height: 100%;
    background: linear-gradient(var(--soft-violet), var(--soft-blue));
  }

  body {
    display: flex;
    justify-content: center;
    padding: 10rem;

    .title {
      color: var(--desaturated-blue);
    }

    .attribution {
      font-size: 11px; 
      text-align: center;

      a {
        color: hsl(228, 45%, 44%); 
      }
    }
  }
`;

export default GlobalStyles;

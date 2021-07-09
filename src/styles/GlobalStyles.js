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
    --darker-blue: hsl(260, 73%, 45%);
    --white: #FFF;

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
    background-image: linear-gradient(var(--soft-violet), var(--soft-blue));
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    min-width: 320px;
  }

  body {
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-height: 800px) and (max-width: 1000px) {
      padding-top: 100px;
    }
  }
`;

export default GlobalStyles;

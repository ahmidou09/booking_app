import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
 
  --color-primary-1: #db4444;
  --color-primary-2: #011221;
  --color-primary-3: #003B95;
  --color-grey-0: #f5f5f5;
  --color-grey-1: #999D9E;
  --color-grey-2: #ddd;
  --color-grey-3: #333;
  --color-grey-4: #666;
  --color-grey-5: #ccc;
  --color-teal-1: #3C9D93;
  --color-purple-1: #263B50;
  --color-purple-2: #5565E8;
  --color-accent-1: #C98BDF;
  --color-accent-2: #E99287;
  --color-accent-3: #43D9AD;
  --color-accent-4: #ffb700;
  --color-black: #000;
  --color-lines: #1E2D3D;
  --color-white: #FFF;
  --color-white-2: #e5e9f0;
  --color-red-1: #F04F43;
  --color-green-1: #58B15B;
  --color-green-2: #00ff00;
  --break-point-mob: 768px;
  --break-point-tab: 1024px;
  --break-point-desk: 1440px;

}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;

  @media only screen and (max-width: 1024px) {
    font-size: 50%;
  }
}

body {
  font-size: 1.6rem;
  font-family: "Poppins", sans-serif;

}


input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}


/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}
`;

export default GlobalStyles;

import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  height: 100vh;
}

a {
  text-decoration: none;
  color: #000;
}

p {
  line-height: 1.7;
}

ul {
  list-style: none;
}

li {
  line-height: 2.2;
}

h1,
h2,
h3 {
  font-weight: 600;
  margin-bottom: 10px;
}

`;
 
export default GlobalStyle;
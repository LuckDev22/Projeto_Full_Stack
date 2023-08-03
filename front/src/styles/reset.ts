import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    border: none;
}

fieldset {
    border: 0;
}

button{
    cursor: pointer;
    border: none;
    background: transparent;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
span,
li,
button,
label,
input,body {
  font-family: "Inter", sans-serif;
}


aria-label{
    color: var( --color-primary-negative);
}

`;

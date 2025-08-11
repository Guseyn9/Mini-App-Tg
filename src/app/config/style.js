import { createGlobalStyle } from 'styled-components'

export const returnGlobalStyle = () => {
    return createGlobalStyle`
@font-face {
  font-family:  "Inter";
  src: url('/Inter-Regular.woff') format('woff');
  font-style: normal;
  font-weight: 400;
}
@font-face {
  font-family: "Inter";
  src: url('/Inter-Medium.woff') format('woff');
  font-style: normal;
  font-weight: 500;
}

@font-face {
  font-family: 'Inter';
  src: url('/Inter-SemiBold.woff') format('woff');
  font-style: normal;
  font-weight: 600;
}

@font-face {
  font-family: 'Inter';
  src: url('/Inter-Bold.woff') format('woff');
  font-style: normal;
  font-weight: 700;
}

  body {
    overflow-y: auto;
    font-family: "Inter";
    overscroll-behavior: none;
}

body::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
`
}

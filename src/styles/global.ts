import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root{
  --background-white: #F2F3F5;
  --gray-medium: #DCDDE0;
  --gray-dark: #666666;

  --blue: #5965E0;
  --blue-light: #4953B8;
  --blue-dark: #2E384D;
  --blue-purple-light: #B2B9FF;
  
  --red-light: #E83F5B;
  --green-light: #4CD62B;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{ 
    @media(max-width: 1080px){
        font-size: 93.75%;
    }

    @media(max-width: 720px){
        font-size: 87.5%;
    }
}

html, body{
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
}

h1, h2, h3, h4, h5, h6, strong{
  font-family: 'Inter', sans-serif;
  font-weight: 500;
}

button { 
  cursor: pointer;
}
`

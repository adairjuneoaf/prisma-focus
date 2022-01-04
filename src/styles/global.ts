import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root{
  //LIGHT THEME
  --background-light: #F2F3F5;
  --text-light: #666666;
  --color-primary-light: #DCDDE0;
  
  //DARK THEME
  --background-dark: #121214;
  --text-dark: #F2F3F5;
  --color-primary-dark: #DCDDE0;

  //OTHER COLORS
  --background-white: #F2F3F5;
  --gray-medium: #DCDDE0;
  --gray-dark: #666666;
  --blue-light: #5965E0;
  --blue: #4953B8;
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

.react-modal-overlay{
  background: rgba(0,0,0,0.5);

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.react-modal-content{
  width: 100%;
  height: 100%;
  max-width: 25rem;
  max-height: 25rem;
  background: ${props => props.theme.colors.background};
  padding: 3rem;
  position: relative;
  border-radius: 0.375rem;
  color: ${props => props.theme.colors.text};
}

.react-modal-close{
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;
  transition: filter 0.2;
 
  &:hover{
    filter: brightness(0.8);
  }
}

`

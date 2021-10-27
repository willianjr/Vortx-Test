import { createGlobalStyle } from 'styled-components'
import themeProps from '../../interfaces/theme'

export const GlobalStyle = createGlobalStyle<{ theme: themeProps }>`
  *{
    font-family:${({ theme: { fonts } }) => fonts.default.family};
    font-size:${({ theme: { fonts } }) => fonts.default.size};
    box-sizing:border-box;

  }
body{
	  background: ${({ theme: { colors } }) => colors.background.body};
    background-size:cover;
    background-attachment:fixed;
    background-repeat:repeat;
    min-height:100vh;
    overflow:auto;
    display:flex;
    justify-content:center;
    align-items:center;

	}
  input{
    background-color: ${({ theme: { colors } }) => colors.input.default.background};
    border-color: ${({ theme: { colors } }) => colors.input.default.border};
    color: ${({ theme: { colors } }) => colors.input.default.text};
  }
`

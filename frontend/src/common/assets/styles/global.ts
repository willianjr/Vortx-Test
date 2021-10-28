import styled, { createGlobalStyle } from 'styled-components'
import themeProps from '../../interfaces/theme'

export const GlobalStyle = createGlobalStyle<{ theme: themeProps }>`
  *{
    font-family:${({ theme: { fonts } }) => fonts.default.family};
    font-size:${({ theme: { fonts } }) => fonts.default.size};
    box-sizing:border-box;

  }
body{
	  background: ${({ theme: { colors } }) => colors.background.body};
    min-height:100vh;
    overflow:auto;
    overflow-x:hidden;


	}

`
export const Content = styled.main`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`
export const BgNeural = styled.div`
    position: fixed;
    height: 100vh;
    width: 50vw;
    top: 0;
    left: 0;
    z-index: -100;
`
export const BgElipse = styled.div`
    height: 80vh;
    width: 150vw;
    z-index: -101;
    background-color: #dec0f1;
    border-radius: 100%;
    position: absolute;
    left: calc(75vw / 2 * -1);

    top: -25vh;
    filter: blur(100px);
`

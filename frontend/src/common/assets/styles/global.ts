import styled, { createGlobalStyle, css } from 'styled-components'
import themeProps from '../../interfaces/theme'

export const GlobalStyle = createGlobalStyle<{ theme: themeProps }>`

  *{
    font-family:${({ theme: { fonts } }) => fonts.default.family};
    font-size:${({ theme: { fonts } }) => fonts.default.size};
    box-sizing:border-box;
    ::selection {
        color: #FFF;
        background: ${({ theme: { colors } }) => colors.primary.purple};;
    }
    ::-moz-selection { /* Code for Firefox */
      color: #FFF;
      background: ${({ theme: { colors } }) => colors.primary.purple}

    }
  }
   html{
     scroll-snap-type: y mandatory;
     scroll-behavior: smooth;

    }
  body{
	  background: ${({ theme: { colors } }) => colors.background.body};

     min-height:100vh;


	}


`
export const Content = styled.main`
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
    width: 100vw;
    z-index: -101;
    background-color: #dec0f1;
    border-radius: 100%;
    position: fixed;
    left: 0%;
    top: -25vh;
    filter: blur(100px);
`
export const ShadowInputs = css`
    content: '';
    background: #b283ce;
    display: block;
    width: 80%;
    height: 10px;
    border-radius: 80%;

    position: relative;
    margin: 0 auto;
    bottom: -0.5rem;
    z-index: -1;
    opacity: 0.35;
    filter: blur(5px);
`
export const LabelInputs = css`
    height: 27px;
    width: 100%;
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    font-size: 15px;
    line-height: 27px;
    z-index: 1;
    background-color: transparent;
    ::before,
    ::after {
        content: '';
        margin: 0 0.5rem;
        height: 17px;
        width: 5%;
        display: inline-block;
        position: relative;
        top: 50%;
        opacity: 0.1;
    }
`
export const Inputs = css`
    border-radius: 30px;
    padding: 1.3rem 0.5rem 0.2rem;
`

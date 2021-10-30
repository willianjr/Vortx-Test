import styled from 'styled-components'

export const Rodape = styled.footer`
    background: #fff;
    position: fixed;
    bottom: -5vh;
    left: 0;
    right: 0;

    width: 100vw;
    height: 147px;
    transform: rotate(-5deg);
    transform-origin: top right;
    display: none;
`
export const Info = styled.aside`
    display: none;
    width: 50vw;
    height: 7.2rem;
    position: absolute;
    top: 0.5rem;
    right: 0;
    transform: skewY(5deg);

    > span {
        text-align: right;
        width: 100%;
    }
`

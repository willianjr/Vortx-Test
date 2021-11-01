import styled from 'styled-components'

export const Main = styled.main.attrs(() => ({
    className: 'd-flex flex-column lg-5 px-5 container-md',
}))`
    min-height: 100vh;
    height: 100%;
    margin-bottom: 3rem;
    scroll-snap-align: start;
    position: relative;
    justify-content: center;

    img {
        display: flex;
        align-self: center;
        max-width: 90vw;
    }
    @media (max-width: 768px) {
        margin-bottom: 5rem;
    }
`

export const Info = styled.aside`
    text-align: center;
    margin: 5rem 0;
    padding: 1rem;
    @media (max-width: 768px) {
        margin: 1rem 0;
        padding: 0.5rem;
    }
`
export const Titulo = styled.h3`
    color: ${({ theme: { colors } }) => colors.primary.purple};
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 0.05rem;
`
export const SubTitulo = styled.span`
    font-size: 18px;
    line-height: 22px;
    margin-top: 0rem;
`

export const Label = styled.div`
    max-width: 50%;
    width: 50%;
    height: 145px;
    border-radius: 50px;
    padding: 3.5rem 2.5rem;
    font-size: 30px;
    line-height: 1.5rem;
    text-align: center;
    letter-spacing: -0.08em;
    font-weight: bold;
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
    ::after {
        content: '';

        width: 36px;
        height: 36px;
        display: block;
        border-radius: 25%;
        position: absolute;
        bottom: 5px;
        left: 50%;
        transform: translate(-50%, 50%) rotate(45deg);
        z-index: -1;
    }
    @media (max-width: 768px) {
        padding: 1.5rem;
        font-size: 20px;
        line-height: 1rem;
        height: 75px;
    }
`
export const Valor = styled.h3`
    ::before {
        content: 'R$';
        margin-bottom: 0;
        display: block;
        font-size: 50%;
        font-weight: normal;
    }
    text-align: center;
    font-size: 60px;
    font-weight: 900;
    letter-spacing: -0.1rem;
`
const Planos = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-self: center;
    flex-direction: column;
    border-radius: 80px;
    @media (max-width: 768px) {
        margin-bottom: 10rem;
    }
`

export const ComPlano = styled(Planos).attrs(() => ({
    className: 'col-md-12',
}))`
    --height: 390px;
    background-color: ${({ theme: { colors } }) => colors.primary.purple};
    height: var(--height);
    @media (max-width: 768px) {
        height: calc(var(--height) - 100px);
        margin-top: 3.5rem;
    }

    ${Label} {
        background-color: ${({ theme: { colors } }) => colors.primary.gold};
        ::after {
            background-color: ${({ theme: { colors } }) => colors.primary.gold};
        }
    }
    ${Valor} {
        color: ${({ theme: { colors } }) => colors.primary.gold};
    }
`
export const SemPlano = styled(Planos).attrs(() => ({
    className: 'col-md-12',
}))`
    background-color: ${({ theme: { colors } }) => colors.primary.blue};
    --height: 290px;
    height: var(--height);
    @media (max-width: 768px) {
        height: calc(var(--height) - 50px);
    }
    ${Label} {
        background-color: #fff;
        ::after {
            background-color: #fff;
        }
    }
    ${Valor} {
        color: #fff;
    }
`

export const ButtonAssinar = styled.button`
    background-color: ${({ theme: { colors } }) => colors.secondary.purple_light_1};
    color: #fff;
    max-width: 50%;
    width: 50%;
    height: 95px;
    border-radius: 50px;
    padding: 2.5rem;
    font-size: 20px;
    line-height: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: -0.08em;
    font-weight: bold;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 50%);
    box-shadow: 0px -10px 10px rgba(0, 0, 0, 0.1);
    border: none;
    transition: all 0.2s ease-in;
    ::after {
        content: '';
        background-color: ${({ theme: { colors } }) => colors.secondary.purple_light_1};
        width: 36px;
        height: 36px;
        display: block;
        border-radius: 25%;
        position: absolute;
        top: 5px;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        z-index: -1;
    }
    :hover {
        transform: translate(-50%, 50%) scale(110%);
        box-shadow: 0px -10px 20px rgba(0, 0, 0, 0.3);
    }
    @media (max-width: 768px) {
        padding: 1.5rem;
    }
`

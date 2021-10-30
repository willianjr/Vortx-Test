import styled from 'styled-components'
import { Select } from '../../common/components'

export const Main = styled.main.attrs(() => ({
    className: 'd-flex flex-column lg-5 px-5 container-md',
}))`
    height: 100vh;
    background: red;
    margin-bottom: 2px;
    scroll-snap-align: start;
    position: relative;
    img {
        display: flex;
        align-self: center;
        max-width: 90vw;
    }
`

export const Info = styled.aside`
    text-align: center;
    margin: 5rem 0;
    padding: 1rem;
    @media (max-width: 1000px) {
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
export const SelecionePlano = styled(Select)`
    background-color: ${({ theme: { colors } }) => colors.primary.purple};
    color: #fff !important;
    :focus {
        background-color: ${({ theme: { colors } }) => colors.primary.purple};
        color: ${({ theme: { colors } }) => colors.input.default.text_hover};
    }
`
export const ComPlano = styled.div.attrs(() => ({
    className: 'col-md-12',
}))`
    background-color: ${({ theme: { colors } }) => colors.primary.purple};
    border-radius: 80px;
    height: 390px;
`
export const SemPlano = styled.div`
    background-color: ${({ theme: { colors } }) => colors.primary.blue};
    border-radius: 80px;
    height: 390px;
`

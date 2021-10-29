import styled from 'styled-components'
import { Select } from '../../common/components'

export const Main = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`

export const Info = styled.aside`
    text-align: center;
    margin: 5rem 0;
    padding: 1rem;
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

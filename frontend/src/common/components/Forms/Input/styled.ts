import styled from 'styled-components'

import { Form } from 'react-bootstrap'
const { Control, Label, Group } = Form

export const FormGroup = styled(Group)`
    position: relative;
    ::after {
        content: '';
        background: #b283ce;
        display: block;
        width: 80%;
        height: 10px;
        border-radius: 50%;

        position: relative;
        margin: 0 auto;
        bottom: -1rem;
        z-index: -1;
        opacity: 0.55;
        filter: blur(5px);
    }
`
export const FormLabel = styled(Label)`
    color: ${({ theme: { colors } }) => colors.input.default.text};
    height: 27px;
    width: 100%;
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    font-size: 15px;
    line-height: 27px;
    z-index: 1;
    ::after,
    ::before {
        content: '';
        margin: 0 0.5rem;
        height: 17px;
        width: 5%;
        display: inline-block;
        border-top: 1px solid ${({ theme: { colors } }) => colors.input.default.text};
        position: relative;
        top: 50%;
        opacity: 0.1;
        z-index: -1;
    }
`
export const Input = styled(Control)`
    background-color: ${({ theme: { colors } }) => colors.input.default.background};
    border-color: ${({ theme: { colors } }) => colors.input.default.border};
    color: ${({ theme: { colors } }) => colors.input.default.text};
    transition: all 0.3s linear;
    border-radius: 30px;
    padding-top: 30px;
    text-align: center;
    font-size: 40px;
    font-weight: bold;

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${({ theme: { colors } }) => colors.input.default.text};
        filter: opacity(0.4);
    }
    :-ms-input-placeholder {
        color: ${({ theme: { colors } }) => colors.input.default.text};
        filter: opacity(0.4);
    }

    :focus {
        background-color: ${({ theme: { colors } }) => colors.input.default.background_hover};
        color: ${({ theme: { colors } }) => colors.input.default.text_hover};
        border-color: ${({ theme: { colors } }) => colors.input.default.border_hover};
        box-shadow: 0px 0px 0px ${({ theme: { colors } }) => colors.input.default.shadow_hover};
    }
`

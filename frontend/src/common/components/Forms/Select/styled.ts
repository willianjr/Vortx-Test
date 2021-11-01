import styled from 'styled-components'
import themeProps from '../../../interfaces/theme'
import { ShadowInputs, LabelInputs, Inputs } from '../../../assets/styles/global'
import { Form } from 'react-bootstrap'
const { Select, Label, Group } = Form

export const FormGroup = styled(Group)`
    position: relative;
    background-color: transparent;
    ::after {
        ${ShadowInputs}
    }
`
export const FormLabel = styled(Label)<themeProps>`
    ${LabelInputs}
    color: ${(props) =>
        props.secondary
            ? ({ theme: { colors } }) => colors.input.secondary.text
            : ({ theme: { colors } }) => colors.input.default.text};

    ::before,
    ::after {
        border-top: ${(props) =>
            props.secondary
                ? ({ theme: { colors } }) => colors.input.secondary.text
                : ({ theme: { colors } }) => colors.input.default.text};
    }
`
export const Input = styled(Select)<themeProps>`
    --colorText: ${(props) =>
        props.secondary
            ? ({ theme: { colors } }) => colors.input.secondary.text
            : ({ theme: { colors } }) => colors.input.default.text};
    ${Inputs}
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: ${(props) =>
        props.secondary
            ? ({ theme: { colors } }) => colors.input.secondary.background
            : ({ theme: { colors } }) => colors.input.default.background};
    color: var(--colorText);
    border-color: ${(props) =>
        props.secondary
            ? ({ theme: { colors } }) => colors.input.secondary.border
            : ({ theme: { colors } }) => colors.input.default.border};

    font-size: ${({ theme: { fonts } }) => fonts.input.size};
    font-weight: ${({ theme: { fonts } }) => fonts.input.weight};
    text-align: ${({ theme: { fonts } }) => fonts.input.align};

    transition: all 0.3s linear;
    background-image: linear-gradient(45deg, transparent 50%, var(--colorText) 50%),
        linear-gradient(135deg, var(--colorText) 50%, transparent 55%);
    background-position: calc(100% - 1.5rem) calc(70%), calc(100% - 1rem) calc(70%);
    background-size: 0.5rem 0.5rem, 0.5rem 0.5rem;
    background-repeat: no-repeat;
    :focus {
        background-color: ${(props) =>
            props.secondary
                ? ({ theme: { colors } }) => colors.input.secondary.background_hover
                : ({ theme: { colors } }) => colors.input.default.background_hover};
        color: ${(props) =>
            props.secondary
                ? ({ theme: { colors } }) => colors.input.secondary.text_hover
                : ({ theme: { colors } }) => colors.input.default.text_hover};
        border-color: ${(props) =>
            props.secondary
                ? ({ theme: { colors } }) => colors.input.secondary.border_hover
                : ({ theme: { colors } }) => colors.input.default.border_hover};

        box-shadow: 0px 0px 0px ${({ theme: { colors } }) => colors.input.default.shadow_hover};
    }
`

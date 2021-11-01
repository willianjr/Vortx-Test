import styled from 'styled-components'
import themeProps from '../../../interfaces/theme'
import { ShadowInputs, LabelInputs, Inputs } from '../../../assets/styles/global'
import { Form } from 'react-bootstrap'
const { Control, Label, Group } = Form

export const FormGroup = styled(Group)`
    position: relative;
    background-color: transparent;
    ::after {
        ${ShadowInputs}
    }
`
export const FormLabel = styled(Label)`
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
export const Input = styled(Control)<{ theme: themeProps }>`
    --colorText: ${(props) =>
        props.secondary
            ? ({ theme: { colors } }) => colors.input.secondary.text
            : ({ theme: { colors } }) => colors.input.default.text};
    ${Inputs}
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
    ::placeholder,
    ::-webkit-input-placeholder {
        color: var(--colorText);
        filter: opacity(0.4);
    }
    :-ms-input-placeholder {
        color: var(--colorText);
        filter: opacity(0.4);
    }

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

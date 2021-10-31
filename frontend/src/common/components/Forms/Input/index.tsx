import React from 'react'
import { FormControlProps } from 'react-bootstrap'
import * as S from './styled'

declare interface InputProps extends FormControlProps {
    label?: string
    loading?: boolean
}

export const Default = ({ label, ...props }: InputProps): JSX.Element => {
    return (
        <>
            <S.FormGroup {...props}>
                {label && <S.FormLabel>{label}</S.FormLabel>}
                <S.Input {...props} />
            </S.FormGroup>
        </>
    )
}

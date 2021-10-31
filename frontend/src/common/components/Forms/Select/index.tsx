import React, { ReactNode } from 'react'
import { FormControlProps } from 'react-bootstrap'

import * as S from './styled'

declare interface InputSelect extends FormControlProps {
    loading?: boolean
    children?: ReactNode
    label?: string
}

export const Default = ({ label, children, ...props }: InputSelect): JSX.Element => {
    return (
        <S.FormGroup {...props}>
            {label && <S.FormLabel {...props}>{label}</S.FormLabel>}
            <S.Input {...props}>{children}</S.Input>
        </S.FormGroup>
    )
}

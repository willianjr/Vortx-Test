import React, { ReactNode } from 'react'
import { FormControlProps } from 'react-bootstrap'

import * as S from './styled'

declare interface InputSelect extends FormControlProps {
    loading?: boolean
    children?: ReactNode
    label?: string
    secondary?: boolean
}

export const Default = ({ secondary, label, children, ...props }: InputSelect): JSX.Element => {
    return (
        <S.FormGroup {...props}>
            {label && (
                <S.FormLabel secondary={secondary} {...props}>
                    {label}
                </S.FormLabel>
            )}
            <S.Input secondary={secondary} {...props}>
                {children}
            </S.Input>
        </S.FormGroup>
    )
}

import React, { ReactNode } from 'react'

import * as S from './styled'

declare interface InputProps {
    placeholder?: string
    loading?: boolean
    children: ReactNode
    label?: string
}

export const Default = ({ label, children, ...props }: InputProps): JSX.Element => {
    return (
        <S.FormGroup>
            {label && <S.FormLabel {...props}>{label}</S.FormLabel>}
            <S.Input {...props}>{children}</S.Input>
        </S.FormGroup>
    )
}

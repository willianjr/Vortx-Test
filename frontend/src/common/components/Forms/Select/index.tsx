import React, { ReactNode } from 'react'

import * as S from './styled'

declare interface InputProps {
    placeholder?: string
    loading?: boolean
    children: ReactNode
}

export const Default = ({ children, ...props }: InputProps): JSX.Element => {
    return (
        <S.FormGroup>
            <S.FormLabel>Origem</S.FormLabel>
            <S.Input {...props}>{children}</S.Input>
        </S.FormGroup>
    )
}

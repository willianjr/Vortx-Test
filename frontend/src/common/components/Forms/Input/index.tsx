import React from 'react'

import * as S from './styled'

declare interface InputProps {
    icon?: any
    placeholder?: string
    label?: string
    loading?: boolean
    type?: 'text' | 'password' | 'email' | 'tel' | undefined
}

export const Default = ({ type, label, ...props }: InputProps): JSX.Element => {
    return (
        <>
            <S.FormGroup>
                {label && <S.FormLabel>{label}</S.FormLabel>}
                <S.Input id="teste" type={type} {...props} />
            </S.FormGroup>
        </>
    )
}

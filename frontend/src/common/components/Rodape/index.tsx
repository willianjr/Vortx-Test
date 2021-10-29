import React, { ReactNode } from 'react'

import * as S from './styled'

declare interface RodapeProps {
    children: ReactNode
}

const Default = ({ children }: RodapeProps): JSX.Element => {
    return (
        <S.Rodape>
            <S.Info>{children}</S.Info>
        </S.Rodape>
    )
}

export default Default

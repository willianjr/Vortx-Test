import React from 'react'

import { Link, useHistory, useLocation } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import routes, { IRoute } from '../../../common/config/routes'

import * as S from './styled'

const Login = (): JSX.Element => {
    const history = useHistory()
    const location = useLocation()
    const renderSuggestionPages = () => {
        return routes
            .filter((page) => page.name.toLowerCase().includes(''))
            .map((page: IRoute) => {
                return (
                    <span key={page.name}>
                        <Link to={page.path}>{page.name}</Link>
                    </span>
                )
            })
    }
    return (
        <S.Container>
            <div>
                <S.Info>A Página {`"${location.pathname}"`} não foi encontrada.</S.Info>
                <S.ButtonGroup>
                    <S.ButtonVoltar onClick={() => history.goBack()}>
                        <FaArrowLeft />
                        Voltar
                    </S.ButtonVoltar>
                </S.ButtonGroup>
                <S.Info>Sugerimos as páginas abaixo:</S.Info>
                <S.TagGroup>{renderSuggestionPages()}</S.TagGroup>
            </div>
        </S.Container>
    )
}

export default Login

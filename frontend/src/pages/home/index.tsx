import React from 'react'

import { Input, Select } from '../../common/components'
import logo from '../../common/assets/images/LOGOMARCA_VXTEL.svg'
import { Container, Row, Col } from 'react-bootstrap'

import * as S from './styled'
const Login = (): JSX.Element => {
    return (
        <Container>
            <S.Main>
                <img src={logo} width={406} className="App-logo" alt="logo" />
                <S.Info>
                    <S.Titulo>Sempre é vantajoso usar o plano Fale Mais</S.Titulo>
                    <S.SubTitulo>
                        Simule agora mesmo a sua ligação e veja que pode sair de graça com um plano Fale Mais
                    </S.SubTitulo>
                </S.Info>
                <Row>
                    <Col xs={12} sm={4}>
                        <Select label={`Origem`}>
                            <option value={18}>018</option>
                            <option value={11}>011</option>
                            <option value={21}>021</option>
                        </Select>
                    </Col>
                    <Col xs={12} sm={4}>
                        <Select label={`Destino`}>
                            <option value={18}>018</option>
                            <option value={11}>011</option>
                            <option value={21}>021</option>
                        </Select>
                    </Col>
                    <Col xs={12} sm={4}>
                        <Input placeholder={`000`} label={`Duração:Min`} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className={`mt-5`}>
                        <S.SelecionePlano label={`Selecione o Plano`}>
                            <option>---</option>
                            <option value={30}>Falem Mais 30</option>
                            <option value={60}>Falem Mais 60</option>
                            <option value={120}>Falem Mais 120</option>
                        </S.SelecionePlano>
                    </Col>
                </Row>
            </S.Main>
        </Container>
    )
}

export default Login
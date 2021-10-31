import React, { useEffect, useState } from 'react'

import { Input, Select } from '../../common/components'
import logo from '../../common/assets/images/LOGOMARCA_VXTEL.svg'
import { Container, Row, Col } from 'react-bootstrap'
import BD from '../../main/services/dados.json'

import * as S from './styled'
const Login = (): JSX.Element => {
    const [origem, setOrigem] = useState('0')
    const [destino, setDestino] = useState('0')
    const [tempo, setTempo] = useState(0)
    const [plano, setPlano] = useState('0')

    const Origens = BD.dados.map((x) => x.origem).sort()
    const renderDestinos = () => {
        if (origem != '0') {
            const filterDestinos = BD.dados.filter((x) => x.origem === origem)[0].destinos || []
            return filterDestinos
                .map((x) => (
                    <option key={x.destino} value={x.destino}>
                        {x.destino}
                    </option>
                ))
                .sort()
        }
    }
    useEffect(() => {
        renderDestinos()
    }, [origem])

    /*useEffect(() => {
        const Valor = BD.dados.filter((x) => x.origem === origem).destinos[destino].valor
    }, [destino])*/

    return (
        <Container>
            <S.Main>
                <img src={logo} width={406} className="App-logo img-fluid" alt="logo" />

                <S.Info>
                    <S.Titulo>Sempre é vantajoso usar o plano Fale Mais</S.Titulo>
                    <S.SubTitulo>
                        Simule agora mesmo a sua ligação e veja que pode sair de graça com um plano Fale Mais
                    </S.SubTitulo>
                </S.Info>
                <Row className="gx-2">
                    <Col xs={12} sm={{ span: 2, offset: 3 }}>
                        <Select label={`Origem`} onChange={(e) => setOrigem(e.target.value)}>
                            <option value="0">...</option>
                            {Origens.map((x: string) => (
                                <option key={x} value={x}>
                                    {x}
                                </option>
                            ))}
                        </Select>
                    </Col>
                    <Col xs={12} sm={2}>
                        <Select label={`Destino`} onChange={(e) => setDestino(e.target.value)}>
                            <option>...</option>
                            {renderDestinos()}
                        </Select>
                    </Col>

                    <Col xs={12} sm={3}>
                        <Input
                            type="number"
                            placeholder={`...`}
                            label={`Duração:Min`}
                            onChange={(e) => setTempo(+e.target.value)}
                        />
                    </Col>
                </Row>
                <Row className={`my-5`}>
                    <Col xs={12} lg={{ span: 4, offset: 4 }}>
                        <S.SelecionePlano label={`Selecione o Plano`} onChange={(e) => setPlano(e.target.value)}>
                            <option>...</option>
                            <option value={30}>Falem Mais 30</option>
                            <option value={60}>Falem Mais 60</option>
                            <option value={120}>Falem Mais 120</option>
                        </S.SelecionePlano>
                    </Col>
                </Row>
            </S.Main>
            <S.Main>
                <Row className="g-2">
                    <Col md={6} sm={12}>
                        <S.ComPlano>
                            <S.Label>Fale Mais 30</S.Label>
                            <S.Valor>0,00</S.Valor>
                            <S.ButtonAssinar>Eu Quero</S.ButtonAssinar>
                        </S.ComPlano>
                    </Col>
                    <Col md={6} sm={12} className={`my-auto`}>
                        <S.SemPlano>
                            <S.Label>Sem Plano</S.Label>
                            <S.Valor>125,00</S.Valor>
                        </S.SemPlano>
                    </Col>
                </Row>
            </S.Main>
        </Container>
    )
}

export default Login

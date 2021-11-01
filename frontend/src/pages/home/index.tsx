import React, { useEffect, useState } from 'react'

import { Input, Select } from '../../common/components'
import logo from '../../common/assets/images/LOGOMARCA_VXTEL.svg'
import { Container, Row, Col } from 'react-bootstrap'
import BD from '../../main/services/dados.json'
import { IPlanos, ILocais, ILocal } from '../../common/interfaces/dados'
import formatCurrencyLocal from '../../common/utils/formatCurrency'

import * as S from './styled'

const Home = (): JSX.Element => {
    const [origem, setOrigem] = useState('0')
    const [destino, setDestino] = useState('')
    const [tempo, setTempo] = useState(0)
    const [plano, setPlano] = useState(0)
    const [valorDestino, setValorDestino] = useState(0.0)
    const [valorComPlano, setValorPlano] = useState(0.0)
    const [valorSemPlano, setValorSemPlano] = useState(0.0)

    const Origens = BD.dados.map((x: ILocais) => x.origem).sort() || []
    const Destinos =
        BD.dados
            .filter((dados) => dados.origem === origem)
            .map((x: ILocais) => x.destinos)
            .sort()[0] || []

    function renderOrigens() {
        return Origens.map((origem: string) => (
            <option key={`o-${origem}`} value={origem}>
                {origem}
            </option>
        ))
    }
    function renderDestinos() {
        return Destinos.map((dados: ILocal) => (
            <option key={`d-${dados.destino}`} value={dados.destino}>
                {dados.destino}
            </option>
        ))
    }
    const exibeResult = valorSemPlano > 0 && plano > 0 && destino !== ''

    const reset = () => {
        setDestino('0')
        setValorDestino(0.0)
        setValorSemPlano(0.0)
        setValorPlano(0.0)
        setTempo(0)
    }
    const calcularValores = () => {
        const excedente = plano > tempo ? 0 : tempo - plano

        setValorSemPlano(tempo * +valorDestino)
        setValorPlano(excedente * +valorDestino)
    }
    useEffect(() => {
        calcularValores()
    }, [])
    useEffect(() => {
        setValorDestino(Destinos?.filter((dados) => dados.destino === destino).map((x: ILocal) => x.valor)[0] || 0)
        calcularValores()
    }, [origem, plano, tempo, destino])
    useEffect(() => {
        reset()
    }, [origem])
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
                            <option value={`0`}>...</option>
                            {renderOrigens()}
                        </Select>
                    </Col>
                    <Col xs={12} sm={2}>
                        <Select label={`Destino`} value={destino} onChange={(e) => setDestino(e.target.value)}>
                            <option value={`0`}>...</option>
                            {renderDestinos()}
                        </Select>
                    </Col>

                    <Col xs={12} sm={3}>
                        <Input
                            type="number"
                            value={tempo}
                            placeholder={`...`}
                            label={`Duração:Min`}
                            onChange={(e) => setTempo(+e.target.value)}
                        />
                    </Col>
                </Row>
                <Row className={`my-5`}>
                    <Col xs={12} lg={{ span: 4, offset: 4 }}>
                        <S.SelecionePlano label={`Selecione o Plano`} onChange={(e) => setPlano(+e.target.value)}>
                            <option value={0}>...</option>
                            {BD.planos.map((plano: IPlanos) => (
                                <option key={plano.franquia} value={plano.franquia}>
                                    {plano.nome}
                                </option>
                            ))}
                        </S.SelecionePlano>
                    </Col>
                </Row>
            </S.Main>
            {exibeResult && (
                <S.Main>
                    <Row className="g-2">
                        <Col md={6} sm={12}>
                            <S.ComPlano>
                                <S.Label>Fale Mais {plano}</S.Label>
                                <S.Valor>{formatCurrencyLocal(valorComPlano)}</S.Valor>
                                <S.ButtonAssinar>Eu Quero</S.ButtonAssinar>
                            </S.ComPlano>
                        </Col>
                        <Col md={6} sm={12} className={`my-auto`}>
                            <S.SemPlano>
                                <S.Label>Sem Plano</S.Label>
                                <S.Valor>{formatCurrencyLocal(valorSemPlano)}</S.Valor>
                            </S.SemPlano>
                        </Col>
                    </Row>
                </S.Main>
            )}
        </Container>
    )
}

export default Home

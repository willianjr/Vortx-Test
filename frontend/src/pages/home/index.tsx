import React, { useEffect, useState } from 'react'
import logo from '../../common/assets/images/LOGOMARCA_VXTEL.svg'
import { Container, Row, Col } from 'react-bootstrap'
import { Input, Select } from '../../common/components'
import formatCurrencyLocal from '../../common/utils/formatCurrency'
import tarifasService from '../../main/services/tarifas'
import planosService from '../../main/services/planos'
import * as S from './styled'
import { IPlano } from '../../common/interfaces/planos'
import { FaArrowAltCircleUp, FaMedal } from 'react-icons/fa'

const Home = (): JSX.Element => {
    const [origem, setOrigem] = useState('')
    const [origens, setOrigens] = useState([])
    const [destino, setDestino] = useState('')
    const [destinos, setDestinos] = useState([])
    const [tempo, setTempo] = useState(0)
    const [plano, setPlano] = useState(0)
    const [planos, setPlanos] = useState([])
    const [valorTarifa, setvalorTarifa] = useState(0.0)

    const [valorComPlano, setValorPlano] = useState(0.0)
    const [valorSemPlano, setValorSemPlano] = useState(0.0)
    const [scroll, setScroll] = useState(0)
    const [windowHeight, setWidowHeight] = useState(0)

    async function getPlanos() {
        const Planos = await planosService.getAll()
        setPlanos(Planos.list)
    }
    async function getOrigens() {
        const Origens = await tarifasService.getOrigens()
        setOrigens(Origens)
    }
    async function getValorTarifa(origem: string, destino: string) {
        if (origem && destino) {
            const Valor: number = await tarifasService.getValorTarifa(origem, destino)
            setvalorTarifa(Valor)
        } else {
            setvalorTarifa(0)
        }
    }
    async function getDestinos() {
        if (origem) {
            const Destinos = await tarifasService.getDestinos(origem)
            setDestinos(Destinos)
        }
    }
    function renderOrigens() {
        return origens.map((dados: string) => (
            <option key={`o-${dados}`} value={dados}>
                {dados}
            </option>
        ))
    }
    function renderDestinos() {
        return destinos.map((dados: string) => (
            <option key={`d-${dados}`} value={dados}>
                {dados}
            </option>
        ))
    }
    function renderPlanos() {
        return planos.map((list: IPlano) => (
            <option key={`p-${list.franquia}`} value={list.franquia}>
                {list.nome}
            </option>
        ))
    }
    const exibeResult = valorSemPlano > 0 && plano > 0 && destino !== ''

    const reset = () => {
        setDestino('')
        setDestinos([])
        setTempo(0)
        setvalorTarifa(0.0)
        setValorPlano(0.0)
        setValorSemPlano(0.0)
        setScroll(0)
        setWidowHeight(0)
    }
    const scrollAndAnimation = (): void => {
        const titleElement = document.getElementById('precos')
        titleElement?.scrollIntoView({ behavior: 'smooth' })
    }
    const calcularValores = () => {
        const excedente = plano > tempo ? 0 : tempo - plano
        setValorSemPlano(tempo * +valorTarifa)
        setValorPlano(excedente * +valorTarifa * 1.1)
        scrollAndAnimation()
    }
    const controlScrollWindow = () => {
        document.addEventListener('scroll', () => {
            setScroll(window.scrollY)
        })
        document.addEventListener('resize', () => {
            setWidowHeight(window.scrollY)
        })
    }
    const handleDestino = (destino: string) => {
        setDestino(destino)
        getValorTarifa(origem, destino)
    }
    const goToTop = (): void => {
        const titleElement = document.getElementById('topo')
        titleElement?.scrollIntoView({ behavior: 'smooth' })
    }
    useEffect(() => {
        controlScrollWindow()
        getOrigens()
        getPlanos()
        return () => {
            reset()
            setOrigem('')
            setOrigens([])
            setPlano(0)
            setPlanos([])
        }
    }, [])
    useEffect(() => {
        calcularValores()
    }, [origem, plano, tempo, destino])
    useEffect(() => {
        reset()
        getDestinos()
    }, [origem])
    return (
        <Container>
            <S.Main id={`topo`}>
                <img src={logo} width={406} className="App-logo img-fluid" alt="logo" />

                <S.Info>
                    <S.Titulo>Sempre é vantajoso usar o plano Fale Mais</S.Titulo>
                    <S.SubTitulo>
                        Simule agora mesmo a sua ligação e veja que pode sair de graça com um plano Fale Mais
                    </S.SubTitulo>
                </S.Info>
                <Row className="gx-2">
                    <Col xs={12} sm={{ span: 2, offset: 3 }}>
                        <Select secondary="false" label={`Origem`} onChange={(e) => setOrigem(e.target.value)}>
                            <option value={``}>...</option>
                            {renderOrigens()}
                        </Select>
                    </Col>
                    <Col xs={12} sm={2}>
                        <Select secondary="false" label={`Destino`} onChange={(e) => handleDestino(e.target.value)}>
                            <option value={``}>...</option>
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
                        <Select
                            secondary="true"
                            label={`Selecione o Plano`}
                            onChange={(e) => setPlano(+e.target.value)}>
                            <option value={0}>...</option>
                            {renderPlanos()}
                        </Select>
                    </Col>
                </Row>
            </S.Main>
            {exibeResult && (
                <S.Main id={`precos`}>
                    {scroll > windowHeight && (
                        <S.Voltar onClick={() => goToTop()} className={`magictime perspectiveRightReturn`}>
                            <FaArrowAltCircleUp />
                        </S.Voltar>
                    )}

                    <S.ImagemTwo
                        src={logo}
                        width={406}
                        className={`App-logo img-fluid ${scroll > windowHeight ? 'magictime puffIn' : ''}`}
                        alt="logo"
                    />
                    <Row className="g-2">
                        <Col md={6} sm={12}>
                            <S.ComPlano
                                className={`col-md-12 ${scroll > windowHeight ? 'magictime spaceInRight' : ''}`}>
                                <S.Label>
                                    <FaMedal />
                                    Fale Mais {plano}
                                </S.Label>
                                <S.Valor>{formatCurrencyLocal(valorComPlano)}</S.Valor>
                                <S.ButtonAssinar>Eu Quero</S.ButtonAssinar>
                            </S.ComPlano>
                        </Col>
                        <Col md={6} sm={12} className={`my-auto`}>
                            <S.SemPlano className={`col-md-12 ${scroll > windowHeight ? 'magictime spaceInLeft' : ''}`}>
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

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, BgElipse, BgNeural } from '../common/assets/styles/global'

import { Routes } from './Routes'
import Themes from '../common/assets/styles/themes'
import { Rodape } from '../common/components'
import bgNeural from '../common/assets/images/bgNeural.svg'

function App() {
    const history = createBrowserHistory()
    return (
        <ThemeProvider theme={Themes.default}>
            <GlobalStyle />
            <BgElipse />
            <BgNeural>
                <img src={bgNeural} />
            </BgNeural>
            <Router history={history}>
                <Routes />
            </Router>
            <Rodape>Todos os Direitos</Rodape>
        </ThemeProvider>
    )
}

export default App

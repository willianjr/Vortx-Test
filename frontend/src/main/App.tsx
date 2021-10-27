import React from 'react'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../common/assets/styles/global'
import Themes from '../common/assets/styles/themes'

import logo from '../common/assets/images/LOGOMARCA_VXTEL.svg'

function App() {
    return (
        <ThemeProvider theme={Themes.default}>
            <GlobalStyle />
            <img src={logo} className="App-logo" alt="logo" />
        </ThemeProvider>
    )
}

export default App

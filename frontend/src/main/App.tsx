import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, BgElipse, BgNeural, Content } from '../common/assets/styles/global'
import Themes from '../common/assets/styles/themes'

import { Input, Select } from '../common/components'
import logo from '../common/assets/images/LOGOMARCA_VXTEL.svg'
import bgNeural from '../common/assets/images/bgNeural.svg'

function App() {
    return (
        <ThemeProvider theme={Themes.default}>
            <GlobalStyle />
            <BgElipse />
            <BgNeural>
                <img src={bgNeural} />
            </BgNeural>
            <Content>
                <img src={logo} width={406} className="App-logo" alt="logo" />
                <Input placeholder={`Duração:Min`} label={`Duração:Min`} />
                <Select>
                    <option value={30}>Plano Mais 30</option>
                    <option value={60}>Plano Mais 60</option>
                    <option value={120}>Plano Mais 120</option>
                </Select>
            </Content>
        </ThemeProvider>
    )
}

export default App

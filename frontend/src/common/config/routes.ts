export interface IRoute {
    path: string
    name: string
    exact?: boolean
    component: () => JSX.Element
    props?: RouteComponentProps
    auth?: boolean
    level?: number
    isLogado?: boolean
}

import { RouteComponentProps } from 'react-router'

//Pages
import { Home, Error404 } from '../../pages'

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        exact: true,
        auth: false,
    },
    {
        path: '*',
        name: 'Error',
        component: Error404,
        exact: true,
    },
]

export default routes

import React from 'react'
import { Switch, Route } from 'react-router-dom'

import routes from '../common/config/routes'

export const Routes = (): JSX.Element => {
    return (
        <Switch>
            {routes.map((route, index) => {
                return <Route key={index} path={route.path} exact={route.exact} render={() => <route.component />} />
            })}
        </Switch>
    )
}

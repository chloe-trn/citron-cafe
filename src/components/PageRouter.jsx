import React from 'react'
import { HashRouter as Switch, Route} from 'react-router-dom'
import routes from '../routes'

function PageRouter(){
    return(
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    )
}

export default PageRouter
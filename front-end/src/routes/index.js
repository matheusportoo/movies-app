import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import * as S from './style'
import Routes from './routes'

export const Links = () => {
  return (
    <S.Links>
      { Routes.filter(({ label }) => label)
        .map(({path, label }, index) => (<Link
          to={path}
          children={label}
          key={`navigation-links-${index}`}
      />))
      }
    </S.Links>
  )
}

export const Pages = () => {
  return (
    <Switch>
      { Routes.map(({ path, component }, index) =>
        <Route
          exact
          path={path}
          component={component}
          key={`navigation-pages-${index}`}/>
      )}
    </Switch>
  )
}

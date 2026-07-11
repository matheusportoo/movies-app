import { Routes, Route } from 'react-router-dom'

import routes from './routes'

export const Pages = () => {
  return (
    <Routes>
      {routes.map(({ path, component: Component }, index) => (
        <Route key={`navigation-pages-${index}`} path={path} element={<Component />} />
      ))}
    </Routes>
  )
}

import React from 'react'
import { Route, Routes } from 'react-router'
import { publicRoutes } from '../../routes'

const AppRouter = () => {
  return (
    <Routes>
      {
        publicRoutes.map(({path, title, Component}) =>
          <Route key={path} path={path} title={title} element={<Component/>} exact/> 
        )
      }
    </Routes>
  )
}

export default AppRouter
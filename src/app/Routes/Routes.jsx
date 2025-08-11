import React from 'react'
import { ROUTES } from '../config/constants/ROUTES'
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import { styled } from 'styled-components'
import { returnGlobalStyle } from '../config/style'
import { Navigation } from '../../widgets/Navigation/ui/Navigation'

export const RoutesApp = () => {
  const location = useLocation();
  const GlobalStyled = returnGlobalStyle()

  const showNavigationRoutes = ["/", "/tasks", "/circle", "/friends", "/user", "/connectWallet", "/friends/referrals", "/user/rating"];
  const shouldShowNavigation = showNavigationRoutes.includes(location.pathname);

  return (
    <>
      <Styled.content>
        <Routes>
          {ROUTES.routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
        {shouldShowNavigation && <Navigation />}
      </Styled.content>
      <GlobalStyled /> 
    </>
  )
}

const Styled = {
  content: styled.div`
    position: relative;
    padding: 30px 20px;
    padding-bottom: 132px;
  `
}

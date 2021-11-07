import React, { FC } from 'react'
import { Footer } from './footer'
import { Header } from './Header'

export const Layout: FC = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

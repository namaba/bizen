import React, { PropsWithChildren } from 'react'
import Header from './Header'
import SubNav from './SubNav'
import Footer from './footer'

export type AppPageLayoutProps = PropsWithChildren<{}>

const AppPageLayout = ({ children }: AppPageLayoutProps) => {
  return (
    <>
      <Header />
      <SubNav />
      {children}
      <Footer />
    </>
  )
}

export default AppPageLayout

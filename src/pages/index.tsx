import React from 'react'
import { Box, chakra } from '@chakra-ui/react'
import { Header } from 'src/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <Box>
        <chakra.h1 color="tomato">Hello World</chakra.h1>
      </Box>
    </>
  )
}

import { Box, Link, SimpleGrid, SimpleGridProps, Stack } from '@chakra-ui/react'
import React from 'react'
import { FooterHeading } from './FooterHeading'

export const LinkGrid = (props: SimpleGridProps) => (
  <SimpleGrid columns={2} {...props}>
    <Box minW="130px">
      <FooterHeading mb="4">Product</FooterHeading>
      <Stack>
        <Link>How it works</Link>
        <Link>Pricing</Link>
        <Link>Use Cases</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <FooterHeading mb="4">Legal</FooterHeading>
      <Stack>
        <Link>Privacy</Link>
        <Link>Terms</Link>
        <Link>License</Link>
      </Stack>
    </Box>
  </SimpleGrid>
)

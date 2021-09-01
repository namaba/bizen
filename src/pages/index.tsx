import React from 'react'
import {
  Box,
  Center,
  chakra,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  VStack,
} from '@chakra-ui/react'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/footer'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <Box bg="gray.100">
        <Stack p={5} spacing={6} maxW="container.lg">
          <QandA />
          <Column />
        </Stack>
      </Box>
      <Footer />
    </>
  )
}

const Column = () => <CardList title="コラム" />

const QandA = () => <CardList title="質問" />

const CardList = ({ title }: { title: string }) => (
  <>
    <Heading>{title}</Heading>
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacingX={{ base: 1, md: 8 }}
      spacingY={4}
      w="full"
    >
      <Box boxShadow="sm" p="6" rounded="md" bg="white">
        Base
      </Box>
      <Box boxShadow="sm" p="6" rounded="md" bg="white">
        Base
      </Box>
      <Box boxShadow="sm" p="6" rounded="md" bg="white">
        Base
      </Box>
      <Box boxShadow="sm" p="6" rounded="md" bg="white">
        Base
      </Box>
      <Box boxShadow="sm" p="6" rounded="md" bg="white">
        Base
      </Box>
      <Box boxShadow="sm" p="6" rounded="md" bg="white">
        Base
      </Box>
    </SimpleGrid>
    <Center>
      <NextLink href="/">
        <a>
          もっとみる
          <ArrowForwardIcon />
        </a>
      </NextLink>
    </Center>
  </>
)

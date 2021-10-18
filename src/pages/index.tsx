import { ArrowForwardIcon } from '@chakra-ui/icons'
import {
  Box,
  Center,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import AppPageLayout from 'src/components/layout/AppPageLayout'

export default function Home() {
  return (
    <AppPageLayout>
      <Stack p={5} spacing={6} maxW="container.lg" bg="gray.100">
        <QandA />
        <Column />
      </Stack>
    </AppPageLayout>
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
      {[...Array(6)].map((_, i) => {
        return (
          <Box boxShadow="sm" p="6" rounded="md" bg="white" key={i}>
            Base {i}
          </Box>
        )
      })}
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

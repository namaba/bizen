import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Center, Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import AppPageLayout from 'src/components/layout/AppPageLayout'

const Question = () => (
  <AppPageLayout>
    <Stack p={5} spacing={6} maxW="container.lg" bg="gray.100">
      <Heading>Question</Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacingX={{ base: 1, md: 8 }}
        spacingY={4}
        w="full"
      >
        {[...Array(20)].map((_, i) => {
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
    </Stack>
  </AppPageLayout>
)

export default Question

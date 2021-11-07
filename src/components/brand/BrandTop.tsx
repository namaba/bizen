import { Badge, Box, Heading, Text, VStack } from '@chakra-ui/layout'
import { chakra } from '@chakra-ui/system'
import Image from 'next/image'
import React from 'react'
import { brands, Brand } from 'src/data/brand'

const imgSrc = 'cohina'

export const BrandTop = () => {
  return (
    <VStack spacing={8} p={3}>
      <Heading as="h1" size="lg">
        BRAND
      </Heading>
      {/* {brands.map((brand) => (
        <BrandContent brand={brand} key={brand.name} />
      ))} */}
    </VStack>
  )
}

const BrandContent = ({ brand }: { brand: Brand }) => (
  <Box w="full">
    <Image src={`/${imgSrc}.jpg`} width="393px" height="205px" alt="" />
    <Heading as="h3" size="md" mb={2}>
      {brand.name}
    </Heading>
    <Text fontSize="xs">{brand.desc}</Text>
    <chakra.div>
      <Badge ml="1" colorScheme="teal">
        アパレル
      </Badge>
      <Badge ml="1" colorScheme="teal">
        woman
      </Badge>
      <Badge ml="1" colorScheme="teal">
        小柄
      </Badge>
    </chakra.div>
  </Box>
)

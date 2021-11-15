import { Box, chakra, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import React, { VFC } from 'react'
import Image from 'next/image'
import { client } from 'src/lib/client'
import { RatingStar } from 'src/components/snack/RatingStar'
import { MoonIcon } from '@chakra-ui/icons'
import { ShopInfoTable } from 'src/components/snack/SnackInfoTable'

const ShopPage: VFC<any> = ({ snack }) => {
  return (
    <VStack bgColor="gray.200" spacing={4}>
      <MainVisual />
      <ShopInfoTable snack={snack} />
    </VStack>
  )
}

export default ShopPage

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/snacks/${params?.id}`
  )

  const data = await res.json()
  return {
    props: {
      snack: data,
    },
  }
}

const MainVisual = () => {
  const fee = 2000
  const minFee = fee.toLocaleString('ja-JP', {
    style: 'currency',
    currency: 'JPY',
  })
  const maxFee = fee.toLocaleString('ja-JP', {
    style: 'currency',
    currency: 'JPY',
  })

  return (
    <Box bg="white" w="full">
      <Text fontSize="xl" fontWeight="bold" textAlign="center" p={3}>
        Club Bloom
      </Text>
      <Image
        src={`/bloom_1.png`}
        alt="cohina"
        width="500px"
        height="200px"
        objectFit="cover"
      />
      <Stack px={3} pt={2} pb={4}>
        <RatingStar />
        <HStack>
          <MoonIcon color="white" bgColor="blue.600" p="2px" />
          <Text fontSize="sm">{`${minFee}〜${maxFee}`}</Text>
        </HStack>
        <Text>
          ボックス席のみの落ち着いた店内でプライベートなひと時を過したり、時には接待などのビジネスシーンでもご利用頂けます♪♪
        </Text>
      </Stack>
    </Box>
  )
}

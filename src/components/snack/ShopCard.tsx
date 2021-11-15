import { MoonIcon } from '@chakra-ui/icons'
import { Avatar, Box, HStack, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { RatingStar } from './RatingStar'

export const ShopCard: React.VFC<{}> = () => {
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
      <Box px={3} py={2}>
        <Text fontSize="xl" fontWeight="bold">
          Club Bloom
        </Text>
        <Text fontSize="xs" color="gray.500">
          上野駅 745m / 東京都文京区湯島3-38-10 ハニービル 2階
        </Text>
      </Box>
      <HStack spacing="2px">
        <Box>
          <Image
            src={`/bloom_1.png`}
            alt="cohina"
            width="200px"
            height="200px"
            objectFit="cover"
          />
        </Box>
        <Box>
          <Image
            src={`/bloom_2.png`}
            alt="cohina"
            width="200px"
            height="200px"
            objectFit="cover"
          />
        </Box>
        <Box>
          <Image
            src={`/fabbian1.jpeg`}
            alt="cohina"
            width="200px"
            height="200px"
            objectFit="cover"
          />
        </Box>
      </HStack>
      <Stack px={3} pt={2} pb={4}>
        <RatingStar />
        <HStack>
          <MoonIcon color="white" bgColor="blue.600" p="2px" />
          <Text fontSize="sm">{`${minFee}〜${maxFee}`}</Text>
        </HStack>
        <Text>
          ボックス席のみの落ち着いた店内でプライベートなひと時を過したり、時には接待などのビジネスシーンでもご利用頂けます♪♪
        </Text>
        <Stack>
          <HStack alignItems="baseline">
            <Avatar size="sm" src="https://bit.ly/broken-link" />
            <Box bgColor="gray.100" p={3} rounded="md">
              ママもいい人だし、他の働いている方たちもいい人で、とても寛げます🎵
            </Box>
          </HStack>
          <HStack alignItems="flex-start">
            <Avatar size="sm" src="https://bit.ly/broken-link" />
            <Box bgColor="gray.100" p={3} rounded="md">
              ママもいい人だし、他の働いている方たちもいい人で、とても寛げます🎵
            </Box>
          </HStack>
          <HStack alignItems="flex-start">
            <Avatar size="sm" src="https://bit.ly/broken-link" />
            <Box bgColor="gray.100" p={3} rounded="md">
              ママもいい人だし、他の働いている方たちもいい人で、とても寛げます🎵
            </Box>
          </HStack>
        </Stack>
      </Stack>
    </Box>
  )
}

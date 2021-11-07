import React from 'react'
import { Box, HStack, Text } from '@chakra-ui/react'
import Rating from 'react-rating'
import { StarIcon } from '@chakra-ui/icons'

export const RatingStar = () => (
  <HStack>
    <Rating
      emptySymbol={<StarIcon color="gray.300" />}
      fullSymbol={<StarIcon color="orange.500" />}
      initialRating={2.5}
      readonly
    />
    <Text color="red.500" fontWeight="bold">
      3.5
    </Text>
  </HStack>
)

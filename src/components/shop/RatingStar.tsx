import ReactStars from 'react-rating-stars-component'
import React from 'react'
import { Box, HStack, Text } from '@chakra-ui/react'

export const RatingStar = () => (
  <HStack>
    <ReactStars
      isHalf={true}
      value={3.5}
      count={5}
      size={20}
      edit={false}
      activeColor="#fa0"
    />
    <Text color="red.500" fontWeight="bold">
      3.5
    </Text>
  </HStack>
)

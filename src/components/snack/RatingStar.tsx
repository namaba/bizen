import { HStack, Text } from '@chakra-ui/react'
import React from 'react'
import StarRatingComponent from 'react-star-rating-component'

export const RatingStar = () => (
  <HStack>
    <StarRatingComponent
      name="rate1"
      starCount={5}
      value={4}
      // onStarClick={() => alert('テスト')}
    />
    <Text color="red.500" fontWeight="bold">
      3.5
    </Text>
  </HStack>
)

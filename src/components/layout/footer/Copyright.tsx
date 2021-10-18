import { Text, TextProps } from '@chakra-ui/react'

export const Copyright = (props: TextProps) => (
  <Text>&copy; {new Date().getFullYear()} Bizen, Inc rights reserved.</Text>
)

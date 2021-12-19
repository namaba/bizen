import { Box, chakra, Link, Table, Tbody, Td, Text, Tr } from '@chakra-ui/react'
import React from 'react'
import GoogleMap from 'src/components/ui/GoogleMap'

export const ShopInfoTable = ({ snack }: { snack: any }) => {
  return (
    <Box bgColor="white" w="full">
      <Text
        borderBottom="1px solid"
        borderBottomColor="gray.200"
        fontWeight="bold"
        py={2}
        px={4}
      >
        店舗情報
      </Text>
      <GoogleMap />
      <Table variant="simple" size="sm">
        <Tbody>
          <Tr>
            <Td whiteSpace="nowrap">店舗名</Td>
            <Td>{snack.name}</Td>
          </Tr>
          <Tr>
            <Td whiteSpace="nowrap">住所</Td>
            <Td>{snack.vicinity}</Td>
          </Tr>
          <Tr>
            <Td whiteSpace="nowrap">営業時間</Td>
            <Td>
              {snack.weekday_text.map((day: string, idx: number) => (
                <chakra.p key={idx}>{day}</chakra.p>
              ))}
            </Td>
          </Tr>
          <Tr>
            <Td whiteSpace="nowrap">HP</Td>
            <Td maxW="250px">
              <Link href={snack.website} color="teal.500" isExternal>
                {snack.website}
              </Link>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )
}

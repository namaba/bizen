import { ChevronDownIcon, Search2Icon, SettingsIcon } from '@chakra-ui/icons'
import {
  Box,
  Text,
  Flex,
  Stack,
  Button,
  useColorModeValue,
  useBreakpointValue,
  HStack,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react'
import React, { FC } from 'react'

const MenuBtn = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<SettingsIcon w={5} h={5} />}
        bg={'white'}
      />

      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  )
}

export const Header = () => {
  return (
    <HStack
      justify="space-between"
      px={{ base: 3, md: 5 }}
      py={3}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={'gray.200'}
    >
      <Heading size="lg">Bizen</Heading>
      <HStack>
        <Search2Icon w={5} h={5} mr={3} />
        <Button colorScheme="orange" size="sm">
          質問する
        </Button>
        <MenuBtn />
      </HStack>
    </HStack>
  )
}

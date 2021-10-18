import { Search2Icon, SettingsIcon } from '@chakra-ui/icons'
import {
  Button,
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import React from 'react'

const MenuSection = () => {
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

const Header = () => (
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
      <MenuSection />
    </HStack>
  </HStack>
)

export default Header

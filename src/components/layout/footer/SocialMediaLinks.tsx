import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import React from 'react'

export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton
      as="a"
      href="#"
      aria-label="GitHub"
      icon={<FaGithub fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="#"
      aria-label="Twitter"
      icon={<FaTwitter fontSize="20px" />}
    />
  </ButtonGroup>
)

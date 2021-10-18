import { HStack, Link } from '@chakra-ui/react'

const SubNav = () => (
  <HStack
    position="sticky"
    top="0"
    bg="white"
    px={{ base: 3, md: 5 }}
    spacing={5}
  >
    {['Top', 'Questions', 'Column'].map((title) => (
      <Link href="/" p={2} fontWeight="bold" key={title}>
        {title}
      </Link>
    ))}
  </HStack>
)

export default SubNav

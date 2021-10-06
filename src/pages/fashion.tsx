import { Badge, Box, Divider, VStack } from '@chakra-ui/layout'
import { Link } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import React, { VFC } from 'react'
import { client } from 'src/lib/client'
import { Blog, BlogListGetResponse } from 'src/types/blog'

type BlogCardProps = {
  blog: Blog
}

const BlogCard: VFC<BlogCardProps> = ({ blog }) => (
  <Link w="345px" href={blog.url}>
    <Box position="relative" w="345px" h="240px" borderRadius="full">
      <Image
        src={blog.topImage.url}
        alt="サイトトップの画像"
        layout="fill"
        objectFit="contain"
      />
    </Box>
    <Box p="3">
      <Box d="flex" alignItems="baseline">
        <Badge borderRadius="full" px="2" colorScheme="teal">
          Fashion
        </Badge>
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
        >
          Women &bull; 小柄
        </Box>
      </Box>
      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
        COHINA
      </Box>
      <Box>
        あなたに陽が当たる服 <br />
        COHINAは“小柄女性の美しさ”を追求し
        日々を自分らしく過ごせる服を贈るブランドです。
      </Box>
    </Box>
    <Divider orientation="horizontal" />
  </Link>
)

type FashionProps = {
  blogs: Blog[]
}

const Fashion: VFC<FashionProps> = ({ blogs }) => {
  return (
    <VStack py="4" spacing="3">
      {blogs.map((blog, idx) => (
        <>
          <BlogCard blog={blog} key={idx} />
        </>
      ))}
    </VStack>
  )
}

export default Fashion

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get<BlogListGetResponse>({ endpoint: 'blog' })

  return {
    props: {
      blogs: data.contents,
    },
  }
}

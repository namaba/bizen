import { GetStaticPaths, GetStaticProps } from 'next'
import { client } from '../../lib/client'
import Image from 'next/image'
import { Blog, BlogListGetResponse } from 'src/types/blog'
import React from 'react'
import { Badge, Box, Flex, HStack, SimpleGrid } from '@chakra-ui/layout'

export default function BlogId({ blog }: { blog: Blog }) {
  return (
    <Box as="main">
        <Box w="46%" bg="tomato" height="80px" m="2%">
          {/* <Image
            src={blog.topImage.url}
            alt="トップ画像"
            width="100px"
            height="100px"
          /> */}
        </Box>
        <Box w="46%" bg="tomato" height="80px" m="2%"></Box>
        <Box w="45%" bg="tomato" height="80px"></Box>
        <Box w="45%" bg="tomato" height="80px"></Box>
        <Box w="45%" bg="tomato" height="80px"></Box>
      {/* <h1>{blog.title}</h1>
      <p>{blog.updatedAt}</p>
      <p>{blog.category && blog.category.name}</p>
      <Image
        src={blog.topImage.url}
        alt="トップ画像"
        width="500"
        height="500"
      />

      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      /> */}
    </Box>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get<BlogListGetResponse>({ endpoint: 'blog' })

  const paths = data.contents.map((content) => ({
    params: { id: content.id },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id
  const data = await client.get<Blog>({
    endpoint: 'blog',
    contentId: id as string,
  })

  return {
    props: {
      blog: data,
    },
  }
}

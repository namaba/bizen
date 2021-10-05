import { Box } from '@chakra-ui/layout'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import React, { VFC } from 'react'
import { client } from 'src/lib/client'
import { Blog, BlogListGetResponse } from 'src/types/blog'

type BlogCardProps = {
  blog: Blog
}

const BlogCard: VFC<BlogCardProps> = ({ blog }) => (
  <Box>
    <Box position="relative" w="690px" h="480px" borderRadius="full">
      <Image
        src={blog.topImage.url}
        alt="サイトトップの画像"
        layout="fill"
        objectFit="contain"
      />
    </Box>
    <Box>テスト</Box>
  </Box>
)

type FashionProps = {
  blogs: Blog[]
}

const Fashion: VFC<FashionProps> = ({ blogs }) => {
  return (
    <Box p="5">
      {blogs.map((blog, idx) => (
        <>
          <BlogCard blog={blog} key={idx} />
        </>
      ))}
    </Box>
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

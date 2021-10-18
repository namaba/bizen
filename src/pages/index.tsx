import { Box, chakra } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'
import { Footer } from 'src/components/footer'
import { Header } from 'src/components/Header'
import { Blog, BlogListGetResponse } from 'src/types/blog'
import { client } from '../lib/client'

export default function Home({ blogs }: { blogs: Blog[] }) {
  return (
    <>
      <Header />
      <Box>
        <chakra.h1 color="tomato">Hello World</chakra.h1>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Box>
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get<BlogListGetResponse>({ endpoint: 'blog' })

  return {
    props: {
      blogs: data.contents,
    },
  }
}

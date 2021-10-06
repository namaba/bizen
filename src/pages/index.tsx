import React, { ReactHTML } from 'react'
import { Box, chakra } from '@chakra-ui/react'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/footer'
import Link from 'next/link'
import { client } from '../lib/client'
import { GetStaticProps } from 'next'
import { Blog, BlogListGetResponse } from 'src/types/blog'

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

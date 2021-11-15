import { Box, chakra, VStack, Text, HStack } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Footer } from 'src/components/footer'
import { Header } from 'src/components/Header'
import { Blog, BlogListGetResponse } from 'src/types/blog'
import { client } from '../lib/client'
import { ShopCard } from 'src/components/snack'

export default function Home() {
  return (
    <VStack bgColor="gray.200" spacing={4}>
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
    </VStack>
  )
}

// microCMSのデータを使う場合
// export default function Home({ blogs }: { blogs: Blog[] }) {
//   return (
//     <>
//       <Header />
//       <Box>
//         <chakra.h1 color="tomato">Hello World</chakra.h1>
//         <ul>
//           {blogs.map((blog) => (
//             <li key={blog.id}>
//               <Link href={`/blog/${blog.id}`}>
//                 <a>{blog.title}</a>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </Box>
//       <Footer />
//     </>
//   )
// }

// export const getStaticProps: GetStaticProps<{ hogehoge: any }> = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}`)
//   const data = await res.json()
//   return {
//     props: {
//       hogehoge: data.hogehoge,
//     },
//   }

// const data = await client.get<BlogListGetResponse>({ endpoint: 'blog' })
// return {
//   props: {
//     blogs: data.contents,
//   },
// }
// }

import { GetStaticPaths, GetStaticProps } from 'next'
import { client } from '../../lib/client'

export default function BlogId({ blog }: { blog: Blog }) {
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.pulishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </main>
  )
}

type Blog = {
  id: string
  title: string
  body: string
  pulishedAt: string
}

type BlogListReponse = {
  contents: Blog[]
  totalCount: string
  offset: number
  limit: number
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get<BlogListReponse>({ endpoint: 'blog' })

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

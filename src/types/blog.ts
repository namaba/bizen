import { Category } from './category'
import {
  MicroCmsImageItem,
  MicroCmsItemGetRes,
  MicroCmsListGetRes,
} from './microcms'

type BlogSchema = {
  title: string
  body: string
  category: Category
  topImage: MicroCmsImageItem
  url: string
}

export type Blog = MicroCmsItemGetRes<BlogSchema>

export type BlogListGetResponse = MicroCmsListGetRes<Blog>

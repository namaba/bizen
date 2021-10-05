import { MicroCmsItemGetRes } from './microcms'

type CategorySchema = {
  id: string
  name: string
}

export type Category = MicroCmsItemGetRes<CategorySchema>

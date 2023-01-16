export type PostType = {
  author: AuthorType
  commentCount: number
  comments: string[]
  content: string
  createdAt: string
  heartCount: number
  id: string
  image: string
  updatedAt: string
}

export type AuthorType = {
  accountname: string
  follower: string[]
  followerCount: number
  followeing: string[]
  followeingCount: number
  image?: string
  intro?: string
  isfollow?: boolean
  username: string
  _id: string
}

export type PostsType = PostType[]

export type PostDetailType = {
  id: string
  content: string
  image: string
  createdAt: string
  updatedAt: string
  hearted: boolean
  heartCount: number
  commentCount: number
  author: AuthorType
}

export type PostCommentType = {
  id: string
  content: string
  createdAt: string
  author: AuthorType
}

export type PostCommentsType = PostCommentType[]

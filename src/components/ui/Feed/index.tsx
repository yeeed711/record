import Banner from './Banner'
import PostCards from './PostCards'
import type { ReactElement } from 'react'

const Feed = (): ReactElement => {
  return (
    <>
      <Banner />
      <div>안녕하세요 반갑습니다</div>
      <div>카테고리</div>
      <PostCards />
    </>
  )
}

export default Feed

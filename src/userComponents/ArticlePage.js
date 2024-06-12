//View用component

import React from 'react'

import { ArticleInfomation, ArticleList, UniHeader } from './Article'

function ArticlePage() {
  return (
    <div>
      <section>
        <UniHeader />
      </section>
      <section className=" mx-[65vw]">
        <ArticleInfomation />
        <ArticleList />
      </section>
    </div>
  )
}

export default ArticlePage

//インポート
import React from 'react'
//component
import { InputItems } from '../../components/MaterialComponent'
import { UnivividHeader } from '../../components/LayoutComponent'

//　記事作成画面
function CreateArticlePage() {
  return (
    <section>
    <UnivividHeader title="記事制作" returnCol={1} link="/unihome" bgCol={true} />
    <div className='pt-[105px] mb-[50px]'>
      <InputItems />
    </div>
    <div className='flex justify-end pr-[6vw]'>
      <button className='text-[#427D9D] font-bold text-[20px] mb-[30px]'>確認画面へ&gt;&gt;</button>
    </div>
    </section>
  )
}

export default CreateArticlePage
//インポート
import React from 'react'
//component
import { InputItems } from '../../components/MaterialComponent'
import { UnivividHeader } from '../../components/LayoutComponent'

// 作成した記事の確認画面
function CreateCheckedPage() {
  return (
    <section>
    <UnivividHeader title="記事制作" returnCol={1} link="/createarticle" bgCol={true}/>
    <div className='pt-[105px] mb-[50px]'>
    <InputItems />
    </div>
    <div className='flex justify-end pr-[6vw] mb-[30px]'>
      <button className='text-white text-[18px] font-bold bg-[#427D9D] px-12 py-3 rounded-md'>送信</button>
    </div>
    </section>
  )
}

export default CreateCheckedPage
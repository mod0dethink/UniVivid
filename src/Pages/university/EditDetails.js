//インポート
import React from 'react'
import { Link } from 'react-router-dom'
import { InputItems } from '../../components/MaterialComponent'
import { UnivividHeader } from '../../components/LayoutComponent'
import '../../assets/styles/Dimensions.css'

// 記事編集
function EditDetails() {
  return(
  <section>
  <UnivividHeader title='記事編集' returnCol={1} link='/editonelecture' bgCol={true} />
  <div className='pt-20'>
  <InputItems />
  </div>
  <Link to='/editonelecture'>
  <div className='flex justify-end pr-[6vw]'>
    <button className='font-bold text-[20px] mb-[30px] bg-main text-white py-1 px-10 rounded-md'>送信</button>
  </div>
  </Link>
  </section>
  )
}

export default EditDetails
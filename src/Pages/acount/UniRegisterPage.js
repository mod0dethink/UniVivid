//インポート
import React from 'react'
//component
import { UnivividHeader, Unifooter } from '../../components/LayoutComponent'
import { CreateUniAccountForm } from '../../components/RegisterMaterial'

//学校用登録フォーム
function UniRegisterPage() {
  return (
    <section>
    <div className="from-container">
      <UnivividHeader title="新規登録" returnCol={1} link="/entityselection" bgCol={true} />
      <CreateUniAccountForm />
      <Unifooter />
    </div>
    </section>
  )
}

export default UniRegisterPage
//インポート
import React, { useEffect, useRef } from 'react'
//component
import { UnivividHeader, Unifooter } from '../../components/LayoutComponent'
import { CreateAccountForm } from '../../components/RegisterMaterial'

//個人のアカウント登録フォーム
function RegisterPage() {
  return (
    <section>
    <div className="h-screen flex flex-col justify-between">
      <UnivividHeader title="新規登録" returnCol={1} link="/entityselection" bgCol={true} />
      <CreateAccountForm />
      <Unifooter />
    </div>
    </section>
  )
}

export default RegisterPage
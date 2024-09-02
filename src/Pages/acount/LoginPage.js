//インポート
import React from 'react'
//component
import { UnivividHeader, Unifooter } from '../../components/LayoutComponent'
import { LoginForm } from '../../components/RegisterMaterial'

//ログインフォーム
function LoginPage() {
  return (
    <section>
    <div className="justify-between">
      <UnivividHeader title="ログイン" returnCol={1} link="/" bgCol={true}/>
      <LoginForm />
      <Unifooter />
    </div>
    </section>
  )
}

export default LoginPage
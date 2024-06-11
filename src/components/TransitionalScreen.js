import React from 'react'
import '../assets/styles/test.css'
import { Link } from 'react-router-dom'

function TransitionalScreen() {
  return (
    <div>
      <section className="section-nav">管理用画面</section>
      <section className="section-nav">
        <Link to="/login-component">
          <div className="content">ログイン画面</div>
        </Link>
      </section>
      <section className="section-nav">
        <Link to="/createaccount">
          <div className="content">新規登録画面</div>
        </Link>
      </section>
      <section className="section-nav">
        <Link to="/category">
          <div className="content">カテゴリー画面</div>
        </Link>
      </section>
      <section className="section-nav">
        <Link to="/welcome">
          <div className="content">ようこそ</div>
        </Link>
      </section>
    </div>
  )
}

export default TransitionalScreen

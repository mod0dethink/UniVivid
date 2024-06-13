import React from 'react'
import '../assets/styles/test.css'
import { Link } from 'react-router-dom'

function TransitionalScreen() {
  return (
    <div>
      <section className="section-nav">管理用画面</section>
      <section className="section-nav">
        <Link to="/login">
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
      <section className="section-nav">
        <Link to="/userhome">
          <div className="content">userhome</div>
        </Link>
      </section>
      <section className="section-nav">
        <Link to="/usersettingpsage">
          <div className="content">usersettingpsage</div>
        </Link>
      </section>
      <section className="section-nav">
        <Link to="/universityhome">
          <div className="content">univershome</div>
        </Link>
      </section>
      <section className="section-nav">
        <Link to="/universitysettingspage">
          <div className="content">universitysettingpsage</div>
        </Link>
      </section>
      <section className="section-nav">
        <Link to="/article">
          <div className="content">articlelist</div>
        </Link>
      </section>

      <section className="section-nav">
        <Link to="/articlepage">
          <div className="content">アーティクルのview</div>
        </Link>
      </section>

      <section className="section-nav">
        <Link to="/entitiyselection">
          <div className="content">entitiyselectionのview</div>
        </Link>
      </section>

      <section className="section-nav">
        <Link to="/welcompage">
          <div className="content">welcomPage</div>
        </Link>
      </section>
    </div>
  )
}

export default TransitionalScreen

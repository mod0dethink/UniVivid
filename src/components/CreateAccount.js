import React from 'react'
import '../assets/styles/UnivividStyle.css'
import { EmptyHeader, Unifooter } from './LayoutComponent'

function CreateAccount() {
  return (
    <div className="from-container">
      <section className="margin-section ">
        <div>新規登録</div>
      </section>

      <section className="from-background">
        <div className="from-nav">
          <from>
            <div>
              <p>メールアドレス</p>
              <input type="emaile" name="emaile" placeholder="aaa" />
            </div>

            <div>
              <p>パスワード</p>
              <input type="password" name="password" placeholder="123" />
            </div>

            <div>
              <p>ユーザ名</p>
              <input type="text" name="username" placeholder="abcd" />
            </div>

            <div>
              <button>登録</button>
            </div>
          </from>
        </div>
      </section>

      <section className="margin-section">　　　　　　</section>
    </div>
  )
}

function CreateSchoolAccount() {
  return (
    <div className="from-container">
      <section className="margin-section ">
        <div>新規登録</div>
      </section>

      <section className="from-background">
        <div className="from-nav">
          <from>
            <div>
              <p>メールアドレス</p>
              <input type="emaile" name="emaile" placeholder="aaa" />
            </div>

            <div>
              <p>パスワード</p>
              <input type="password" name="password" placeholder="123" />
            </div>

            <div>
              <p>ユーザ名</p>
              <input type="text" name="username" placeholder="abcd" />
            </div>
            <div>
              <p>学校名</p>
              <input type="text" name="username" placeholder="abcd" />
            </div>
            <div>
              <p>大学URL</p>
              <input type="text" name="username" placeholder="abcd" />
            </div>
            <div>
              <p>寄付ページURL</p>
              <input type="text" name="username" placeholder="abcd" />
            </div>

            <div>
              <button>登録</button>
            </div>
          </from>
        </div>
      </section>

      <section className="margin-section">　　　　　　</section>
    </div>
  )
}

export default CreateAccount
export { CreateSchoolAccount }

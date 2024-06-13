import React from 'react'
import '../assets/styles/UnivividStyle.css'

function LoginForm() {
  return (
    <section className="pt-[150px] bg-{##f3fafb} flex justify-center h-screen">
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
            <button>ログイン</button>
          </div>
        </from>
      </div>
    </section>
  )
}

function CreateAccountForm() {
  return (
    <section className="pt-[150px] bg-{##f3fafb} flex justify-center h-screen">
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
            <button className="bg-[#b4c2c9] text-[#164863] mt-[110px] mb-[25px] text-[35px] font-bold rounded-10px w-[35%]">
              登録
            </button>
          </div>
        </from>
      </div>
    </section>
  )
}

function CreateUniAccountForm() {
  return (
    <section className="pt-[40px] from-background">
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
  )
}

export { LoginForm, CreateAccountForm, CreateUniAccountForm }

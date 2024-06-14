import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/Dimensions.css'
//import PropTypes from 'prop-types'
import ImportImg from '../assets/images/imgImport.png'

function UserMenu(itemData) {
  return (
    <aside className="aside flex-grow-[1] min-w-[300px] bg-[#427D9D] content-center flex flex-col items-center justify-between text-[#ffffff] text-2xl">
      <div className="text-center pt-[50px]">
        <div
          className="rounded-full bg-[#D9D9D9] w-[160px] h-[160px] flex flex-col items-center justify-center"
          style={{
            backgroundImage: `url(${itemData.Pimage})`,
            backgroundSize: `cover`,
            backgroundPosition: `center center`,
          }}
        ></div>
        <div>{itemData.username}</div>
      </div>
      <div>
        <p>マイページ</p>
        <div className="py-3"></div>
        <Link to={itemData.linkpath}>ユーザー設定</Link>
      </div>
      <div></div>
      <div className="py-[50px]">
        <p>ログアウト</p>
      </div>
    </aside>
  )
}

function RootUrl(itemData) {
  return (
    <div className="flex justify-around items-center bg-[#D9D9D9] w-[80%] h-[196px] max-w-[700px] rounded-[20px] border border-solid border-[#9BBEC8] border-[5px]">
      <p className="text-[#164863] text-[36px] font-bold">{itemData.text}</p>
      <img className="w-[150px] -z-[-1]" src={itemData.name} alt="door" />
      <div className="absolute border-t border-dotted border-[#9BBEC8] border-[10px] w-[55vw] max-w-[700px] top-[70%]"></div>
    </div>
  )
}

/*onChange 要素
            <p>ユーザー名</p>
                        <p>メールアドレス</p>
                                    <p>パスワード</p>
(e) => setUsername(e.target.value)
(e) => setEmail(e.target.value)
(e) => setPassword(e.target.value)

    value={username}
                value={email}
                              value={password}


*/

function InputField(InputData) {
  return (
    <div className="space-y-3">
      <p>{InputData.label}</p>
      <input
        className="border-b-[2px] border-[#427D9D] w-[100%] text-[2em]"
        type={InputData.type}
        value={InputData.value}
        onChange={InputData.onChange}
      />
    </div>
  )
}

function ProfileImageEditor(itemData) {
  const fileInputRef = useRef(null)
  const handleButtonClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      // ファイルの処理（例：サーバーにアップロード）
      console.log('Selected file:', file)
    }
  }

  return (
    <section className="">
      <div
        className="relative rounded-full  w-[160px] h-[160px] flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${itemData.Pimage})`,
          backgroundSize: `cover`,
          backgroundPosition: `center center`,
        }}
      >
        <button
          className="absolute inset-0 overflow-auto"
          onClick={handleButtonClick}
          style={{
            border: 'none',
            background: 'none',
            padding: 0,
            cursor: 'pointer',
          }}
        >
          <img
            className="absolute bottom-0 right-0 w-[60px] "
            src={ImportImg} // 適切な画像URLに変更
            alt="Click to upload"
          />
        </button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: 'none' }} // 完全に非表示にする
          onChange={handleFileChange}
        />
      </div>
    </section>
  )
}

function SaveBtn() {
  return (
    <section>
      <button
        type="submit"
        className="bg-[#D9D9D9] text-[1.5em] font-bold w-[7em] h-[2em]"
      >
        編集を保存
      </button>
    </section>
  )
}

function ArticlePart(PartData) {
  return (
    <div
      className="pt-[20px] space-y-10 flex flex-col gradient-vontainer h-[158px] w-[55vw] max-w-[800px]"
      style={{
        background: `url(${PartData.BgImg}) center center no-repeat`,
        backgroundSize: `cover`,
      }}
    >
      <div className="space-x-2   flex pl-[20px] text-left items-center">
        <div>
          <img className="w-[50px] h-[50px]" src={PartData.Ticon} alt="ticon" />
        </div>
        <div className="font-bold">{PartData.name}</div>
      </div>
      <div className="items-end -z-[-1] text-[white] flex justify-between mx-[15px]">
        <div className="font-bold text-[2em]">{PartData.title}</div>
        <div>{PartData.date}</div>
      </div>
    </div>
  )
}

export {
  UserMenu,
  RootUrl,
  InputField,
  ProfileImageEditor,
  SaveBtn,
  ArticlePart,
}

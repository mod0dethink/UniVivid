//インポート
import React, { useRef } from 'react'
import '../../assets/styles/Dimensions.css'
import ImportImg from '../../assets/images/imgImport.png'

//変更可能なProfile画像
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
    <section>
      <div
        className="rounded-full size-[140px] items-center justify-center mt-16"
        style={{
          backgroundImage: `url(${itemData.Pimage})`,
          backgroundSize: `cover`,
          backgroundPosition: `center center`,
        }}
      >
        <button
          className="mt-24 ml-[80px]"
          onClick={handleButtonClick}
          style={{
            border: 'none',
            background: 'none',
            padding: 0,
            cursor: 'pointer',
          }}
        >
          <img
            className="w-[60px]"
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

export default ProfileImageEditor
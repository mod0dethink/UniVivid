import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import images from '../../assets/images'
import HeaderLogo from '../../components/layout/layouts'
import UniSidebar from '../../components/common/UniSidebar'

const URegisterNote = () => {
  const { id } = useParams()

  const [seminars, setSeminars] = useState([])
  const [filteredSeminar, setFilteredSeminar] = useState('') // 一致するセミナー
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [selectedFile, setSelectedFile] = useState(null) // 選択されたファイル

  useEffect(() => {
    fetch('http://localhost:8080/auth/username', {
      method: 'GET',
      credentials: 'include',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        setName(data.username)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })

    fetch('http://localhost:8080/api/get-seminars', {
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        setSeminars(data.seminars || data)
        setFilteredSeminar(data.seminars || data)
        setLoading(false)

        const matchedSeminar = data.seminars.find(
          (seminar) => seminar.seminar_id === parseInt(id, 10),
        )

        if (matchedSeminar) {
          setFilteredSeminar(matchedSeminar)
        }
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [id])

  // ファイル選択ハンドラー
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
  }

  // フォーム送信ハンドラー
  const handleSubmit = (event) => {
    event.preventDefault()

    if (!selectedFile) {
      alert('ファイルを選択してください')
      return
    }

    const formData = new FormData()
    formData.append('pdf', selectedFile)
    formData.append('seminar_name', filteredSeminar.seminar_name)
    formData.append('prof_name', filteredSeminar.prof_name)
    formData.append('content', filteredSeminar.content)
    formData.append('upload_time', new Date().toISOString())

    fetch('http://localhost:8080/api/upload-note', {
      method: 'POST',
      body: formData,
      credentials: 'include',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('アップロードに失敗しました')
        }
        alert('ファイルが正常にアップロードされました')
      })
      .catch((error) => {
        console.error('アップロードエラー:', error)
        alert('ファイルのアップロードに失敗しました')
      })
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen w-[100vw] space-y-[50px]">
      <HeaderLogo />
      <UniSidebar />
      <div className="flex justify-center items-center space-x-[20px]">
        <img src={images.user_icon} alt={'icon'} width="70px" />
        <p className="text-[30px] font-bold">{name}</p>
      </div>
      <div className="font-bold flex space-x-[50px]">
        {[
          { title: '講義', value: filteredSeminar.seminar_name },
          { title: '講師', value: filteredSeminar.prof_name },
          { title: '日付', value: filteredSeminar.start_date },
        ].map(({ title, value }, index) => (
          <div key={index} className="flex space-x-[10px]">
            <p className="bg-[#427d9d] text-[16px] text-white px-10 h-[25px]">
              {title}
            </p>
            <p>{value}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="w-[1030px] h-[360px] bg-[#f5f5f5]">
          <label className="flex flex-col justify-center items-center h-full">
            {selectedFile ? (
              <img src={images.File} alt="uploaded file" width="200px" />
            ) : (
              <>
                <img src={images.ImportPng} alt="upfile" width="200px" />
                <p className="text-[30px] font-bold text-[#b8b8b8]">
                  ファイルをアップロード
                </p>
                <p className="text-[20px] font-bold text-[#b8b8b8]">
                  *投稿できるのは’’画像’’と’’PDF’’のみとなります。
                </p>
              </>
            )}
            <input
              className="hidden"
              type="file"
              name="upNote"
              accept=".pdf"
              onChange={handleFileChange}
            />
          </label>
        </div>
        <div className="mt-[10px] flex justify-evenly items-center">
          <button
            type="submit"
            className="w-[180px] h-[60px] bg-[#427d9d] flex justify-center items-center rounded-[20px] text-[30px] text-white font-bold"
          >
            アップロード
          </button>
          <Link
            to={`/onelecturepage/${id}`} // リンク先のパスを指定
            className="w-[180px] h-[60px] bg-[#CDCDCD] flex justify-center items-center rounded-[20px] text-[30px] text-white font-bold"
          >
            キャンセル
          </Link>
        </div>
      </form>
    </div>
  )
}

export default URegisterNote

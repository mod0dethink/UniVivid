import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HeaderLogo from '../../components/layout/layouts.js'
import images from '../../assets/images.js'

const UserChoiceCategory = () => {
  const navigate = useNavigate()
  const items = [
    { value: 'Doctor', img: images.iryou, text: '#医者' },
    { value: 'English', img: images.English, text: '#英語' },
    { value: 'It', img: images.IT, text: '#IT' },
    { value: 'Physics', img: images.earth, text: '#物理学' },
    { value: 'Biology', img: images.syachi, text: '#生物学' },
    { value: 'MechanicalEngineering', img: images.kougaku, text: '#機械工学' },
    { value: 'EnvironmentalStudies', img: images.kankyou, text: '#環境学' },
    { value: 'Philosophy', img: images.tetugaku, text: '#哲学' },
    { value: 'Law', img: images.hougaku, text: '#法学' },
  ]

  // 初期状態を空の配列に設定
  const [selectedItems, setSelectedItems] = useState([])

  const handleToggle = (value) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(value)
        ? prevSelectedItems.filter((item) => item !== value)
        : [...prevSelectedItems, value],
    )
  }

  const handleKeyDown = (event, value) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleToggle(value)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Selected items:', selectedItems)

    navigate('/registerwelcom')
  }

  return (
    <div className="bg-[#DDF2FD] w-[100vw] h-screen flex flex-col justify-center items-center">
      <HeaderLogo />
      <form
        onSubmit={handleSubmit}
        className="bg-[#fff] w-[1500px] h-[800px] rounded-[50px] flex flex-col justify-center items-center"
      >
        <p className="text-[24px] font-bold mb-4">
          興味のある分野を選択しよう！
        </p>
        <div className="grid grid-cols-3 grid-rows-3 justify-items-center align-items-center">
          {items.map(({ value, img, text }) => (
            <div
              key={value}
              onClick={() => handleToggle(value)}
              onKeyDown={(event) => handleKeyDown(event, value)}
              role="button"
              tabIndex={0}
              className={`p-4`}
            >
              <img
                src={img}
                alt={text}
                className={`w-[300px] h-[150px] object-cover border rounded-lg flex flex-col items-center  ${
                  selectedItems.includes(value)
                    ? 'border-[5px] border-blue-500'
                    : 'border-[1px] border-gray-300'
                }`}
              />
              <p className="text-center">{text}</p>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="text-center text-[#9BBEC8] text-[50px] font-bold"
        >
          {'Next>>'}
        </button>
      </form>
    </div>
  )
}

export default UserChoiceCategory

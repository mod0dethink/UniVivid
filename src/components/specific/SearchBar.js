import { useState } from 'react'
import PropTypes from 'prop-types' // 追加
import { useNavigate } from 'react-router-dom'
import '../../assets/styles/styles.css'
import images from '../../assets/images.js'

const SearchBar = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    seminar_name: '',
    already: false,
    date: '',
    category_id: '',
  })

  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(formData)
  }

  return (
    <aside className={`Ssidebar ${isOpen ? 'open' : ''}`}>
      <form className="Sinner w-[100%]" onSubmit={handleSubmit}>
        <header className="w-[100%]">
          <button
            type="button"
            className=" Ssidebar-burger"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>
              <img src={isOpen ? images.Icon1 : images.Icon0} alt="icon" />
            </span>
          </button>
          <div className="flex items-center text-[25px] space-x-[100px]">
            <p className="text-[#427d9d] min-w-[200px]">検索ワード:</p>
            <input
              className="w-[500px] bg-transparent border-b-2 border-blue-500"
              type="text"
              name="seminar_name"
              value={formData.seminar_name}
              onChange={handleChange}
            />
            <div className="flex items-center">
              <input
                className="rounded-[10px]"
                type="checkbox"
                name="already"
                checked={formData.already}
                onChange={handleChange}
              />
              <p className="w-[80px]">開講済</p>
            </div>
            <button
              className="unibtn-hover text-[30px] bg-[#427D9D] rounded-[20px] h-[70px] min-w-[200px] flex items-center justify-center text-white font-bold px-[20px]"
              type="submit"
            >
              <img src={images.Icon2} alt="Icon2" width="50px" />
              <p className="text-white font-bold">検索</p>
            </button>
          </div>
        </header>
        <nav className={`${isOpen ? '' : 'hidden'}`}>
          <div>
            <p className="text-[#427d9d] min-w-[200px]">日時:</p>
            <input
              className="w-[500px] bg-transparent border-b-2 border-blue-500"
              name="date"
              type="text"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div>
            <p className="text-[#427d9d] min-w-[200px]">ジャンル:</p>
            <input
              className="w-[500px] bg-transparent border-b-2 border-blue-500"
              name="category_id"
              type="text"
              value={formData.category_id}
              onChange={handleChange}
            />
          </div>
        </nav>
      </form>
    </aside>
  )
}

// PropTypesを定義
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
}

export default SearchBar

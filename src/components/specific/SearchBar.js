import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../assets/styles/styles.css'
import images from '../../assets/images.js'
import { UsernameContext } from '../../Contexts/UsernameContext.js'
import Input from '../common/Input.js'

const navItems = ['keyword', 'place', 'time', 'UserSetting', 'Logout']

//const navPath = ['', '', '', '', '']

const SearchBar = () => {
  const searchValue = [
    { name: 'place', Stext: '場所' },
    { name: 'date', Stext: '日程' },
    { name: 'time', Stext: '時間' },
    { name: 'genre', Stext: 'ジャンル' },
  ]

  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
    <aside className={`Ssidebar ${isOpen ? 'open' : ''}`}>
      <form className="Sinner w-[100%]">
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
              name="keyword"
            />
            <div className="flex items-center">
              <input
                className="rounded-[10px]"
                type="checkbox"
                name="already"
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
          {searchValue.map(({ name, Stext }) => (
            <div key={name}>
              <p className="text-[#427d9d] min-w-[200px]">{Stext}:</p>
              <input
                className="w-[500px] bg-transparent border-b-2 border-blue-500"
                name={name}
                type="text"
              />
            </div>
          ))}
        </nav>
      </form>
    </aside>
  )
}

export default SearchBar

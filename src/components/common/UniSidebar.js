import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../assets/styles/styles.css'
import images from '../../assets/images.js'
import { UsernameContext } from '../../Contexts/UsernameContext.js'

//const navPath = ['', '', '', '', '']

const UniSidebar = () => {
  let navItems = ['Username', 'HomePage', 'MyPage', 'UserSetting', 'Logout']
  let navIcons = ['', '', '', '', '']
  let navPath = ['', '', '', '', '']
  const { registerPath } = useContext(UsernameContext)
  if (registerPath === '/unihome') {
    navItems = ['Username', 'HomePage', 'UserSetting', 'Logout']

    navPath = ['/unisetting', '/unihome', '/unisetting', '/']
    navIcons = [images.barImg1, images.barImg2, images.barImg4, images.barImg5]
    console.log(navPath)
  } else {
    navItems = ['Username', 'HomePage', 'MyPage', 'UserSetting', 'Logout']
    navPath = ['/usersetting', '/userhome', '/usermypage', '/usersetting', '/']
    navIcons = [
      images.barImg1,
      images.barImg2,
      images.barImg3,
      images.barImg4,
      images.barImg5,
    ]
    console.log('userhome')
  }

  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="inner">
        <header>
          <button
            type="button"
            className="sidebar-burger"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>
              <img src={isOpen ? images.Close : images.barImg} alt="icon" />
            </span>
          </button>
          <span>{isOpen ? 'Menu' : ''}</span>
        </header>
        <nav>
          {navItems.map((item, index) => (
            <button
              key={item}
              type="button"
              onClick={() => handleNavigation(navPath[index])}
            >
              {/*<span>{item}</span>*/}

              <img src={navIcons[index]} alt="icon" />
              <p>{item}</p>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  )
}

export default UniSidebar

import React, { useState, useEffect } from 'react'
import '../../assets/styles/Dimensions.css'
import '../../assets/styles/bg-images.css'
import SearchBar from '../../components/specific/SearchBar'
import UniSidebar from '../../components/common/UniSidebar'
import HeaderLogo from '../../components/layout/layouts'
import images from '../../assets/images'
import ArticlePart from '../../components/materialComponent/ArticlePart'

// 記事一覧
function UserArticleList() {
  const [seminars, setSeminars] = useState([])
  const [filteredSeminars, setFilteredSeminars] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
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
        setFilteredSeminars(data.seminars || data) // 初期表示はすべてのセミナー
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  const handleSearch = (searchParams) => {
    const { seminar_name, already, date, category_id } = searchParams
    const filtered = seminars.filter((seminar) => {
      return (
        (seminar_name === '' ||
          seminar.seminar_name
            .toLowerCase()
            .includes(seminar_name.toLowerCase())) &&
        (!date || seminar.start_date.includes(date)) &&
        (!category_id || seminar.category_id.toString() === category_id) &&
        (!already || seminar.isAvailable === already)
      )
    })
    setFilteredSeminars(filtered)
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className="flex flex-col justify-start items-center w-[100vw] h-screen">
      <SearchBar onSearch={handleSearch} />
      <UniSidebar />
      <HeaderLogo />
      <div className="flex flex-col overflow-y-auto space-y-5 justify-center text-center mt-[200px]">
        {filteredSeminars.length > 0 ? (
          filteredSeminars.map((seminar) => (
            <ArticlePart
              key={seminar.seminar_id}
              BgImg={seminar.thumbnail || images.DefaultThumbnail}
              groupname={seminar.university_name}
              title={seminar.seminar_name}
              date={new Date(seminar.start_date).toLocaleString()}
              link={`/onelecturepage/${seminar.seminar_id}`} // セミナーIDをURLに含める
            />
          ))
        ) : (
          <p>表示するセミナーがありません</p>
        )}
      </div>
    </div>
  )
}

export default UserArticleList

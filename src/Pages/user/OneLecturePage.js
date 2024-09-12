import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import ConnectLink from '../../components/materialComponent/ConnectLink'
import MovieDetail from '../../components/common/MovieDetail.js'
import HeaderLogo from '../../components/layout/layouts.js'
import UniSidebar from '../../components/common/UniSidebar.js'
import { UsernameContext } from '../../Contexts/UsernameContext.js'

const OneLecturePage = () => {
  const { id } = useParams() // URLからIDを取得
  const [lecture, setLecture] = useState('')
  const [isFavorite, setIsFavorite] = useState(false)

  const { registerPath } = useContext(UsernameContext)

  let item = [
    { title: '講義', value: lecture.seminar_name },
    { title: '講師', value: lecture.prof_name },
    { title: '日付', value: lecture.start_date },
  ]

  useEffect(() => {
    const sendDataToBackend = async () => {
      const data = {
        seminar_id: parseInt(id, 10),
      }
      console.log(data)

      try {
        const response = await fetch('http://localhost:8080/api/add-history', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data), // データをJSONとして送信
          credentials: 'include', // クッキー関連の処理を行うときはこの1行をレスポンスに含めないとクッキーが送信されない
        })

        if (response.ok) {
          console.log('データが正常に送信されました')
        } else {
          console.error('データ送信エラー', response.statusText)
        }
      } catch (error) {
        console.error('データ送信中にエラーが発生しました', error)
      }
    }

    sendDataToBackend()

    fetch('http://localhost:8080/api/get-seminars', {
      credentials: 'include', // クッキーを含める
    })
      .then((response) => response.json())
      .then((data) => {
        // data.seminarsが配列であると仮定
        const matchedLecture = data.seminars.find(
          (seminar) => seminar.seminar_id === parseInt(id, 10),
        )
        console.log('Matched Lecture:', matchedLecture)
        setLecture(matchedLecture) // 状態を更新
      })
      .catch((error) => console.error('Error fetching lecture data:', error))
  }, [id])

  return (
    <section>
      <HeaderLogo />
      <UniSidebar />
      <MovieDetail
        title={lecture.seminar_name}
        imageUrl={''}
        uicon={''}
        username={lecture.university_name}
        good={''}
      />
      <div className="absolute top-[500px] h-screen w-[100vw] bg-main-bg font-bold">
        <div className="flex">
          <button
            id={isFavorite ? 'favorite_star_on' : 'favorite'}
            onClick={() => setIsFavorite(!isFavorite)}
          ></button>
        </div>
        <div className="flex justify-evenly items-start mt-[100px]">
          <div>
            {item.map(({ title, value }, index) => (
              <div
                key={index}
                className="flex justify-start items-center space-y-[10px]"
              >
                <p className="bg-[#427d9d] text-[16px] text-white px-10 h-[25px]">
                  {title}
                </p>
                <p>{value}</p>
              </div>
            ))}
            <button
              type="submit"
              className="bg-[#3BBC30] text-white text-xl px-10 py-1 rounded-md mt-8"
            >
              この講義に申し込む
            </button>
          </div>
          <div className="w-[500px]">
            <ConnectLink links={lecture.offer_url} />{' '}
            {/*修正: link → offer_url*/}
          </div>

          <Link className="flex items-center justify-center bg-[#4C4C4C] w-[330px] h-[60px] text-center text-white font-bold text-[30px]">
            ノートを投稿する
          </Link>
        </div>
      </div>
    </section>
  )
}

export default OneLecturePage

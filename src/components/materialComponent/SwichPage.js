//インポート
import React from 'react'
import '../../assets/styles/Dimensions.css'

// タブごとの内容
function SwichPage(item) {
  switch (item.isPage) {
    //コメント
    case 0:
      return (
        <section>
          {item.comment.map((element) => (
            <div
              key={element}
              className=" flex justify-around border-b border-[#838181] w-[80vw] mb-[22px]"
            >
              <div className="ml-2 flex-grow">
                <input
                  type="text"
                  placeholder={element}
                  readOnly
                  className="px-2 py-1 flex-grow mr-2 w-[55vw]"
                />
              </div>
              <div className="flex space-x-2 mr-3 mb-1 text-[17px]">
                <button className="font-bold bg-[#D9D9D9] px-4 py-1 ">
                  認証
                </button>
                <button className="font-bold bg-[#E74646] px-4 py-1 ">
                  削除
                </button>
              </div>
            </div>
          ))}
        </section>
      )

    //ノート
    case 1:
      return (
        <section>
          {item.comment.map((element) => (
            <div
              key={element}
              className="flex justify-around border-b border-[#838181] w-[80vw] mb-[22px]"
            >
              <div className="ml-2 flex-grow">
                <p
                  type="text"
                  placeholder=""
                  readOnly
                  className="px-2 py-1 flex-grow mr-2 w-[55vw]"
                >
                  {element}
                </p>
              </div>
              <div className="flex space-x-2 mr-3 mb-1 text-[17px]">
                <button className="font-bold bg-[#E74646] px-4 py-1 ">
                  削除
                </button>
              </div>
            </div>
          ))}
        </section>
      )
  }
}

export default SwichPage
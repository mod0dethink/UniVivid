//インポート
import React, { useState } from 'react'
//component
import { UnivividHeader } from '../../components/LayoutComponent'
import SwichPage from '../../components/materialComponent/SwichPage.js'

// 申請許諾画面
function ApplicationListPage() {
  const [isPage, setIsPage] = useState(0);
  const comment = ['comment','コメント','こめんと','comment','コメント','こめんと','comment','コメント','こめんと'];
  const note = ['oo講座','xx講座','△△講座','oo講座','xx講座','△△講座','oo講座','xx講座','△△講座'];

  return (
    <div className='bg-main-bg overflow-hidden'>
      <UnivividHeader title="申請一覧" returnCol={1} link="/unihome" bgCol={true} />
      <div className="grid pt-[98px] place-items-center w-screen">
        <section className="fixed flex justify-around border-b-[2px] border-[#838181] w-11/12 bg-main-bg pt-14">
          <button 
          id={isPage === 0 ? 'swichBar': ''}
          onClick={()=>{setIsPage(0)}}
          >
            コメント
          </button>
          <button 
          id={isPage === 1 ? 'swichBar': ''}
          onClick={()=>{setIsPage(1)}}
          >
            ノート
          </button>
        </section>
      </div>
      <section className="grid place-items-center pt-14">
        {(isPage === 0) && <SwichPage isPage={isPage} comment={comment} />}
        {(isPage === 1) && <SwichPage isPage={isPage} comment={note} />}
      </section>
    </div>
  )
}

export default ApplicationListPage
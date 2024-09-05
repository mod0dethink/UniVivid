import React from 'react'
import PropTypes from 'prop-types'

import images from '../../assets/images'

const NoteList = (note) => {
  return (
    <div className="w-[1000px] h-[100px] flex justify-between items-center border-b-2">
      <div className="flex items-center space-x-[20px]">
        <img
          src={note.icon}
          alt="userIcon"
          className="w-[70px] h-[70px] rounded-[20px] object-contain"
        />
        <p className="text-[30px]">{note.username}</p>
      </div>
      <butotn
        className="bg-[#CDCDCD] w-[150px] h-[50px] rounded-[20px] flex items-center justify-center"
        type="submit"
      >
        削除
      </butotn>
    </div>
  )
}

export default NoteList

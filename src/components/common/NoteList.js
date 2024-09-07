import React from 'react'
import PropTypes from 'prop-types'

const NoteList = ({ icon, username }) => {
  return (
    <div className="w-[1000px] h-[100px] flex justify-between items-center border-b-2">
      <div className="flex items-center space-x-[20px]">
        <img
          src={icon}
          alt="userIcon"
          className="w-[70px] h-[70px] rounded-[20px] object-contain"
        />
        <p className="text-[30px]">{username}</p>
      </div>
      <div className="flex space-x-[10px]">
        <button
          className="bg-[#CDCDCD] w-[150px] h-[50px] rounded-[20px] flex items-center justify-center"
          type="submit"
        >
          削除
        </button>
      </div>
    </div>
  )
}

NoteList.propTypes = {
  icon: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

export default NoteList

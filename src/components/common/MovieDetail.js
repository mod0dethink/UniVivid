import React from 'react'
import PropTypes from 'prop-types'
import images from '../../assets/images'

const MovieDetail = ({ title, imageUrl, uicon, username, good }) => {
  return (
    <div>
      <div className="absolute top-[100px] left-[360px] bg-[#427d9d] flex justify-center items-center w-[370px] h-[60px] text-[36px] font-bold rounded-[10px] text-white">
        {title}
      </div>
      <div
        className="absolute top-[125px] left-[480px] bg-cover bg-center h-[400px] w-[1100px] flex items-end"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="flex items-center justify-between px-[50px] w-full h-[100px] bg-gradient-to-t from-[#000] to-[#00000000]">
          <div className="flex items-center justify-center space-x-[10px]">
            <img
              src={uicon}
              alt="uicon"
              className="h-[60px] w-[60px] object-contain"
            />
            <p className="text-white text-[20px]">{username}</p>
          </div>
          <div className="flex items-center justify-center">
            <img src={images.Good} width="45px" alt="good" />
            <p className="text-white">{good}</p>
          </div>
        </div>
      </div>
      <div className="absolute top-[450px] left-[1500px]">
        <img src={images.Share} alt="share" width="150px" />
      </div>
    </div>
  )
}

MovieDetail.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  uicon: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  good: PropTypes.number.isRequired,
}

export default MovieDetail

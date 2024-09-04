import React from 'react'
import PropTypes from 'prop-types'

const HeaderLogo = ({ color }) => {
  return (
    <div
      className={`text-[#427D9D] ${color} absolute top-[12px] left-[902px] font-bold`}
    >
      <span className="text-[36px]">U</span>
      <span className="text-[24px]">ni</span>
      <span className="text-[36px]">V</span>
      <span className="text-[24px]">ivid</span>
    </div>
  )
}

HeaderLogo.propTypes = {
  color: 'text-[#427D9D]',
}

export default HeaderLogo

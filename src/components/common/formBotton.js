import React from 'react'
import PropTypes from 'prop-types'

const FormButton = ({ text }) => {
  return (
    <button
      className="text-[36px] bg-[#427D9D] rounded-[20px] h-[77px] min-w-[270px] flex flex-col items-center justify-center text-white font-bold"
      type="button"
    >
      {text}
    </button>
  )
}

FormButton.propTypes = {
  text: PropTypes.string.isRequired,
}

export default FormButton

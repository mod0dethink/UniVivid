import React from 'react'
import PropTypes from 'prop-types'

const FormButton = ({ text, onSubmit }) => {
  // デフォルトの空の関数を設定
  const handleClick = (event) => {
    if (onSubmit) {
      onSubmit(event)
    }
  }

  return (
    <button
      className="text-[36px] bg-[#427D9D] rounded-[20px] h-[77px] min-w-[270px] flex flex-col items-center justify-center text-white font-bold px-[20px]"
      type="submit"
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

FormButton.propTypes = {
  text: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
}

FormButton.defaultProps = {
  onSubmit: () => {},
}

export default FormButton

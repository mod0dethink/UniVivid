import React from 'react'

const Input = (Para) => {
  return (
    <label className="">
      <p className="text-20px">{Para.label}</p>
      <input
        className="bg-[#E4E4E4] h-[45px] w-[460px] rounded-[20px]"
        type={Para.type}
        name={Para.name}
        onChange={Para.onChange}
        value={Para.value}
      />
    </label>
  )
}

export default Input

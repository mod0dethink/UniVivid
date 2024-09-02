//インポート
import React from 'react'
import '../../assets/styles/Dimensions.css'
import useFocusHover from '../../assets/scripts/animation.js'

//フォーム入力用のinput
function InputField(InputData) {
  //animationのifelse用
  const { isHovered, handleFocus, handleBlur } = useFocusHover()

  return (
    <div className="space-y-3">
      <p>{InputData.label}</p>
      <input
        className={`border-b-[2px] border-main w-full text-2xl ${isHovered ? 'bg-[#f1f1f1]' : 'border-[#427D9D]'}`}
        type={InputData.type}
        value={InputData.value}
        onChange={InputData.onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  )
}

export default InputField
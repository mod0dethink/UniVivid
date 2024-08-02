import { useState, useCallback } from 'react'

// ノートを開く処理
export function OpenNote(img) {
  const openPopupBtn = document.getElementById('noteImg')
  openPopupBtn.addEventListener('click', () => {})

  return img
  // prompt()

  // const test_div = document.getElementById("test_div");
  // console.log(test_div);
}

/*----------InputTextのFocusエフェクト---------- */
const useFocusHover = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleFocus = useCallback(() => {
    setIsHovered(true)
  }, [])

  const handleBlur = useCallback(() => {
    setIsHovered(false)
  }, [])

  return {
    isHovered,
    handleFocus,
    handleBlur,
  }
}

export default useFocusHover

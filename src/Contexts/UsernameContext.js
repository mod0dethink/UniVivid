import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const UsernameContext = createContext()

export const UsernameProvider = ({ children }) => {
  const [username, setUsername] = useState('')

  return (
    <UsernameContext.Provider value={{ username, setUsername }}>
      {children}
    </UsernameContext.Provider>
  )
}

// PropTypesを使ってchildrenの型検証を追加
UsernameProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

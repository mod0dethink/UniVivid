import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const UsernameContext = createContext()

export const UsernameProvider = ({ children }) => {
  const [username, setUsername] = useState('テストマン')
  const [registerPath, setRegisterPath] = useState('/')

  return (
    <UsernameContext.Provider
      value={{ username, setUsername, registerPath, setRegisterPath }}
    >
      {children}
    </UsernameContext.Provider>
  )
}

UsernameProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

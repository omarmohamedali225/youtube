import React, { createContext, useContext, useState } from 'react'


export const OpenList = createContext()

export default function OpenLists({ children }) {
  const [IsOpen, SetOpen] = useState(false)
  return (
    <OpenList.Provider value={{ IsOpen, SetOpen }}>
      {children}
    </OpenList.Provider>
  )
}

export const useList = () => useContext(OpenList)
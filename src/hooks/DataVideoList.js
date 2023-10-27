import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'

export const DataVideoList = createContext()

export default function DataVideos({ children }) {
  const [data, setData] = useState([])
  useEffect(() => {
    async function FetchData() {
      try {
        const res = await axios.get("https://youtube-v3-alternative.p.rapidapi.com/playlist", {
          params: { id: "PLZejDZO2nSZuAN_b6f9aWWxRVI5g9sK5M" },
          headers: {
            'X-RapidAPI-Key': 'df7eeeb4bbmsh813f9f3b20f33bcp1c5768jsn3be753c9e4fc',
            'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
          }
        })
        setData(res.data.data)
      } catch { }
    }
    FetchData()
  }, [])
  return (
    <DataVideoList.Provider value={{ data }}>
      {children}
    </DataVideoList.Provider>
  )
}

export const useDataVideos = () => useContext(DataVideoList)
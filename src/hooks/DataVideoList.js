import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

export const DataVideoList = createContext();

export default function DataVideos({ children }) {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  useEffect(() => {
    async function FetchData() {
      try {
        const res = await axios.get(
          "https://youtube-v3-alternative.p.rapidapi.com/playlist",
          {
            params: { id: "PLp22-4PivYmIFAnru_L7fnMhSV5YffLTZ" },
            headers: {
              "X-RapidAPI-Key":
                "df7eeeb4bbmsh813f9f3b20f33bcp1c5768jsn3be753c9e4fc",
              "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
            },
          }
        );
        setData(res.data.data);
        const res1 = await axios.get(
          "https://youtube-v3-alternative.p.rapidapi.com/playlist",
          {
            params: { id: "PLp22-4PivYmLBmV2wctgqyyRlIs1MhmNr" },
            headers: {
              "X-RapidAPI-Key":
                "df7eeeb4bbmsh813f9f3b20f33bcp1c5768jsn3be753c9e4fc",
              "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
            },
          }
        );
        setData1(res1.data.data);
      } catch {}
    }
    FetchData();
  }, []);
  return (
    <DataVideoList.Provider value={{ data, data1 }}>
      {children}
    </DataVideoList.Provider>
  );
}

export const useDataVideos = () => useContext(DataVideoList);

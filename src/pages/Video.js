import { Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import VideoYoutubeShow from '../component/VideoYoutubeShow';
import VideosListYoutube from '../component/VideosListYoutube'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDataVideos } from './../hooks/DataVideoList';
export default function Video() {
  const [dataVF, setDataVF] = useState([])
  const { id } = useParams()
  const { data } = useDataVideos()

  useEffect(() => {
    const filterData = data.filter(e => e.videoId !== id)
    setDataVF(filterData)
  }, [data, id])


  const [video, setVideo] = useState([])
  useEffect(() => {
    async function FetchData() {
      try {
        const res = await axios.get("https://youtube-v3-alternative.p.rapidapi.com/video", {
          params: { id },
          headers: {
            'X-RapidAPI-Key': 'df7eeeb4bbmsh813f9f3b20f33bcp1c5768jsn3be753c9e4fc',
            'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
          }
        })
        setVideo(res.data)
      } catch { }
    }
    FetchData()
  }, [id])


  window.scrollTo({
    top: 0,
    behavior: "instant"
  })

  return (
    <Container sx={{ mt: 9 }}>
      <Grid container>
        <VideoYoutubeShow data={video} />
        <VideosListYoutube dataListVideos={dataVF} />
      </Grid>
    </Container>
  )
}

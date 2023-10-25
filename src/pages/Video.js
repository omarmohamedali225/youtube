import { Container, Grid } from '@mui/material'
import React from 'react'
import VideoYoutubeShow from '../component/VideoYoutubeShow';
import VideosListYoutube from '../component/VideosListYoutube'
export default function Video() {
  return (
    <Container sx={{ mt: 9 }}>
      <Grid container>
        <VideoYoutubeShow />
        <VideosListYoutube />
      </Grid>
    </Container>
  )
}

import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Notfound() {
  return (
    <Box sx={{display:"flex",justifyContent:"center",alignItems:'center',minHeight:"100vh",flexDirection:"column"}}>
      <Typography variant='h3' component={"h1"}>404</Typography>
      <Typography variant='p' component={"p"}>Page Not Found</Typography>
      <Button component={Link} variant='contained' color='error' sx={{my:2}} href='/'>Go Back</Button>
    </Box>
  )
}

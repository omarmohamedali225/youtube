import React, { useState } from 'react'
import Header from '../component/Header'
import ListShort from '../component/ListShort'
import Lists from './../component/lists';
import TabsHeader from '../component/TabsHeader';
import { Box } from '@mui/material';
import Videos from '../component/Videos';

export default function Home() {
  // Open Or Close Lists
  const [open,setOpen] = useState(false)

  return (
    <>
      <Lists IsOpen={open} SetOpen={setOpen}/>
      <Header SetOpen={setOpen}/>
      <Box sx={{width:{md:'calc(100% - 90px)'},ml:{md:"90px"}}}>
        <TabsHeader />
        <Videos/>
      </Box>
      <ListShort/>

    </>
  )
}

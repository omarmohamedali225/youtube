import React from 'react'
import ListShort from '../component/ListShort'
import TabsHeader from '../component/TabsHeader';
import { Box } from '@mui/material';
import Videos from '../component/Videos';

export default function Home() {

  return (
    <>
      <Box sx={{ width: { md: 'calc(100% - 90px)' }, ml: { md: "90px" } }}>
        <Box position={"fixed"} sx={{ mt: 7, top: 0, bgcolor: "#121212", width: "100%", zIndex: 1 }}>
          <TabsHeader />
        </Box>
        <Videos />
      </Box>
      <ListShort />
    </>
  )
}

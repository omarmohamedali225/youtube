import React from 'react'
import Header from '../component/Header'
import ListShort from '../component/ListShort'
import Lists from './../component/lists';
import TabsHeader from '../component/TabsHeader';
import { Box } from '@mui/material';
import Videos from '../component/Videos';
import OpenLists from '../hooks/OpenLists';

export default function Home() {

  return (
    <>
      <OpenLists>
        <Lists />
        <Header />
      </OpenLists>
      <Box sx={{ width: { md: 'calc(100% - 90px)' }, ml: { md: "90px" } }}>
        <TabsHeader />
        <Videos />
      </Box>
      <ListShort />
    </>
  )
}

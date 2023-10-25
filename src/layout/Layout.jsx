import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../component/Header';
import OpenLists from '../hooks/OpenLists';
import Lists from '../component/lists';

export default function Layout() {
  return (
    <>
      <OpenLists>
        <Lists />
        <Header />
      </OpenLists>
      <Outlet/>
    </>
  )
}

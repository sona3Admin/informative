import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './header/Header';

export default function Layout({children}) {
  return (
    <div>
        <Header/>
        <Outlet />
    </div>
  )
}

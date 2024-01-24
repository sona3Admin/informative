import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import style from './styles/style.module.css'
import BottomNav from './BottomNav'
import Spinner from '../Loading/Spinner'
import useApi from '../Loading/LoadingApi'
import { useTranslation } from 'react-i18next'

export default function Layout({children}) {
  const loading  = useApi(1000)
  const {i18n} = useTranslation()
  const[matches,setMatches] = useState(window.matchMedia("(min-width: 1100px)").matches)
  useEffect(() => {const handler = (e) => setMatches( e.matches ); window.matchMedia("(min-width: 1100px)").addListener(handler);},[])
  return (
    <>
    <Navbar/>
      <Spinner loading={loading} />
      <div className={style.PageContainer}>
        {children}
      </div>
    <Footer/>
    {!matches && <BottomNav/>}
    </>
  )
}

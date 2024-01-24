import React from 'react'
import style from "./styles/bottomNav.module.css"
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GoHome } from "react-icons/go";
import { PiHandshake } from "react-icons/pi";
import { CiDollar } from "react-icons/ci";
import { FaUsersViewfinder } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { createRipples } from 'react-ripples'
const MyRipples = createRipples({
    color: '#ff980038',
    during: 1000,
})
export default function BottomNav() {
const navigate = useNavigate()
const {t} = useTranslation()
const location = useLocation()
const active = (pathname)=> location.pathname === pathname ? style.active_tab : style.li
const active_nest = (pathname)=> location.pathname.startsWith(pathname) ? style.active_tab : style.li

  return (
    <div className={style.BottomNav}>
        <MyRipples className={active("/") } onClick={()=>{navigate('/')}}><GoHome className={style.icon}/><div className={style.text}>{t("Home")}</div></MyRipples>
        <MyRipples className={active("/services") } onClick={()=>{navigate('/services')}}><PiHandshake className={style.icon}/><div className={style.text}>{t("Services")}</div></MyRipples>
        <MyRipples className={active("/pricing") } onClick={()=>{navigate('/pricing')}}><CiDollar className={style.icon}/><div className={style.text}>{t("Pricing")}</div></MyRipples>
        <MyRipples className={active("/support") } onClick={()=>{navigate('/support')}}><TfiHeadphoneAlt className={style.icon}/><div className={style.text}>{t("Support")}</div></MyRipples>
        <MyRipples className={active_nest("/blog") } onClick={()=>{navigate('/blog')}}><IoNewspaperOutline className={style.icon}/><div className={style.text}>{t("Blog")}</div></MyRipples>
    </div>
  )
}

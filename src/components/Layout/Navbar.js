import React from 'react'
import { useTranslation } from 'react-i18next'
import style from './styles/nav.module.css'
import logo from '../../assets/logo.png'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import LangDropDown from '../Lang/LangDropDown'
import { Button } from 'antd'
export default function Navbar() {
const location = useLocation()
const navigate = useNavigate()
const activeClassName = (pathname)=> location.pathname === pathname ? style.Navbar_li_active : style.Navbar_li 
const{t, i18n} = useTranslation()

  return (
    <div className={style.Navbar}>
        <div className={style.Image_Container}>
          <img onClick={()=>{navigate("/")}} src={logo} className={style.Navbar_logo} alt='logo'/>
        </div>
        <div className={style.Routes_Container}>
          <NavLink to="/"  className={activeClassName("/")}>{t("Home")}</NavLink>
          <NavLink to="/services" className={activeClassName("/services")} >{t("Services")}</NavLink>
          <NavLink to="/pricing" className={activeClassName("/pricing")} >{t("Pricing")}</NavLink>
          <NavLink to="/blog" className={activeClassName("/blog")} >{t("Blog")}</NavLink>
          <NavLink to="/support" className={activeClassName("/support")} >{t("Support")}</NavLink>
        </div>
        <div className={style.Control_Container}>
          <div onClick={()=>{window.open(`https://play.google.com/store/`, '_blank')}} className={style.Download_App}>{t("Download App")}</div>
          <Button style={{fontFamily: i18n.language === 'en' ? 'JosefinSans' : 'GE_SS_light',}} onClick={()=>{window.open(`https://shop.sona3.ae/`, '_blank')}} id={style.ShopNow_Btn}>{t("Shop")}</Button>
          <Button style={{fontFamily: i18n.language === 'en' ? 'JosefinSans' : 'GE_SS_light',}} onClick={()=>{window.open(`https://shop.sona3.ae/my-account/`, '_blank')}} id={style.Register_Btn}>{t("Register Now")}</Button>
          <LangDropDown/>
        </div>
    </div>
  )
}

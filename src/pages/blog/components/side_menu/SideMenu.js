import React, { useState } from 'react';
import './index.css';
import style from './style.module.css'
import { Drawer } from 'antd';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { createRipples } from 'react-ripples'
const MyRipples = createRipples({
    color: '#ff980038',
    during: 1000,
})
const SideMenu = ({open, setOpen}) => {
  const {t, i18n} = useTranslation()
  const activeClassName = (pathname)=> location.pathname === pathname ? style.side_li_active : style.side_li 
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <>
      <Drawer
        title={t("Menu")}
        placement={i18n.language === 'en' ? "left" : "right"}
        closable={false}
        onClose={()=>setOpen(false)}
        visible={open}
        key={i18n.language === 'en' ? "left" : "right"}
        width="50%"
      >
        <div className={style.links_ul} style={{direction:i18n.language === 'en' ? "ltr" : "rtl"}}>
            <MyRipples style={{placeContent:i18n.language === 'en' ? "start" : "end"}} onClick={()=>{navigate('/blog')}} id={activeClassName("/blog")}>{t("Home")}</MyRipples>
            <MyRipples style={{placeContent:i18n.language === 'en' ? "start" : "end"}} onClick={()=>{navigate('/blog/e-commerce')}} id={activeClassName("/blog/e-commerce")}>{t("E-Commerce")}</MyRipples>
            <MyRipples style={{placeContent:i18n.language === 'en' ? "start" : "end"}} onClick={()=>{navigate('/blog/jobs')}} id={activeClassName("/blog/jobs")}>{t("Jobs")}</MyRipples>
            <MyRipples style={{placeContent:i18n.language === 'en' ? "start" : "end"}} onClick={()=>{navigate('/blog/crafts')}} id={activeClassName("/blog/crafts")}>{t("Crafts")}</MyRipples>
            <MyRipples style={{placeContent:i18n.language === 'en' ? "start" : "end"}} onClick={()=>{navigate('/blog/sona3-app')}} id={activeClassName("/blog/sona3-app" )}>{t("Sona3 App")}</MyRipples>
        </div>
      </Drawer>
    </>
  );
};

export default SideMenu;

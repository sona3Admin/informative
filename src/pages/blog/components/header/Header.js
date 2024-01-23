import React,{useState,useEffect} from 'react'
import style from './Header.module.css'
import { useTranslation } from 'react-i18next'
import { NavLink, useLocation } from 'react-router-dom'
import SideMenu from '../side_menu/SideMenu'
import { Button } from 'antd'
import { TiThMenu } from "react-icons/ti";

export default function Header() {
const {t,i18n} = useTranslation()
const location = useLocation()
const [open, setOpen] = useState(false);
const activeClassName = (pathname)=> location.pathname === pathname ? style.blog_nav_li_active : style.blog_nav_li 
const[matches,setMatches] = useState(window.matchMedia("(min-width: 1100px)").matches)
useEffect(() => {const handler = (e) => setMatches( e.matches ); window.matchMedia("(min-width: 1100px)").addListener(handler);},[])
  return (
    <div>
        <div className={style.header_content}>
          <div className={style.header_h}>{t("Sona3 Blog")}</div>
          <div className={style.header_p}>{t("Sona3 App blog articles help grow your project and increase your sales")}</div>
        </div>
        {matches && <div className={style.blog_nav}>
              <div className={style.blog_nav_li} id={style.Topics}>{t("Topics")}:</div>
              {/* <NavLink to="/blog"  className={activeClassName("/blog")}>{t("Home")}</NavLink> */}
              <NavLink to="/blog/e-commerce"  className={activeClassName("/blog/e-commerce")}>{t("E-Commerce")}</NavLink>
              <NavLink to="/blog/jobs"        className={activeClassName("/blog/jobs")}>{t("Jobs")}</NavLink>
              <NavLink to="/blog/jobs"        className={activeClassName("/blog/jobs")}>{t("Top Jobs")}</NavLink>
              <NavLink to="/blog/crafts"      className={activeClassName("/blog/Crafts")}>{t("Crafts")}</NavLink>
              <NavLink to="/blog/sona3-app"   className={activeClassName("/blog/sona3-app")}>{t("Sona3 App")}</NavLink>
        </div>}
        {!matches&& <Button id={style.menu_btn} onClick={()=>setOpen(true)}><TiThMenu/><span>{t("Menu")}</span></Button>}
        {!matches && <SideMenu open={open} setOpen={setOpen}/>
}

    </div>
  )
}

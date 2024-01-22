import React from 'react'
import style from './styles/banner.module.css'
import app_store from '../../../assets/app_store.png'
import google_store from '../../../assets/google_store.png'
import persons from '../../../assets/persons.png'
import { useTranslation } from 'react-i18next'
export default function EndBanner({color}) {
  const {t} = useTranslation()
  return (
    <div className={style.section} style={{background:`${color}`}}>
        <div className={style.block_content}>
            <h1 className={style.h1} data-aos="fade-down" data-aos-duration="2000">{t("Join the elite makers and unleash your creativity")}</h1>
            <h3 className={style.h3} data-aos="fade-down" data-aos-duration="1000">{t("Download the Makers app to start your journey")}</h3>
            <div className={style.flex_btns}>
            <img onClick={()=>{window.open(`https://www.apple.com/store`, '_blank')}} className={style.image_store} src={app_store} alt="app store" data-aos="flip-up" data-aos-duration="3000"/> 
            <img onClick={()=>{window.open(`https://play.google.com/store/games?device=windows&pli=1`, '_blank')}} className={style.image_store} src={google_store} alt="google store" data-aos="flip-up" data-aos-duration="3000"/> 
            </div>
        </div>
        <div>
             <img className={style.image} src={persons} alt="persons" data-aos="zoom-in" data-aos-duration="1000"/> 
        </div>
    </div>
  )
}

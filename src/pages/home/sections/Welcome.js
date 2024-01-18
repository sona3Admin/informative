import React,{useEffect} from 'react'
import v_line from '../../../assets/v_line.png'
import main from '../../../assets/main.png'
import h_line from '../../../assets/h_line.png'
import style from './styles/welcome.module.css'
import { Button } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'
import { FaArrowLeft } from "react-icons/fa6";
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
export default function Welcome() {
const{t,i18n} = useTranslation()
const navigate = useNavigate()
  return (
    <>
    <div className={style.Section} >
        <img className={style.v_line} src={v_line} />
            <div className={style.center_body} >
                <Button onClick={()=>{navigate(`/pricing`)}} id={style.Button}>{t("See the beginning of the year offers")}<FaArrowLeft style={{transform:i18n.language === 'en' ? 'rotate(180deg)' : 'rotate(0deg)'}}/></Button>
                <h1 className={style.h1}>{t("online platform built with Emirati hands")}</h1>
                <h1 className={style.h1}>{t("A home for every maker and creator")}</h1>
                <div className={style.p}>{t("We provide integrated services for all types of events. Our services include platform cleaning and preparation and support services")}</div>
                <div className={style.p}>{t("We provide integrated services for all types of events. Our services include cleaning and preparing platforms")}</div>
                <div className={style.Buttons_flex}>
                    <Button onClick={()=>{window.open(`https://play.google.com/store/games?device=windows&pli=1`, '_blank')}} id={style.Seller_Btn}>{t("Register now as seller and join us")}</Button>
                    <Button onClick={()=>{window.open(`https://shop.sona3.ae/`, '_blank')}} id={style.Customer_Btn}>{t("Go Shopping")}</Button>
                </div>
                <div className={style.line_data}>
                    <div className={style.line_data_li}><CheckCircleOutlined className={style.line_data_icon}/>{t("Saves time & money")} </div>
                    <div className={style.line_data_li}><CheckCircleOutlined className={style.line_data_icon}/>{t("Platform for handicrafts")} </div>
                    <div className={style.line_data_li}><CheckCircleOutlined className={style.line_data_icon}/>{t("24/7 Technical Support")} </div>
                </div>
                <img className={style.main_image} src={main}  />
                <img className={style.image_h_line} src={h_line} />
            </div>
        <img className={style.v_line}  id={style.v_line_mt} src={v_line} />
    </div>
    </>
  )
}

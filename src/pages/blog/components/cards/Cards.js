import React, { useState, useEffect } from 'react'
import style from './style.module.css'
import { useTranslation } from 'react-i18next'
import image from '../../../../assets/image.png'
import { Button, Col, Row } from 'antd'
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'
export default function Cards({data}) {
const {t, i18n} = useTranslation()
const navigate = useNavigate()
const[matches,setMatches] = useState(window.matchMedia("(min-width: 950px)").matches)
useEffect(() => {const handler = (e) => setMatches( e.matches ); window.matchMedia("(min-width: 950px)").addListener(handler);},[])
  return (
    <div className={style.cards}>
        <Row gutter={[8, 32]}>
        {data.map((item,key)=>
        <Col className="gutter-row" span={matches ? 6 : 12}>
        <img className={style.card_image} src={image} alt='card'/>
        <div className={style.header}>{t(`${item.header}`)}</div>
        <div className={style.p}>{t(`${item.p}`)}</div>
        <div onClick={()=>{navigate(`/blog/${"E-Commerce"}/${1}`)}} className={style.p_}>{t("Read")}{i18n.language === 'ar' ?  <IoArrowBackOutline className={style.p_icon}/> : <IoArrowForwardOutline className={style.p_icon}/>} </div>
        </Col>
        )}
        </Row>
        <Button  id={style.LoadMore_Btn}>{t("Load More")}</Button>
  </div>
  )
}

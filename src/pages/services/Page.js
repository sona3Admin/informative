import React, { useEffect, useState } from 'react'
import useApi from '../components/Loading/LoadingApi'
import style from './style.module.css'
import s_line from './../../assets/s_line.png'
import h_line from './../../assets/h_line.png'
import stcs from './../../assets/stcs.png'
import { useTranslation } from 'react-i18next';
import { Button } from 'antd'
import { CheckOutlined } from '@ant-design/icons'
import Faqs from '../home/sections/Faqs'
import Data from '../../DummyData/Data'
import EndBanner from './../home/sections/EndBanner';
import BreadCrumb from '../components/Layout/BreadCrumb'

export default function Services() {
useApi(600)
const{sellerData, customerData, ServicesData} = Data()
const[data, setData] = useState(sellerData)
const[serviceType, setServiceType] = useState('sellers')
const{t,i18n} = useTranslation()
const[matches,setMatches] = useState(window.matchMedia("(min-width: 700px)").matches)
useEffect(() => {const handler = (e) => setMatches( e.matches ); window.matchMedia("(min-width: 700px)").addListener(handler);},[])

  return (
    <div>
      <img className={style.image_h_line} src={h_line} alt='h_line' />
      <BreadCrumb/>
      <div className={style.header} >
        <img className={style.s_line} src={s_line} alt="Who we are" />
          <h1 className={style.h1}>{t("Our Services")}</h1>
        <img className={style.s_line} src={s_line} alt="Who we are" />
      </div>
      <div className={style.p}>{t("We use the latest data analysis tools to understand customer behavior and develop marketing strategies that fit your business needs.")}</div>
      <div className={style.service_to_div}>
        <div className={style.p}>{t("Our Service To")}</div>
        <div className={style.buttons}>
          <Button className={ serviceType === "sellers" ? style.button_active : style.button } onClick={()=>{setServiceType("sellers"); setData(sellerData)}} >{t("Sellers")}</Button>
          <Button className={ serviceType === "customers" ? style.button_active : style.button } onClick={()=>{setServiceType("customers");setData(customerData)}} >{t("Customers")}</Button>
        </div>
      </div>
      <div className={style.Cards} >
        {ServicesData.map((items,key)=>
          <div className={style.Card} style={{direction:`${items.style}`}} data-aos={key>0 ? 'zoom-in-up' : ''} data-aos-duration="1000" data-aos-offset="0">
             <div className={style.Card_Text} style={{textAlign:i18n.language==="en" ? "start" : `${items.style_text}`, direction:i18n.language==="en" ? "ltr" : `${items.style}`}}>
               <div className={style.header_content}>
                <div className={style.header_text}>
                  <div className={style.Card_Tag} style={{color:`${items.color}`}} >{t(`${items.tag}`)}</div>
                  <div className={style.Card_h}>{t(`${items.header}`)}</div>
                </div>
                {!matches && <img className={style.stcs_image} style={{transform:`${items.mirror}`}} src={stcs} alt="stcs" />}
               </div>
               
               <div className={style.Card_p}>{t(`${items.p}`)}</div>
               {items.points.map((point,p)=>
                  <div className={style.Card_Points} style={{color:`${items.color}`, direction:i18n.language==="en" ? "ltr" :`rtl`, textAlign: i18n.language==="en" ? "start" : `${items?.style_align}`}} ><CheckOutlined className={style.Card_Points_Icon}/>{t(`${point}`)}</div>
               )}
               <Button id={style.More_Btn} style={{background:`${items.color}`}}>{t("More Details")}</Button>
             </div>
             {matches && <img className={style.stcs_image} style={{transform:`${items.mirror}`}} src={stcs} alt="stcs" />}
           </div>
        )}
        <Faqs/>
      </div>
      <EndBanner color={"rgba(10, 128, 106, 1)"}/>
    </div>
  )
}

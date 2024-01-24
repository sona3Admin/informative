import React from 'react'
import style from './style.module.css'
import s_line from './../../assets/s_line.png'
import h_line from './../../assets/h_line.png'
import { useTranslation } from 'react-i18next'
import useApi from '../../components/Loading/LoadingApi'
import { Button, Form, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { CiLocationOn } from "react-icons/ci";
import { PiPhone } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { NavLink } from 'react-router-dom'
import facebook from '../../assets/facebook_solid.png'
import twitter from '../../assets/twitter_solid.png'
import instagram from '../../assets/instagram_solid.png'
import snap from '../../assets/pintrest_solid.png'
import mail from '../../assets/mail_solid.png'
import phone from '../../assets/phone_solid.png'
import gps from '../../assets/gps_solid.png'
import BreadCrumb from './../../components/Layout/BreadCrumb';
export default function Support() {
useApi(600)
const {t,i18n} = useTranslation()
  return (
    <div>
      <img className={style.image_h_line} src={h_line} alt='h_line' />
      <BreadCrumb/>
      <div className={style.header} >
        <img className={style.s_line} src={s_line} alt="Be In Touch With Us" />
          <h1 className={style.h1}>{t("Be In Touch With Us")}</h1>
        <img className={style.s_line} src={s_line} alt="Be In Touch With Us" />
      </div>
      <div className={style.p}>{t("You can easily contact us by calling or sending an email or WhatsApp message. Our team is ready throughout the day to receive your inquiries.")}</div>
      <div  className={style.container}>
          <Form className={style.Form} style={{direction:i18n.language === 'en' ? 'ltr' :'rtl'}}>
            <div className={style.clientName_div}>
              <div className={style.Input_info}>
                <label className={style.Label}>{t("firstName")}</label>
                <Input name="firstName" placeholder={t("firstName")} className={style.Input} />
              </div>
              <div className={style.Input_info}>
                <label className={style.Label}>{t("lastName")}</label>
                <Input name="lastName" placeholder={t("lastName")} className={style.Input} />
              </div>

            </div>
              <div className={style.Input_info}>
                <label className={style.Label}>{t("E-mail")}</label>
                <Input name="email" placeholder={t("E-mail")} className={style.Input} />
              </div>
              <div className={style.Input_info}>
                <label className={style.Label}>{t("Phone")}</label>
                <Input name="phone" placeholder={t("Phone")} className={style.Input} />
              </div>

              <div className={style.Input_info}>
                <label className={style.Label}>{t("Message")}</label>
               <TextArea name="note" placeholder={t('Type your message here...')}/>
              </div>
              <Button id={style.send_btn}>{t("Send")}</Button>
          </Form>
          <div className={style.Data_Container}>
            <div className={style.Data}>
              <div className={style.Data_header}>{t("Communication Data")}</div>
              <div className={style.line}><img src={gps} className={style.social_icon} alt="1"/><span>{t("22 El Horreya St., Heliopolis - Cairo")}</span></div>
              <div className={style.line}><img src={phone} className={style.social_icon} alt="1"/><span>+61 3 8376 6284</span></div>
              <div className={style.line}><img src={mail} className={style.social_icon} alt="1"/><span>info@example.com</span></div>
              <div className={style.Social_Icons}>
                <NavLink ><img src={facebook} className={style.social_icon} alt="1"/></NavLink>
                <NavLink ><img src={twitter} className={style.social_icon} alt="2"/></NavLink>
                <NavLink ><img src={instagram} className={style.social_icon} alt="3"/></NavLink>
                <NavLink ><img src={snap} className={style.social_icon} alt="4"/></NavLink>
              </div>
            </div>
            <div className={style.Map}>
               <div className={style.map}>{t("Map")}</div> 
            </div>
          </div>
      </div>
    </div>
  )
}

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Button, Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { NavLink } from 'react-router-dom';
import style from './style.module.css';
import s_line from './../../assets/s_line.png';
import h_line from './../../assets/h_line.png';
import facebook from '../../assets/facebook_solid.png';
import twitter from '../../assets/twitter_solid.png';
import instagram from '../../assets/instagram_solid.png';
import snap from '../../assets/pintrest_solid.png';
import mail from '../../assets/mail_solid.png';
import phone from '../../assets/phone_solid.png';
import gps from '../../assets/gps_solid.png';
import BreadCrumb from './../../components/Layout/BreadCrumb';
import useApi from '../../components/Loading/LoadingApi';

const Support = () => {
  useApi(600);
  const { t, i18n } = useTranslation();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      note: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required(t('First name is required')),
      lastName: Yup.string().required(t('Last name is required')),
      email: Yup.string().email(t('Invalid email address')).required(t('Email is required')),
      phone: Yup.string().required(t('Phone number is required')),
      note: Yup.string().required(t('Message is required')),
    }),
    onSubmit: values => {
      // Handle form submission logic here
      console.log(values);
    },
  });

  return (
    <div>
      <img className={style.image_h_line} src={h_line} alt="h_line" />
      <BreadCrumb />
      <div className={style.header}>
        <img className={style.s_line} src={s_line} alt="Be In Touch With Us" />
        <h1 className={style.h1}>{t('Be In Touch With Us')}</h1>
        <img className={style.s_line} src={s_line} alt="Be In Touch With Us" />
      </div>
      <div className={style.p}>
        {t(
          'You can easily contact us by calling or sending an email or WhatsApp message. Our team is ready throughout the day to receive your inquiries.'
        )}
      </div>
      <div className={style.container}>
        <Form className={style.Form} style={{ direction: i18n.language === 'en' ? 'ltr' : 'rtl' }} onSubmit={formik.handleSubmit}>
          <div className={style.clientName_div}>
            <div className={style.Input_info}>
              <label className={style.Label}>{t('firstName')}</label>
              <Input name="firstName" placeholder={t('firstName')} className={style.Input} onChange={formik.handleChange} value={formik.values.firstName} />
            </div>
            <div className={style.Input_info}>
              <label className={style.Label}>{t('lastName')}</label>
              <Input name="lastName" placeholder={t('lastName')} className={style.Input} onChange={formik.handleChange} value={formik.values.lastName} />
            </div>
          </div>
          <div className={style.Input_info}>
            <label className={style.Label}>{t('E-mail')}</label>
            <Input name="email" placeholder={t('E-mail')} className={style.Input} onChange={formik.handleChange} value={formik.values.email} />
          </div>
          <div className={style.Input_info}>
            <label className={style.Label}>{t('Phone')}</label>
            <Input name="phone" placeholder={t('Phone')} className={style.Input} onChange={formik.handleChange} value={formik.values.phone} />
          </div>
          <div className={style.Input_info}>
            <label className={style.Label}>{t('Message')}</label>
            <TextArea name="note" placeholder={t('Type your message here...')} onChange={formik.handleChange} value={formik.values.note} />
          </div>
          <Button id={style.send_btn} type="submit" onClick={()=>{alert("سيتم التواصل معك قريبا")}}>
            {t('Send')}
          </Button>
        </Form>
        <div className={style.Data_Container}>
          <div className={style.Data}>
            <div className={style.Data_header}>{t('Communication Data')}</div>
              <div className={style.line}><img src={gps} className={style.social_icon} alt="1"/><span>{t("Abu Dhabi")}</span></div>
              <div className={style.line}><img src={phone} className={style.social_icon} alt="1"/><span style={{fontFamily:"sans-serif"}}>+971 54 515 0215</span></div>
              <div className={style.line}><img src={mail} className={style.social_icon} alt="1"/><span style={{fontFamily:"sans-serif"}}>contact@sona3.ae</span></div>
            <div className={style.Social_Icons}>
                <NavLink ><img onClick={()=>{window.open(`https://www.facebook.com/sona3app`, '_blank')}} src={facebook} className={style.social_icon} alt="1"/></NavLink>
                <NavLink ><img onClick={()=>{window.open(`https://twitter.com/Sona3app`, '_blank')}} src={twitter} className={style.social_icon} alt="2"/></NavLink>
                <NavLink ><img onClick={()=>{window.open(`https://www.instagram.com/sona3app/`, '_blank')}} src={instagram} className={style.social_icon} alt="3"/></NavLink>
                <NavLink ><img onClick={()=>{window.open(`https://www.snapchat.com/add/sona3app`, '_blank')}} src={snap} className={style.social_icon} alt="4"/></NavLink>
                <NavLink ><img onClick={()=>{window.open(`https://www.linkedin.com/company/sona3app/`, '_blank')}} src={snap} className={style.social_icon} alt="4"/></NavLink>
            </div>
          </div>
          <div className={style.Map}>
            <div className={style.map}>{t('Map')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

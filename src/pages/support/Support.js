import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Button, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { NavLink } from 'react-router-dom';
import style from './style.module.css';
import s_line from './../../assets/s_line.png';
import h_line from './../../assets/h_line.png';
import facebook from '../../assets/facebook_solid.png';
import twitter from '../../assets/twitter_solid.png';
import instagram from '../../assets/instagram_solid.png';
import tiktok from '../../assets/tiktok.png';
import linkedin from '../../assets/in.png';
import mail from '../../assets/mail_solid.png';
import phone from '../../assets/phone_solid.png';
import snap_2 from '../../assets/snap_2.png';
import gps from '../../assets/gps_solid.png';
import BreadCrumb from './../../components/Layout/BreadCrumb';
import useApi from '../../components/Loading/LoadingApi';
import { SwalAlert } from '../../components/alert/SwalAlert';

const Support = () => {
  useApi(600);
  const { t, i18n } = useTranslation();
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(t('First name is required')),
    lastName: Yup.string().required(t('Last name is required')),
    email: Yup.string().email(t('Invalid email')).required(t('Email is required')),
    phone: Yup.string().required(t('Phone number is required')),
    note: Yup.string().required(t('Message is required')),
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    note: '',
  };

  const handleSubmit = (values,{resetForm}) => {
    // Handle form submission logic here
    SwalAlert({ text: t("We will be in touch with you soon"), status: true })
    resetForm()
    // You can add additional logic here, such as sending the form data to a server
  };

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
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className={style.Form} style={{ direction: i18n.language === 'en' ? 'ltr' : 'rtl' }}>
        <div className={style.clientName_div}>
          <div className={style.Input_info}>
            <label className={style.Label}>{t('firstName')}</label>
            <Field
              name="firstName"
              placeholder={t('firstName')}
              className={style.Input}
              as={Input}
            />
            <ErrorMessage name="firstName" component="div" className={style.error} />
          </div>
          <div className={style.Input_info}>
            <label className={style.Label}>{t('lastName')}</label>
            <Field
              name="lastName"
              placeholder={t('lastName')}
              className={style.Input}
              as={Input}
            />
            <ErrorMessage name="lastName" component="div" className={style.error} />
          </div>
        </div>
        <div className={style.Input_info}>
          <label className={style.Label}>{t('E-mail')}</label>
          <Field
            name="email"
            placeholder={t('E-mail')}
            className={style.Input}
            as={Input}
          />
          <ErrorMessage name="email" component="div" className={style.error} />
        </div>
        <div className={style.Input_info}>
          <label className={style.Label}>{t('Phone')}</label>
          <Field
            name="phone"
            placeholder={t('Phone')}
            className={style.Input}
            as={Input}
          />
          <ErrorMessage name="phone" component="div" className={style.error} />
        </div>
        <div className={style.Input_info}>
          <label className={style.Label}>{t('Message')}</label>
          <Field
            name="note"
            placeholder={t('Type your message here...')}
            className={style.Input}
            as={TextArea}
          />
          <ErrorMessage name="note" component="div" className={style.error} />
        </div>
        <Button id={style.send_btn} htmlType="submit">
          {t('Send')}
        </Button>
      </Form>
    </Formik>
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
                <NavLink ><img onClick={()=>{window.open(`https://www.snapchat.com/add/sona3app`, '_blank')}} src={snap_2} className={style.social_icon} alt="4"/></NavLink>
                <NavLink ><img onClick={()=>{window.open(`https://www.linkedin.com/company/sona3app/`, '_blank')}} src={linkedin} className={style.social_icon} alt="4"/></NavLink>
                <NavLink ><img onClick={()=>{window.open(`https://www.tiktok.com/@sona3app`, '_blank')}} src={tiktok} className={style.social_icon} alt="4"/></NavLink>
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

import React,{useState, useEffect} from 'react'
import * as Yup from 'yup';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { Input, Button } from 'antd'; // Replace with your actual component library
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/footer_instagram.svg'
import snap from '../../assets/snap.png'
import tiktok from '../../assets/tiktok_footer.png'
import linkedin from '../../assets/linkedin_footer.png'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import Header1 from './../../common/Header1';
import style from './styles/footer.module.css'
import { SwalAlert } from './../alert/SwalAlert';
export default function Footer() {
const {t,i18n} = useTranslation()
const[matches,setMatches] = useState(window.matchMedia("(min-width: 1100px)").matches)
useEffect(() => {const handler = (e) => setMatches( e.matches ); window.matchMedia("(min-width: 1100px)").addListener(handler);},[])
const validationSchema = Yup.object().shape({
  email: Yup.string().email(t('Invalid email')).required(t('Email is required')),
});

const initialValues = {
  email: '',
};

const handleSubmit = (values, {resetForm}) => {
  // Handle registration logic here
  console.log('Registration form submitted with values:', values);
  SwalAlert({ text: t("You have registered successfully, you will recieve latest news"), status: true })
  resetForm()
};
  return (
    <div className={style.Footer}>
      <div className={style.Content_1}>

        <div className={style.sec_2}>
          <div><span>{t("Register in")}</span><span style={{color:"rgba(136, 5, 13, 1)", fontWeight:"bolder", fontFamily:i18n.language === 'en' ? "JosefinSans" : "GE_SS_bold"}}> {t("Newsletter")} </span><span>{t("to recieve all news of")}</span></div>
          <div>{t("handcarfts in Emirates")}</div>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form className={style.Form}>
              <Field
                className={style.input}
                name="email"
                placeholder={t('Email Address')}
                style={{ direction: i18n.language === 'en' ? 'ltr' : 'rtl' }}
                as={Input}
              />
              <ErrorMessage name="email" component="div" className={style.error} />
              <Button htmlType="submit" id={style.Register}>
                {t('Register')}
              </Button>
            </Form>
        </Formik>
        </div>

        <div className={style.sec_1}>
              <Header1 classname={style.h1} text={"Join Sona3 Society"}/>
              <div className={style.Social_Icons}>
                <NavLink ><img onClick={()=>{window.open(`https://www.facebook.com/sona3app`, '_blank')}} src={facebook} className={style.img_link} alt="1"/></NavLink>
                <NavLink ><img onClick={()=>{window.open(`https://twitter.com/Sona3app`, '_blank')}} src={twitter} className={style.img_link} alt="2"/></NavLink>
                <NavLink ><img onClick={()=>{window.open(`https://www.instagram.com/sona3app/`, '_blank')}} src={instagram} className={style.img_link} alt="3"/></NavLink>
                <NavLink ><img onClick={()=>{window.open(`https://www.snapchat.com/add/sona3app`, '_blank')}} src={snap} className={style.img_link} alt="4"/></NavLink>
                <NavLink ><img onClick={()=>{window.open(`https://www.tiktok.com/@sona3app`, '_blank')}} src={tiktok} className={style.img_link} alt="5" style={{filter:"invert(1)", border:"solid 2px black"}}/></NavLink>
                <NavLink ><img onClick={()=>{window.open(`https://www.linkedin.com/company/sona3app/`, '_blank')}} src={linkedin} className={style.img_link} alt="6" /></NavLink>
              </div>
        </div>
     
      </div>
      <div className={style.Content_2}>
        <div className={style.Content_2_Routes}>
            
        { matches && 
        <>
            <NavLink to="/" className={style.Route}>{t("Home")}</NavLink>
            <NavLink to="/services" className={style.Route}>{t("Services")}</NavLink>
            <NavLink to="/pricing" className={style.Route}>{t("Pricing")}</NavLink>
            <NavLink to="/blog" className={style.Route}>{t("Blog")}</NavLink>
            <NavLink to="/support" className={style.Route}>{t("Support")}</NavLink>
         </>
        }
            <NavLink to="/privacy-policy" className={style.Route}>{t("Privacy & Policy")}</NavLink>
            <NavLink to="/terms-conditions" className={style.Route}>{t("Terms & Conditions")}</NavLink>
        </div>
        <div className={style.Rights}>{t("Sona3 All CopyRights Reserved ©")}</div>
      </div>
    </div>
  )
}

import React,{useState, useEffect} from 'react'
import style from './styles/footer.module.css'
import facebook from '../../../assets/facebook.png'
import twitter from '../../../assets/twitter.png'
import instagram from '../../../assets/instagram.png'
import snap from '../../../assets/snap.png'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { Button } from 'antd'
export default function Footer() {
const {t,i18n} = useTranslation()
const[matches,setMatches] = useState(window.matchMedia("(min-width: 1100px)").matches)
useEffect(() => {const handler = (e) => setMatches( e.matches ); window.matchMedia("(min-width: 1100px)").addListener(handler);},[])
  return (
    <div className={style.Footer}>
      <div className={style.Content_1}>

        <div className={style.sec_2}>
          <div><span>{t("Register in")}</span><span style={{color:"rgba(136, 5, 13, 1)", fontWeight:"bolder", fontFamily:i18n.language === 'en' ? "JosefinSans" : "GE_SS_bold"}}> {t("Newsletter")} </span><span>{t("to recieve all news of")}</span></div>
          <div>{t("handcarfts in Emirates")}</div>
          <div className={style.Form}>
            <input className={style.input} value="" name="email" placeholder={t("Email Address")} style={{direction:i18n.language === 'en' ? 'ltr' : 'rtl'}}/>
            <Button id={style.Register}>{t("Register")}</Button>
          </div>
        </div>

        <div className={style.sec_1}>
              <h1 className={style.h1}>{t("Join Sona3 Society")}</h1>
              <div className={style.Social_Icons}>
                <NavLink ><img onClick={()=>{window.open(`https://www.facebook.com/sona3app`, '_blank')}} src={facebook} className={style.img_link} alt="1"/></NavLink>
                <NavLink ><img onClick={()=>{window.open(`https://twitter.com/Sona3app`, '_blank')}} src={twitter} className={style.img_link} alt="2"/></NavLink>
                <NavLink ><img onClick={()=>{window.open(`https://www.instagram.com/sona3app/`, '_blank')}} src={instagram} className={style.img_link} alt="3"/></NavLink>
                <NavLink ><img onClick={()=>{window.open(`https://www.snapchat.com/add/sona3app`, '_blank')}} src={snap} className={style.img_link} alt="4"/></NavLink>
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

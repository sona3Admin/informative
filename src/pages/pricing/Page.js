import React, { useEffect, useState,useRef } from 'react'
import useApi from '../components/Loading/LoadingApi'
import style from './style.module.css'
import s_line from './../../assets/s_line.png'
import h_line from './../../assets/h_line.png'
import arrow from './../../assets/arrow.png'
import { useTranslation } from 'react-i18next'
import { Button } from 'antd'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { convertToArabicNumeral } from '../../utils/functions'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { AllPackages } from '../../DummyData/Data'
import EndBanner from './../home/sections/EndBanner';
import BreadCrumb from './../components/Layout/BreadCrumb';

export default function Pricing() {
useApi(600)
const {t,i18n} = useTranslation()
const[Type, setType] = useState('monthly')
const[matches,setMatches] = useState(window.matchMedia("(min-width: 1500px)").matches)
useEffect(() => {const handler = (e) => setMatches( e.matches ); window.matchMedia("(min-width: 1500px)").addListener(handler);},[])
const splideRef = useRef(null);
useEffect(() => {
  const splideInstance = splideRef.current?.splide;
  if (splideInstance) {
    splideInstance.destroy();
    splideInstance.mount();
  }
}, [i18n.language]);
useEffect(() => {
  setTimeout(() => {
  scrollToTop();
  }, 1000);
  const scrollToTop = () => { window.scrollTo({ top: 2, behavior: "smooth" }); };
}, []);
  return (
    <div>
        <img className={style.image_h_line} src={h_line} alt='h_line' />
        <BreadCrumb/>
        <div className={style.header} >
          <img className={style.s_line} src={s_line} alt="Who we are" />
            <h1 className={style.h1}>{t("Prices")}</h1>
          <img className={style.s_line} src={s_line} alt="Who we are" />
        </div>
        <div className={style.p}>{t("Flexible price packages that provide you with a variety of options and features")}</div>
      
        <div className={style.buttons}>
          <Button className={ Type === "monthly" ? style.button_active : style.button } onClick={()=>{setType("monthly"); }} >{t("Monthly")}</Button>
          <Button className={ Type === "annually" ? style.button_active : style.button } onClick={()=>{setType("annually");}} >{t("Annually")}</Button>
          <div className={style.sub_notice}>
            <div className={style.notice_text}>{t("Save 56% with the annual plan")}</div>
            <img src={arrow} className={style.arrow} alt="arrow"/>
          </div>
        </div>
        {/* Start of Cards */}
     {matches && <div className={style.cards} >

        {AllPackages.map((items,key)=>
        <div className={style.card} id={items?.Special ? style.Best : ""}>
            <h1 className={style.card_h1}>{t(`${items.name}`)}</h1>
            <div className={style.card_p}>{t(`${items.p}`)}</div>
            <div className={style.pricing_content} >
              <div className={style.flex_pricing_div}>
                <Button id={style.save_btn}>{t("Save")}{convertToArabicNumeral(items.discount)}%</Button>
                {items.discount!==100 && <div className={style.hash_price}>{convertToArabicNumeral(items.originalPrice)} {t("AED")}</div>}
              </div>
              <div className={style.main_price}><span style={{fontWeight:'bolder'}}>{ items.price === 0 ? (i18n.language === 'en' ? "Zero" :"صفر") : convertToArabicNumeral(items.price)} {t("AED")}</span><span className={style.month}>/{t("month")}</span></div>
              <Button id={style.subscribe_btn}>{t("Subscribe Now")}</Button>
            </div>
            <div className={style.features_container}>
              <h2>{t("Best features")}</h2>
              {items.features.map((item,index)=>
              <>
                <div className={style.feature_li} >{item.status ? <CheckOutlined style={{color:"green"}}/> : <CloseOutlined style={{color:"#88050d"}}/> }{t(`${item.name}`)}</div>
              </>
              )}
              <h2>{t("Marketing")}</h2>
              {items.marketing.map((item,index)=>
              <>
                <div className={style.feature_li} >{item.status ? <CheckOutlined style={{color:"green"}}/> : <CloseOutlined style={{color:"#88050d"}}/> }{t(`${item.name}`)}</div>
              </>
              )}
            </div>
        </div>
        )}
      </div>}
      {/* End of Cards */}

  {!matches &&
      <Splide  aria-label="My Favorite Images" className="splide"
       ref={splideRef}
        options={ {
            start:0,
            rewind : false,
            width  : '100%',
            gap    : '1rem',
            perPage: 3,
            direction: i18n.language === 'en' ? 'ltr' : 'rtl',
            //lazyLoad: 'nearby',
            //drag   : 'free',
            focus  : 'center',
            //type:'loop',
            breakpoints: {
              1024: { perPage: 3,padding:{left:i18n.language === 'en' ? '2rem' : '0rem',right: i18n.language === 'ar' ?'2rem':'0rem'}},
              767: { perPage: 1,padding:{left:i18n.language === 'en' ? '2rem' : '0rem',right: i18n.language === 'ar' ?'2rem':'0rem'} },
              640: { perPage: 1,padding:{left:i18n.language === 'en' ? '2rem' : '0rem',right: i18n.language === 'ar' ?'2rem':'0rem'} },
              },
          }
        }
        >
          {AllPackages.map((items,key)=>

          <SplideSlide >
        <div className={style.card} id={items?.Special ? style.Best : ""}>
            <h1 className={style.card_h1}>{t(`${items.name}`)}</h1>
            <div className={style.card_p}>{t(`${items.p}`)}</div>
            <div className={style.pricing_content}>
              <div className={style.flex_pricing_div}>
                <Button id={style.save_btn}>{t("Save")}{convertToArabicNumeral(items.discount)}%</Button>
                {items.discount!==100 && <div className={style.hash_price}>{convertToArabicNumeral(items.originalPrice)} {t("AED")}</div>}
              </div>
              <div className={style.main_price}><span style={{fontWeight:'bolder'}}>{ items.price === 0 ? (i18n.language === 'en' ? "Zero" :"صفر") : convertToArabicNumeral(items.price)} {t("AED")}</span><span className={style.month}>/{t("month")}</span></div>
              <Button id={style.subscribe_btn}>{t("Subscribe Now")}</Button>
            </div>
            <div className={style.features_container}>
              <h2>{t("Best features")}</h2>
              {items.features.map((item,index)=>
              <>
                <div className={style.feature_li} >{item.status ? <CheckOutlined style={{color:"green"}}/> : <CloseOutlined style={{color:"#88050d"}}/> }{t(`${item.name}`)}</div>
              </>
              )}
              <h2>{t("Marketing")}</h2>
              {items.marketing.map((item,index)=>
              <>
                <div className={style.feature_li} >{item.status ? <CheckOutlined style={{color:"green"}}/> : <CloseOutlined style={{color:"#88050d"}}/> }{t(`${item.name}`)}</div>
              </>
              )}
            </div>
        </div>
          </SplideSlide>
        )}
        </Splide>}
        <EndBanner color={"rgba(223, 144, 25, 1)"}/>
    </div>
  )
}

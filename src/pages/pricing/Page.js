import React, { useEffect, useState,useRef } from 'react'
import useApi from '../../components/Loading/LoadingApi'
import style from './style.module.css'
import s_line from './../../assets/s_line.png'
import h_line from './../../assets/h_line.png'
import arrow from './../../assets/arrow.png'
import { useTranslation } from 'react-i18next'
import { Button } from 'antd'
import { CheckOutlined, CloseOutlined, PlusOutlined } from '@ant-design/icons'
import { convertToArabicNumeral } from '../../utils/functions'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { Packages } from '../../DummyData/Data'
import EndBanner from './../home/sections/EndBanner';
import BreadCrumb from './../../components/Layout/BreadCrumb';

export default function Pricing() {
useApi(600)
const {t,i18n} = useTranslation()
const[Type, setType] = useState('monthly')
const[matches,setMatches] = useState(window.matchMedia("(min-width: 1500px)").matches)
const[matches2,setMatches2] = useState(window.matchMedia("(min-width: 570px)").matches)
useEffect(() => {const handler = (e) => setMatches( e.matches ); window.matchMedia("(min-width: 1500px)").addListener(handler);},[])
useEffect(() => {const handler2 = (e) => setMatches2( e.matches ); window.matchMedia("(min-width: 570px)").addListener(handler2);},[])
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
        <div className={style.buttons_container} style={{left:i18n.language === 'en' ? "70px" : "auto", right:i18n.language === 'ar' ? "70px" : "auto"}}>
          <div className={style.buttons}>
            <Button className={ Type === "monthly" ? style.button_active : style.button } onClick={()=>{setType("monthly"); }} >{t("Monthly")}</Button>
            <Button className={ Type === "annually" ? style.button_active : style.button } onClick={()=>{setType("annually");}} >{t("Annually")}</Button>
          </div>
          <div className={style.sub_notice} >
              <div className={style.notice_text} style={{left:i18n.language === 'en' ? "-15px" : "auto", right:i18n.language === 'ar' ? "-15px" : "auto"}}>{t("Save 56% with the annual plan")}</div>
              <img src={arrow} className={style.arrow} style={{transform:i18n.language==='en' ? 'scaleX(-1)': 'scaleX(1)'}} alt="arrow"/>
          </div>
        </div>
        {/* Start of Cards */}
     {matches && <div className={style.cards} >

     {Packages.map((items,key)=>
        <div className={style.card} id={items?.name === "Basic" ? style.Best : ""}>
            <h1 className={style.card_h1}>{t(`${items.name}`)}</h1>
            <div className={style.card_p}>{t(`${items.p}`)}</div>
            <div className={style.pricing_content} >
              <div className={style.flex_pricing_div}>
                <Button id={style.save_btn}>{t("Save")}{convertToArabicNumeral(items.discount)}%</Button>
                {items.discount!==100 && <div className={style.hash_price}>{convertToArabicNumeral(Type ==='monthly' ? items.originalPrice_month : items.originalPrice_year)} {t("AED")}</div>}
              </div>
              <div className={style.main_price}><span style={{fontWeight:'bolder'}}>{convertToArabicNumeral(Type ==='monthly' ? items.price_month : items.price_year)} {t("AED")}</span><span className={style.month}>/{Type ==='monthly' ? t("month") : t("yearly")}</span></div>
              <Button onClick={()=>{window.open(`https://shop.sona3.ae/`, '_blank')}} id={style.subscribe_btn}>{t("Subscribe Now")}</Button>
            </div>
            <div className={`${style.features_container}`}>
              <h2 className={style.h2}>{t("Subscription")}</h2>
              {items.features.map((item,index)=>
              <>
                <div className={style.feature_li} >{item.status ? <CheckOutlined style={{color:"green"}}/> : <CloseOutlined style={{color:"#88050d"}}/> }{t(`${item.name}`)}</div>
              </>
              )}
              <h2 className={style.h2}>{t("Marketing")}</h2>
              {items.marketing.map((item,index)=>
              <>
                <div className={style.feature_li} >{item.status ? <CheckOutlined style={{color:"green"}}/> : <CloseOutlined style={{color:"#88050d"}}/> }{t(`${item.name}`)}</div>
              </>
              )}
              <h2 className={style.h2}>{t("Shipping and packaging advantages")}</h2>
              {items.shipping.map((item,index)=>
              <>
                <div className={style.feature_li} >{item.status ? <CheckOutlined style={{color:"green"}}/> : <CloseOutlined style={{color:"#88050d"}}/> }{t(`${item.name}`)}</div>
              </>
              )}
              <h2 className={style.h2}>{t("Management")}</h2>
              {items.management.map((item,index)=>
              <>
                <div className={style.feature_li} >{item.status ? <CheckOutlined style={{color:"green"}}/> : <CloseOutlined style={{color:"#88050d"}}/> }{t(`${item.name}`)}</div>
              </>
              )}
              <h2 className={style.h2}>{t("Advanced")}</h2>
              {items.advanced.map((item,index)=>
              <>
                <div className={style.feature_li} >{item.status ? <CheckOutlined style={{color:"green"}}/> : item.plus ? <PlusOutlined style={{color:"green"}}/> : <CloseOutlined style={{color:"#88050d"}}/>  }{t(`${item.name}`)}</div>
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
      style={{ overflow: 'hidden' }} 
      options={ {
       start:0,
       rewind: false,
       width: '100%',
       gap: '1rem',
       arrows:false,
       perPage: 4,
       focus  : 'center',
       direction: i18n.language === 'en' ? 'ltr' : 'rtl',
       //lazyLoad: 'nearby',
       //drag   : 'free',
       //type:'loop',
       breakpoints: {
         1500: { perPage: 3, arrows:true, padding:'20px' },
         850: { perPage: 2, arrows:true, padding:'20px' },
         640: { perPage: 1, arrows:true, padding:'20px' },
         },
     }
       }
       >
          {Packages.map((items,key)=>

          <SplideSlide >
          <div className={style.card} id={items?.name === "Basic" ? style.Best : ""}>
            <h1 className={style.card_h1}>{t(`${items.name}`)}</h1>
            <div className={style.card_p}>{t(`${items.p}`)}</div>
            <div className={style.pricing_content}>
              <div className={style.flex_pricing_div}>
                <Button id={style.save_btn}>{t("Save")}{convertToArabicNumeral(items.discount)}%</Button>
                {items.discount!==100 && <div className={style.hash_price}>{convertToArabicNumeral(Type ==='monthly' ? items.originalPrice_month : items.originalPrice_year)} {t("AED")}</div>}
              </div>
              <div className={style.main_price}><span style={{fontWeight:'bolder'}}>{convertToArabicNumeral(Type ==='monthly' ? items.price_month : items.price_year)} {t("AED")}</span><span className={style.month}>/{Type ==='monthly' ? t("month") : t("yearly")}</span></div>
              <Button onClick={()=>{window.open(`https://shop.sona3.ae/`, '_blank')}} id={style.subscribe_btn}>{t("Subscribe Now")}</Button>
            </div>
            <div className={`${style.features_container}`}>
              <h2 className={style.h2}>{t("Subscription")}</h2>
              {items.features.map((item,index)=>
              <>
                <div className={style.feature_li} >{item.status ? <CheckOutlined style={{color:"green"}}/> : <CloseOutlined style={{color:"#88050d"}}/> }{t(`${item.name}`)}</div>
              </>
              )}
              <h2 className={style.h2}>{t("Marketing")}</h2>
              {items.marketing.map((item,index)=>
              <>
                <div className={style.feature_li} >{item.status ? <CheckOutlined style={{color:"green"}}/> : <CloseOutlined style={{color:"#88050d"}}/> }{t(`${item.name}`)}</div>
              </>
              )}
              <h2 className={style.h2}>{t("Shipping and packaging advantages")}</h2>
              {items.shipping.map((item,index)=>
              <>
                <div className={style.feature_li} >{item.status ? <CheckOutlined style={{color:"green"}}/> : <CloseOutlined style={{color:"#88050d"}}/> }{t(`${item.name}`)}</div>
              </>
              )}
              <h2 className={style.h2}>{t("Management")}</h2>
              {items.management.map((item,index)=>
              <>
                <div className={style.feature_li} >{item.status ? <CheckOutlined style={{color:"green"}}/> : <CloseOutlined style={{color:"#88050d"}}/> }{t(`${item.name}`)}</div>
              </>
              )}
              <h2 className={style.h2}>{t("Advanced")}</h2>
              {items.advanced.map((item,index)=>
              <>
                <div className={style.feature_li} >{item.status ? <CheckOutlined style={{color:"green"}}/> : item.plus ? <PlusOutlined style={{color:"green"}}/> : <CloseOutlined style={{color:"#88050d"}}/>  }{t(`${item.name}`)}</div>
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

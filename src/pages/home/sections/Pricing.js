import React,{useEffect,useState, useRef} from 'react'
import s_line from '../../../assets/s_line.png'
import h_line from '../../../assets/h_line.png'
import style from './styles/pricing.module.css'
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { CheckOutlined, CloseOutlined, ArrowDownOutlined } from '@ant-design/icons'
import { convertToArabicNumeral } from '../../../utils/functions'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { useNavigate } from 'react-router-dom';
import { Packages } from '../../../DummyData/Data';
export default function Pricing() {
  const {t,i18n} = useTranslation()
  const navigate = useNavigate()
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

 
  return (
    <div className={style.section}>
      <div className={style.Header}  data-aos="flip-up" data-aos-duration="2000">
        <img className={style.s_line} src={s_line} alt="Who we are"  data-aos="fade-right" data-aos-duration="2000"/>
          <h1 className={style.h1}>{t("Pricing")}</h1>
        <img className={style.s_line} src={s_line} alt="Who we are"  data-aos="fade-left" data-aos-duration="2000"/>
      </div>
      <h1 className={style.h1}>{t("Be our success partner")}</h1>

      <div className={style.p} data-aos="fade-up" data-aos-duration="1000">{t("Flexible price packages that provide you with a variety of options and features")}</div>

    {/* Start of Cards */}
     {matches && <div className={style.cards} >

        {Packages.map((items,key)=>
        <div className={style.card} id={items?.Special ? style.Best : ""}>
            <h1 className={style.card_h1}>{t(`${items.name}`)}</h1>
            <div className={style.card_p}>{t(`${items.p}`)}</div>
            <div className={style.pricing_content} >
              <div className={style.flex_pricing_div}>
                <Button id={style.save_btn}>{t("Save")}{convertToArabicNumeral(items.discount)}%</Button>
                {items.discount!==100 && <div className={style.hash_price}>{convertToArabicNumeral(items.originalPrice)} {t("AED")}</div>}
              </div>
              <div className={style.main_price}><span style={{fontWeight:'bolder'}}>{convertToArabicNumeral(items.price)} {t("AED")}</span><span className={style.month}>/{t("month")}</span></div>
              <Button onClick={()=>{navigate('/pricing')}} id={style.subscribe_btn}>{t("Subscribe Now")}</Button>
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
            <Button onClick={()=>{navigate('/pricing')}} className={style.Card_Btn}>{t("View All Details")}<ArrowDownOutlined /></Button>
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
              1024: { perPage: 2, },
              767: { perPage: 1, },
              640: { perPage: 1, },
              },
          }
        }
        >
          {Packages.map((items,key)=>

          <SplideSlide >
        <div className={style.card} id={items?.Special ? style.Best : ""}>
            <h1 className={style.card_h1}>{t(`${items.name}`)}</h1>
            <div className={style.card_p}>{t(`${items.p}`)}</div>
            <div className={style.pricing_content}>
              <div className={style.flex_pricing_div}>
                <Button id={style.save_btn}>{t("Save")}{convertToArabicNumeral(items.discount)}%</Button>
                {items.discount!==100 && <div className={style.hash_price}>{convertToArabicNumeral(items.originalPrice)} {t("AED")}</div>}
              </div>
              <div className={style.main_price}><span style={{fontWeight:'bolder'}}>{convertToArabicNumeral(items.price)} {t("AED")}</span><span className={style.month}>/{t("month")}</span></div>
              <Button onClick={()=>{navigate('/pricing')}} id={style.subscribe_btn}>{t("Subscribe Now")}</Button>
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
            <Button onClick={()=>{navigate('/pricing')}} className={style.Card_Btn}>{t("View All Details")}<ArrowDownOutlined style={{transform:i18n.language === 'en' ? 'rotate(180deg)' : 'rotate(0deg)'}}/></Button>
        </div>
          </SplideSlide>
        )}
        </Splide>}
      <img className={style.image_h_line} src={h_line} alt='ahmed'/>
    </div>
  )
}

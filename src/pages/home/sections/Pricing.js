import React,{useEffect,useState, useRef} from 'react'
import s_line from '../../../assets/s_line.png'
import h_line from '../../../assets/h_line.png'
import style from './styles/pricing.module.css'
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { CheckOutlined, CloseOutlined, ArrowDownOutlined, PlusOutlined } from '@ant-design/icons'
import { convertToArabicNumeral } from '../../../utils/functions'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { useNavigate } from 'react-router-dom';
import { Packages } from '../../../DummyData/Data';
import Header3 from './../../../common/Header3';
import Header1 from './../../../common/Header1';
import CustomButton from './../../../common/CustomButton';
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
      <Header1 classname={style.h1} text="Be our success partner"/>
      <Header3 dataAos="fade-up" classname={style.p} text="Flexible price packages that provide you with a variety of options and features"/>

    {/* Start of Cards */}
     {matches && <div className={style.cards} >

        {Packages.map((items,key)=>
        <div className={style.card} id={items?.name === "Basic" ? style.Best : ""}>
            <h1 className={style.card_h1}>{t(`${items.name}`)}</h1>
            <div className={style.card_p}>{t(`${items.p}`)}</div>
            <div className={style.pricing_content} >
              <div className={style.flex_pricing_div}>
                <Button id={style.save_btn}>{t("Save")}{convertToArabicNumeral(items.discount)}%</Button>
                {items.discount!==100 && <div className={style.hash_price}>{convertToArabicNumeral(items.originalPrice_month)} {t("AED")}</div>}
              </div>
              <div className={style.main_price}><span style={{fontWeight:'bolder'}}>{convertToArabicNumeral(items.price_month)} {t("AED")}</span><span className={style.month}>/{t("month")}</span></div>
              <CustomButton onClick={()=>{navigate("/pricing")}} id={style.subscribe_btn} text={"Subscribe Now"}/>
            </div>
            <div className={`${style.features_container} ${style.features_container_home}`}>
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
                <div className={style.feature_li} >{item.status ? <CheckOutlined style={{color:"green"}}/> : item.plus ? <PlusOutlined style={{color:"#88050d"}}/> : <CloseOutlined style={{color:"#88050d"}}/>  }{t(`${item.name}`)}</div>
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
                {items.discount!==100 && <div className={style.hash_price}>{convertToArabicNumeral(items.originalPrice_month)} {t("AED")}</div>}
              </div>
              <div className={style.main_price}><span style={{fontWeight:'bolder'}}>{convertToArabicNumeral(items.price_month)} {t("AED")}</span><span className={style.month}>/{t("month")}</span></div>
              <CustomButton onClick={()=>{navigate("/pricing")}} id={style.subscribe_btn} text={"Subscribe Now"}/>
            </div>
            <div className={`${style.features_container} ${style.features_container_home}`}>
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
                <div className={style.feature_li} >{item.status ? <CheckOutlined style={{color:"green"}}/> : item.plus ? <PlusOutlined style={{color:"#88050d"}}/> : <CloseOutlined style={{color:"#88050d"}}/>  }{t(`${item.name}`)}</div>
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

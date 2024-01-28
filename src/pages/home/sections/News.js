import React,{useEffect,useRef} from 'react'
import style from './styles/news.module.css'
import { convertToArabicNumeral } from '../../../utils/functions'
import { useTranslation } from 'react-i18next'
import s_line from '../../../assets/s_line.png'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '@splidejs/splide/css';
import Header3 from './../../../common/Header3';
import Header1 from '../../../common/Header1'
import { news } from '../../../DummyData/Data'
import { useNavigate } from 'react-router-dom'
export default function News() {
  const{t, i18n} = useTranslation()
  const navigate = useNavigate()
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
     
      <div className={style.Header} data-aos="flip-up" data-aos-duration="2000">
        <img className={style.s_line} src={s_line} alt="Sona3 News" data-aos="fade-right" data-aos-duration="2000"/>
          <Header1 classname={style.h1} text={"Sona3 News"}/>
        <img className={style.s_line} src={s_line} alt="Sona3 News" data-aos="fade-left" data-aos-duration="2000"/>
      </div>
      <div className={style.cards}>
      <Splide  aria-label="My Favorite Images" className="splide"
        ref={splideRef}
        options={ {
            start:0,
            rewind : false,
            width  : '100%',
            padding: 80,
            gap:'4rem',
            perPage: 4,
            direction: i18n.language === 'en' ? 'ltr' : 'rtl',
            lazyLoad: 'nearby',
           // drag   : 'free',
            focus  : 'center',
            //type:'loop',
            breakpoints: {
              1100: {
                  perPage: 3,
                  gap:'1rem',
                  padding: 0,
                },
                640: {
                  perPage: 2,
                  gap:'1rem',
                  padding: 0,
                },
              },
          }
        }
        >
        {news.map((item,i) => (   
                <SplideSlide >
                    <div className={style.card}  key={i} id={i} onClick={()=>{navigate("/blog/E-Commerce/1")}}>
                      <LazyLoadImage  className={style.image_h_line} src={item.image}  effect="blur" />
                      <div className={style.card_text_content}>
                        <p className={style.date} >{convertToArabicNumeral(7)} {t("Nov")} {convertToArabicNumeral(2023)}</p>
                        <Header3 classname={style.text} text={item.text}/>
                      </div>
                    </div>
                </SplideSlide>
        ))}
        </Splide>
      </div>
    </div>
  )
}

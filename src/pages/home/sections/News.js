import React,{useEffect,useRef} from 'react'
import style from './styles/news.module.css'
import sand from '../../../assets/sand.png'
import { convertToArabicNumeral } from '../../../utils/functions'
import { useTranslation } from 'react-i18next'
import s_line from '../../../assets/s_line.png'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '@splidejs/splide/css';
export default function News() {
  const{t, i18n} = useTranslation()
  const splideRef = useRef(null);
  useEffect(() => {
    const splideInstance = splideRef.current?.splide;
    if (splideInstance) {
      splideInstance.destroy();
      splideInstance.mount();
    }
  }, [i18n.language]);

  const news= [
    {text:"ways to earn passive income online", date:"" , image:'person.png'},
    {text:"ways to earn passive income online", date:"" , image:'person.png'},
    {text:"ways to earn passive income online", date:"" , image:'person.png'},
    {text:"ways to earn passive income online", date:"" , image:'person.png'},
    {text:"ways to earn passive income online", date:"" , image:'person.png'},
    {text:"ways to earn passive income online", date:"" , image:'person.png'},
    {text:"ways to earn passive income online", date:"" , image:'person.png'},
    {text:"ways to earn passive income online", date:"" , image:'person.png'},
];
  return (
    <div className={style.section}>
     
      <div className={style.Header} data-aos="flip-up" data-aos-duration="2000">
        <img className={style.s_line} src={s_line} alt="Sona3 News" data-aos="fade-right" data-aos-duration="2000"/>
          <h1 className={style.h1}>{t("Sona3 News")}</h1>
        <img className={style.s_line} src={s_line} alt="Sona3 News" data-aos="fade-left" data-aos-duration="2000"/>
      </div>
      <div className={style.cards}>
      <Splide  aria-label="My Favorite Images" className="splide"
        ref={splideRef}
        options={ {
            start:0,
            rewind : false,
            width  : '100%',
            gap    : '1rem',
            perPage: 5,
            direction: i18n.language === 'en' ? 'ltr' : 'rtl',
            lazyLoad: 'nearby',
            drag   : 'free',
            //focus  : 'center',
            //type:'loop',
            breakpoints: {
              1024: {
                  perPage: 5,
                 
                },
                767: {
                  perPage: 4,
              
                },
                640: {
                  perPage: 2,
                },
              },
          
                
          }
        
        }
        >
        {news.map((item,i) => (   
                <SplideSlide >
                    <div className={style.card}  key={i} id={i} >
                      <LazyLoadImage  className={style.image_h_line} src={sand}  effect="blur" />
                      <div className={style.card_text_content}>
                        <h3 className={style.date} >{convertToArabicNumeral(7)} {t("Nov")} {convertToArabicNumeral(2023)}</h3>
                        <div className={style.text} >{t(`${item.text}`)}</div>
                      </div>
                    </div>
                </SplideSlide>
        ))}
        </Splide>
      </div>
    </div>
  )
}

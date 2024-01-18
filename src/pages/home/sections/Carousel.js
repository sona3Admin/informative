import React,{useRef,useEffect} from 'react'
import style from './styles/carousel.module.css'
import s_line from '../../../assets/s_line.png'
import person from '../../../assets/person.png'
import sarah from '../../../assets/sarah.png'
import layla from '../../../assets/layla.png'
import { useTranslation } from 'react-i18next'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '@splidejs/splide/css';
// import "../css/category_carousel.css";
export default function Carousel() {
  const {t,i18n} = useTranslation()
  const splideRef = useRef(null);
  useEffect(() => {
    const splideInstance = splideRef.current?.splide;
    if (splideInstance) {
      splideInstance.destroy();
      splideInstance.mount();
    }
  }, [i18n.language]);
  const categories= [
    {name:t('Jaber Al-Qahtani, for manufacturer of wooden products'),name_ar:'جابر القحطاني صانع منتجات خشبية', comment:"I loved the wonderful selection of products on the Sona3 platform. It was difficult for me to choose just one product. I received the product I ordered after a short time, and its quality was amazing. I will be a permanent customer of this platform.", image:person},
    {name:t('Aswa Elian'),name_ar:'أسوة عليان', comment:"I am very grateful to have Sona3 platform where I found unique, high-quality products. My purchasing experience was smooth and easy, and the order was delivered on time. I recommend this platform to anyone looking for unique handmade products.", image:sarah},
    {name:t('Mawada Salem'),name_ar:'مودة سالم', comment:"I liked the quick interaction with the customer service team. They were helpful and friendly and helped me solve a small problem I encountered during the purchasing process. The product I chose was great and the shopping experience was great overall.", image:layla},
];
  return (
    <div className={style.section}>
      <div className={style.Header} data-aos="flip-up" data-aos-duration="2000">
        <img className={style.s_line} src={s_line} alt="Who we are" data-aos="fade-right" data-aos-duration="2000"/>
          <h1 className={style.h1}>{t("Our customer's opinions")}</h1>
        <img className={style.s_line} src={s_line} alt="Our customer's opinions" data-aos="fade-left" data-aos-duration="2000"/>
      </div>
      <Splide  aria-label="My Favorite Images" className="splide"
       ref={splideRef}
        options={ {
            start:0,
            rewind : false,
            width  : '100%',
            gap: '1rem',
            perPage: 2,
            direction: i18n.language === 'en' ? 'ltr' : 'rtl',
            lazyLoad: 'nearby',
           // drag   : 'free',
            //focus  : 'center',
            //type:'loop',
            breakpoints: {
                1240: {
                  perPage: 1,
                 
                },
              },
          
                
          }
        
        }
        >
        {categories.map((item,i) => (   
                <SplideSlide >
                    <div className={style.Card} key={i} id={i}  >
                      <div className={style.user_info}>
                        <LazyLoadImage  className={style.user_image} style={{transform:i18n.language === 'en' ? 'scaleX(-1)' : 'scaleX(1)'}} src={item.image}  effect="blur" />
                        <div className={style.username}>{i18n.language === 'en' ? item.name : item.name_ar}</div>
                      </div>
                        <div className={style.comment} style={{textAlign:i18n.language === 'en' ? 'left' : 'right'}} >{t(`${item.comment}`)}</div>
                    </div>
                </SplideSlide>
        ))}
        </Splide>
    </div>
  )
}

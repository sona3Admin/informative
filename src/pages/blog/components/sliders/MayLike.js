import React,{useRef, useEffect} from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '@splidejs/splide/css';
import { useTranslation } from 'react-i18next';
import Data from './../../../../DummyData/Data';
import image from '../../../../assets/image.png'
import style from './style.module.css'
import './slider.css'
export default function MayLike() {
const {May_Like_Articles} = Data()
const{t,i18n} = useTranslation()
const splideRef = useRef(null);
    useEffect(() => {
      const splideInstance = splideRef.current?.splide;
      if (splideInstance) {
        splideInstance.destroy();
        splideInstance.mount();
      }
}, [i18n.language]);

  return (
    <div>
         <Splide  aria-label="My Favorite Images" id="splide_blog"
       ref={splideRef}
        options={ {
            start:0,
            rewind : false,
            width  : '100%',
            gap: '6rem',
            perPage: 5,
            padding:'20px',
            direction: i18n.language === 'en' ? 'ltr' : 'rtl',
            lazyLoad: 'nearby',
           // drag   : 'free',
           //focus  : 'center',
            //type:'loop',
            breakpoints: {
                940: {
                  perPage: 2,
                  gap: '2rem',
                },
              },
          
                
          }
        
        }
        >
        {May_Like_Articles.map((item,i) => (   
                <SplideSlide >
                    <div className={style.Card} key={i} id={i}  >
                      <div className={style.card_info}>
                        <LazyLoadImage  className={style.card_image} style={{transform:i18n.language === 'en' ? 'scaleX(-1)' : 'scaleX(1)'}} src={image}  effect="blur" />
                      </div>
                        <div className={style.title} style={{textAlign:i18n.language === 'en' ? 'left' : 'right'}} >{t(`${item.title}`)}</div>
                    </div>
                </SplideSlide>
        ))}
        </Splide>
    </div>
  )
}

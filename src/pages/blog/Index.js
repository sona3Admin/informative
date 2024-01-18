import React, { useEffect } from 'react'
import useApi from '../components/Loading/LoadingApi'
import style from './index.module.css'
import { useTranslation } from 'react-i18next'
import { convertToArabicNumeral } from '../../utils/functions'
import EndBanner from './../home/sections/EndBanner';
export default function Index() {
useApi(600)
const {t} = useTranslation()
const data = [
  {name:"Daily vistors", number:"3000",background:"rgba(136, 5, 13, 1)"},
  {name:"Sold Product", number:"2000",background:"rgba(223, 144, 25, 1)"},
  {name:"Active Seller", number:"30000",background:"rgba(10, 128, 106, 1)"},
]
useEffect(() => {
  setTimeout(() => {
  scrollToTop();
  }, 1000);
  const scrollToTop = () => { window.scrollTo({ top: 2, behavior: "smooth" }); };
}, []);
  return (
    <div className={style.page_container}>
      <div className={style.content}>
          <div className={style.header}>{t("Welcome to Sona3 Blog")}</div>
          <div className={style.header_p}>{t("Learn about the seamless online shopping experience we offer, supported by a multitude of payment methods, including credit cards, bank transfers, cash on delivery, e-wallets, and mobile payment services.")}</div>
          <div className={style.statistics_cards}>
              {data.map((items,key)=>
                 <div className={style.statistics_card} style={{background:`${items.background}`}} data-aos="fade-up" data-aos-delay={key*500} data-aos-duration="2000">
                    <div className={style.card_number}>{ convertToArabicNumeral(items.number)}</div>
                    <div className={style.card_name} >{t(`${items.name}`)}</div>
                 </div>
              )}
          </div>
          <EndBanner/>
      </div>
    </div>
  )
}

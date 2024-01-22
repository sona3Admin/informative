import React from 'react'
import h_line from './../../assets/h_line.png'
import s_line from './../../assets/s_line.png'
import style from './style.module.css'
import useApi from '../components/Loading/LoadingApi'
import { useTranslation } from 'react-i18next';
import icon_1 from './../../assets/icon_1.png'
import icon_2 from './../../assets/icon_2.png'
import Medal from './../../assets/Medal.png'
import { convertToArabicNumeral } from './../../utils/functions'
import Services from '../home/sections/Services'
import EndBanner from './../home/sections/EndBanner';
import BreadCrumb from './../components/Layout/BreadCrumb';

export default function About() {
 useApi(600)
 const{t,i18n} = useTranslation()
 const data = [
  {name:"Active Seller", number:"3000",background:"rgba(136, 5, 13, 1)"},
  {name:"Sold Product", number:"2000",background:"rgba(223, 144, 25, 1)"},
  {name:"Daily vistors", number:"30000",background:"rgba(10, 128, 106, 1)"},
]
  return (
    <div>
        <img className={style.image_h_line} src={h_line} alt='h_line'/>
        <BreadCrumb/>
        <div className={style.header}  >
              <img className={style.s_line} src={s_line} alt="Who we are" />
              <h1 className={style.header_h}>{t("Who we are ?")}</h1>
              <img className={style.s_line} src={s_line} alt="Who we are"  />
        </div>
        <div className={style.h3_} >{t("The largest platform for every maker and innovator in the UAE")}</div>
        <p className={style.p} >{t("Welcome to “Sona3”, the platform that combines art and craftsmanship to provide the most amazing products that reflect creativity and beauty. We offer many handmade products that have been crafted with care and expertise by talented craftsmen.")}</p>
        <div className={style.header}  >
              <img className={style.s_line} src={s_line} alt="Who we are" />
              <h1 className={style.header_h}>{t("Our Vision")}</h1>
              <img className={style.s_line} src={s_line} alt="Who we are"  />
        </div>
        <p className={style.p2} id={style.p_bold}>{t("An incubator platform for all Emirati makers that is unique in its quality, characterized by its originality, and contributes to enriching community development.")}</p>
          <div className={style.cards}>
            <div className={style.line} id={style.Line_1} data-aos="fade-up">
              <img className={style.icon} src={icon_1} alt="header"/>
              <div className={style.line_text}><span className={style.line_text_bold}>{t("You'll find a diverse range of products, ")}</span><span>{t("from traditional handicrafts to contemporary designs inspired by contemporary art.")}</span></div>
            </div>
            <div className={style.line} id={style.Line_2} data-aos="fade-up">
              <img className={style.icon} src={Medal} alt="header"/>
              <div className={style.line_text}><span className={style.line_text_bold}>{t("We care about details and quality, ")}</span><span>{t("so we only work with experienced craftsmen who have exceptional skills in creating unique products, ")}</span></div>
            </div>
            <div className={style.line} id={style.Line_3} data-aos="fade-up">
              <img className={style.icon} src={icon_2} alt="header"/>
              <div className={style.line_text}><span className={style.line_text_bold}>{t("Whether you are looking for a piece of art to enhance your home, ")}</span><span>{t("Or a special and special gift for someone dear to you, ”Sona3” is the ideal platform to meet your needs, ")}</span></div>
            </div>
          </div>
          <div className={style.message} data-aos="fade-up">
            <div className={style.message_h}>{t("Our Message")}</div>
              <div className={style.message_p}>{t("Empowering and assisting crafts owners, small businesses, and talented people of determination, and becoming the link between the manufacturer and the buyer.")}</div>
          </div>
          <div className={style.statistics} data-aos="fade-up">
            <div className={style.statistics_h} >{t("We are slowly growing our community towards excellence in the UAE")}</div>
            <div className={style.statistics_cards}>
              {data.map((items,key)=>
                 <div className={style.statistics_card} style={{background:`${items.background}`}} data-aos="fade-up" data-aos-delay={key*500} data-aos-duration="2000">
                    <div className={style.card_number}>{ convertToArabicNumeral(items.number)}</div>
                    <div className={style.card_name} >{t(`${items.name}`)}</div>
                 </div>
              )}
            </div>
          </div>
          <Services/>
          <EndBanner color={"#88050D"}/>
    </div>
  )
}

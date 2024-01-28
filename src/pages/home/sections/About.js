import React,{useEffect,useState} from 'react'
import style from './styles/about.module.css'
import catalog from '../../../assets/catalog.png'
import icon_1 from '../../../assets/icon_1.png'
import icon_2 from '../../../assets/icon_2.png'
import Medal from '../../../assets/Medal.png'
import vector from '../../../assets/vector.png'
import note from '../../../assets/note.png'
import s_line from '../../../assets/s_line.png'
import { useTranslation } from 'react-i18next'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import Header3 from './../../../common/Header3';
import Header1 from './../../../common/Header1';
import CustomButton from './../../../common/CustomButton';

export default function About() {
  const {t} = useTranslation()
  const navigate = useNavigate()
  const[matches,setMatches] = useState(window.matchMedia("(min-width: 1100px)").matches)
  useEffect(() => {const handler = (e) => setMatches( e.matches ); window.matchMedia("(min-width: 1100px)").addListener(handler);},[])

  return (
    <div className={style.Section}>
      <div className={style.Row}>
          <div className={style.Column}>
            <div className={style.header} data-aos="flip-up" >
              <img className={style.s_line} src={s_line} alt="Who we are" data-aos="fade-right" />
            <Header1 text="About Sona3" style={{textAlign:"center"}}/>
              {!matches && <img className={style.s_line} src={s_line} alt="Who we are" data-aos="fade-left" />}
            </div>
            <Header3 classname={style.h3} dataAos={"fade-up"} text="The largest platform for every maker and innovator in the UAE"/>

            <p className={style.p} data-aos="fade-up">{t("Welcome to “Sona3”, the platform that combines art and craftsmanship to provide the most amazing products that reflect creativity and beauty. We offer many handmade products that have been crafted with care and expertise by talented craftsmen.")}</p>

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
          <img className={style.catalog} src={catalog} alt="header" data-aos="zoom-in" data-aos-delay="100"/>
      </div>
      <div className={style.Row_2_content}>
          <div className={style.Row_2}>
            <div className={style.Card}>
                <img className={style.image} src={vector} alt="header" />
                <h1 className={style.Card_header}>{t("Our Vision")}</h1>
                <p>{t("An incubator platform for all Emirati makers that is unique in its quality, characterized by its originality, and contributes to enriching community development.")}</p>
            </div>
            <div className={style.Card} >
                <img id={style.message_image} className={style.image} src={note} alt="note" />
                <h1 className={style.Card_header}>{t("Our Message")}</h1>
                <p>{t("Empowering and assisting crafts owners, small businesses, and talented people of determination, and becoming the link between the manufacturer and the buyer.")}</p>
            </div>
          </div>
          <CustomButton onClick={()=>{navigate("/about")}} id={style.Button} text={"More Details"}/>
      </div>
    </div>
  )
}

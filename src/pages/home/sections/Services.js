import React,{useState} from 'react'
import s_line from '../../../assets/s_line.png'
import style from './styles/services.module.css'
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Data from '../../../DummyData/Data';
import Header3 from './../../../common/Header3';
export default function Services() {
  const{sellerData, customerData} = Data()
  const[serviceType, setServiceType] = useState('sellers')
  const {t,i18n} = useTranslation()
  const navigate = useNavigate()
  const[data, setData] = useState(sellerData)
  return (
    <div className={style.section}>
      <div className={style.Header} data-aos="flip-up" data-aos-duration="1000">
        <img className={style.s_line} src={s_line} alt="Who we are"  data-aos="fade-right" data-aos-duration="2000"/>
          <h1 className={style.h1}>{t("Our Services")}</h1>
        <img className={style.s_line} src={s_line} alt="Who we are"  data-aos="fade-left" data-aos-duration="2000"/>
      </div>
      <Header3 classname={style.p} dataAos={"fade-up"} text="The makers of the application make your bridge to the world of creativity and craftsmanship in the Emirates"/>
      <div className={style.buttons}>
        <Button className={ serviceType === "sellers" ? style.button_active : style.button } onClick={()=>{setServiceType("sellers"); setData(sellerData)}} >{t("Sellers")}</Button>
        <Button className={ serviceType === "customers" ? style.button_active : style.button } onClick={()=>{setServiceType("customers");setData(customerData)}} >{t("Customers")}</Button>
      </div>
      <div className={style.cards}>
      {data.map((item, key) => (
          <div className={style.card} key={key} data-aos="flip-left" data-aos-duration="1500">
            <img className={style.card_icon} src={item.img} alt="bag" />
            <h1 className={style.card_h1}>{t(`${item.header}`)}</h1>
            <div className={style.card_p}>{t(`${item.p}`)}</div>
            <Button style={{boxShadow:"none"}} onClick={()=>navigate(`/services`)} className={style.Card_Btn}>{t('Learn More')}<FaArrowLeft style={{ transform: i18n.language === 'en' ? 'rotate(180deg)' : 'rotate(0deg)' }} /></Button>
          </div>
        ))}
      </div>
    </div>
  )
}

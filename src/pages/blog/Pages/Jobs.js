import React,{useState,useEffect} from 'react'
import useApi from './../../components/Loading/LoadingApi'
import style from './style/Pages.module.css'
import { useTranslation } from 'react-i18next'
import image from '../../../assets/image.png'
import { Col, Row } from 'antd'
import { cards } from '../../../DummyData/Data'
export default function Jobs() {
useApi(600)
const {t} = useTranslation()
const[matches,setMatches] = useState(window.matchMedia("(min-width: 950px)").matches)
useEffect(() => {const handler = (e) => setMatches( e.matches ); window.matchMedia("(min-width: 950px)").addListener(handler);},[])
  return (
    <div>
      <h1 className={style.h}>{t("Jobs")}</h1>
      <div className={style.cards}>
        <Row gutter={[8, 32]}>
          {cards.map((item,key)=>
          <Col className="gutter-row" span={matches ? 6 : 12}>
          <img className={style.card_image} src={image} alt='card'/>
          <div className={style.header}>{t(`${item.header}`)}</div>
          <div className={style.p}>{t(`${item.p}`)}</div>
        </Col>
          )}
        </Row>
      </div>
    </div>
  )
}

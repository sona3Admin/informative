import React from 'react'
import useApi from './../../components/Loading/LoadingApi'
import style from './style/Pages.module.css'
import { useTranslation } from 'react-i18next'
import { cards } from '../../../DummyData/Data'
import Cards from './../components/cards/Cards';
export default function Jobs() {
useApi(600)
const {t} = useTranslation()
  return (
    <div className={style.page_container}>
      <div className={style.content}>
        <h1 className={style.h}>{t("Jobs")}</h1>
        <Cards data={cards}/>
      </div>
    </div>
  )
}

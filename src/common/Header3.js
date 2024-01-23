import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Header3({text, classname, dataAos, id}) {
const {t, i18n} = useTranslation()
  return (
    <h3 data-aos={dataAos} className={classname} id={id} style={{fontFamily:i18n.language === 'en' ? "JosefinSans" : "GE_SS_bold"}}>{t(`${text}`)}</h3>
  )
}

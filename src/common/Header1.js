import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Header1({text, classname, style}) {
  const {t,i18n} = useTranslation()
  const mergedStyles = {
  fontFamily: i18n.language === 'en' ? 'JosefinSans' : 'GE_SS_bold',
  ...style, 
};
  return (
    <h1 className={classname} style={mergedStyles}>{t(`${text}`)}</h1>
  )
}

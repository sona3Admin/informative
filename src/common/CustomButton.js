import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'antd';

export default function CustomButton({text, id, style, type, onClick, component, DataAos}) {
  const {t,i18n} = useTranslation()
  const mergedStyles = {
  fontFamily: i18n.language === 'en' ? 'JosefinSans' : 'GE_SS_bold',
  ...style, 
};
  return (
    <Button onClick={onClick} type={type} id={id} style={mergedStyles} data-aos={DataAos}>{t(`${text}`)}{component}</Button>
  )
}

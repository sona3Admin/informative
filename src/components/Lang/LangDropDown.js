import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import ar from '../../assets/ar.png'
import en from '../../assets/en.png'
import style from './style.module.css'
const LangDropDown = () => {
  const{t,i18n} = useTranslation()
  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value);
    localStorage.setItem('lang', value);
  };

  const menu = (
    <Menu>
      <Menu.Item key="ar" onClick={()=>{handleLanguageChange('ar')}}>العربية</Menu.Item>
      <Menu.Item key="en" onClick={()=>{handleLanguageChange('en')}}>English</Menu.Item>
    </Menu>
  );

  return (
    <nav>
          <Dropdown overlay={menu}>
            <Button  id={style.LangBadge_BTN}>
              {/* <DownOutlined/> */}
              <img className={style.image_lang} src={i18n.language==='en'? en : ar } alt="flag"/>
            </Button>
          </Dropdown>
    </nav>
  );
};

export default LangDropDown;

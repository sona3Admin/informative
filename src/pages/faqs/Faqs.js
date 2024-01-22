import React, { useState } from 'react'
import style from './style.module.css'
import s_line from './../../assets/s_line.png'
import h_line from './../../assets/h_line.png'
import useApi from '../components/Loading/LoadingApi'
import { useTranslation } from 'react-i18next'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { Collapse } from 'antd'
import { common_q, support_q, pay_q, return_q, products_q } from '../../DummyData/Data'
import BreadCrumb from './../components/Layout/BreadCrumb';
import EndBanner from './../home/sections/EndBanner';
const { Panel } = Collapse;

export default function Faqs() {
  useApi(600)
  const {t} = useTranslation()
  const[data,setData]=useState(common_q)
  const[value,setValue]=useState("Common")
  const [Key,setKey] = useState(null)
  const customExpandIcon = ({ isActive }) => ( <> {isActive ? <MinusOutlined /> : <PlusOutlined />} </> );
  const handleChange = (value) => {
    if(value === 'Common'){setData(common_q);setValue("Common")}
    if(value === 'Payment'){setData(pay_q);setValue("Payment")}
    if(value === 'Support'){setData(support_q);setValue("Support")}
    if(value === 'Return'){setData(return_q);setValue("Return")}
    if(value === 'Products'){setData(products_q);setValue("Products")}
  };
  const genExtra = (value, key) => (
    <span style={{color: key === Key ? "rgba(136, 5, 13, 1)" : "rgba(17, 17, 17, 1)", fontWeight: key !== Key ? "400" : "bolder"}}>{value}</span>
  );

  return (
    <div>
        <img className={style.image_h_line} src={h_line} alt='h_line' />
        <BreadCrumb/>
        <div className={style.header} >
          <img className={style.s_line} src={s_line} alt="Questions" />
            <h1 className={style.h1}>{t("Common Questions")}</h1>
          <img className={style.s_line} src={s_line} alt="Questions" />
        </div>
        <div className={style.p}>{t("All inquiries and suggested questions")}</div>
        <div className={style.content}>
            <div className={style.Select}>
                <div style={{color:value === 'Common' ? "rgba(136, 5, 13, 1)" : "black", fontWeight: value === 'Common' ? "bold" : "100" }} className={style.Select_Li} onClick={()=>{handleChange("Common")}}>{t("Common Questions")}</div>
                <div style={{color:value === 'Payment' ? "rgba(136, 5, 13, 1)" : "black", fontWeight: value === 'Payment' ? "bold" : "100"  }} className={style.Select_Li} onClick={()=>{handleChange("Payment")}}>{t("Payment and subscriptions")}</div>
                <div style={{color:value === 'Support' ? "rgba(136, 5, 13, 1)" : "black", fontWeight: value === 'Support' ? "bold" : "100"  }} className={style.Select_Li} onClick={()=>{handleChange("Support")}}>{t("Help & Support")}</div>
                <div style={{color:value === 'Return' ? "rgba(136, 5, 13, 1)" : "black", fontWeight: value === 'Return' ? "bold" : "100"  }} className={style.Select_Li} onClick={()=>{handleChange("Return")}}>{t("Return and exchange")}</div>
                <div style={{color:value === 'Products' ? "rgba(136, 5, 13, 1)" : "black", fontWeight: value === 'Products' ? "bold" : "100"  }} className={style.Select_Li} onClick={()=>{handleChange("Products")}}>{t("Products")}</div>
            </div>
            <div className={style.expands}>
            <Collapse accordion expandIcon={customExpandIcon} >
              {data.map((panel,key) => (
                <Panel key={panel.key} header={genExtra(t(panel.header),panel.key)} onClick={()=>{panel.key !== Key ? setKey(panel.key) : setKey(null) }}>
                  <p >{t(panel.content)}</p>
                </Panel>
              ))}
            </Collapse>
            </div>
        </div>
        <EndBanner color={"rgba(223, 144, 25, 1)"}/>
    </div>
  )
}

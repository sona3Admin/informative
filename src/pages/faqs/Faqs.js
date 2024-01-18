import React, { useState } from 'react'
import style from './style.module.css'
import s_line from './../../assets/s_line.png'
import h_line from './../../assets/h_line.png'
import useApi from '../components/Loading/LoadingApi'
import { useTranslation } from 'react-i18next'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { Collapse, Select } from 'antd'
import { common_q, support_q, pay_q, return_q, products_q } from '../../DummyData/Data'
const { Panel } = Collapse;
const { Option } = Select;

export default function Faqs() {
  useApi(600)
  const {t} = useTranslation()
  const[data,setData]=useState(common_q)
  const customExpandIcon = ({ isActive }) => ( <> {isActive ? <MinusOutlined /> : <PlusOutlined />} </> );
  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
    if(value === 'Common'){setData(common_q)}
    if(value === 'Payment'){setData(pay_q)}
    if(value === 'Support'){setData(support_q)}
    if(value === 'Return'){setData(return_q)}
    if(value === 'Products'){setData(products_q)}
  };
  return (
    <div>
        <img className={style.image_h_line} src={h_line} alt='h_line' />
        <div className={style.header} >
          <img className={style.s_line} src={s_line} alt="Questions" />
            <h1 className={style.h1}>{t("Common Questions")}</h1>
          <img className={style.s_line} src={s_line} alt="Questions" />
        </div>
        <div className={style.p}>{t("All inquiries and suggested questions")}</div>
        <div className={style.content}>
            <div className={style.Select}>
              <Select defaultValue="Common" style={{ width: '100% ',textAlign:'center',height:'50px'}} onChange={handleChange}>
                <Option value="Common" style={{ textAlign:'center',height:'50px'}}>{t("Common Questions")}</Option>
                <Option value="Payment" style={{ textAlign:'center',height:'50px'}}>{t("Payment and subscriptions")}</Option>
                <Option value="Support" style={{ textAlign:'center',height:'50px'}}>{t("Help & Support")}</Option>
                <Option value="Return" style={{ textAlign:'center',height:'50px'}}>{t("Return and exchange")}</Option>
                <Option value="Products" style={{ textAlign:'center',height:'50px'}}>{t("Products")}</Option>
                {/* Add more Option components as needed */}
              </Select>
            </div>
            <div className={style.expands}>
            <Collapse accordion expandIcon={customExpandIcon} >
              {data.map((panel,key) => (
                <Panel header={t(panel.header)} key={panel.key}  >
                  <p >{t(panel.content)}</p>
                </Panel>
              ))}
            </Collapse>
            </div>
        </div>
    </div>
  )
}

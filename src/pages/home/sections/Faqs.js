import React, { useEffect, useState } from 'react'
import style from './styles/faqs.module.css'
import { useTranslation } from 'react-i18next'
import { Button, Collapse } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import s_line from '../../../assets/s_line.png'
import { useNavigate } from 'react-router-dom';
import { common_q } from '../../../DummyData/Data';
const { Panel } = Collapse;
export default function Faqs() {
  const{t} = useTranslation()
  const customExpandIcon = ({ isActive }) => ( <> {isActive ? <MinusOutlined /> : <PlusOutlined />} </> );
  const navigate = useNavigate()
  const [Key,setKey] = useState(null)
  const genExtra = (value, key) => (
    <span style={{color: key === Key ? "rgba(136, 5, 13, 1)" : "rgba(17, 17, 17, 1)", fontWeight: key !== Key ? "400" : "bolder"}}>{value}</span>
  );

  return (
    <div className={style.section}>
      <div className={style.Header} >
        <img className={style.s_line} src={s_line} alt="Sona3 News" />
        <h1 className={style.h1}>{t("Common Questions")}</h1>
        <img className={style.s_line} src={s_line} alt="Sona3 News"/>
      </div>
      <Collapse accordion expandIcon={customExpandIcon}  >
      {common_q.map((panel,key) => (
        <Panel key={panel.key} header={genExtra(t(panel.header),panel.key)} onClick={()=>{panel.key !== Key ? setKey(panel.key) : setKey(null) }}>
          <p >{t(panel.content)}</p>
        </Panel>
      ))}
    </Collapse>
    <Button onClick={()=>{navigate("/faqs")}} id={style.Button} data-aos="fade-up">{t("More Questions")}</Button>
    </div>
  )
}

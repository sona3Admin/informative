import React from 'react'
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
  return (
    <div className={style.section}>
      <div className={style.Header} >
        <img className={style.s_line} src={s_line} alt="Sona3 News" />
        <h1 className={style.h1}>{t("Common Questions")}</h1>
        <img className={style.s_line} src={s_line} alt="Sona3 News"/>
      </div>
      <Collapse accordion expandIcon={customExpandIcon} >
      {common_q.map((panel,key) => (
        <Panel header={t(panel.header)} key={panel.key}  >
          <p >{t(panel.content)}</p>
        </Panel>
      ))}
    </Collapse>
    <Button onClick={()=>{navigate("/faqs")}} id={style.Button} data-aos="fade-up">{t("More Questions")}</Button>
    </div>
  )
}

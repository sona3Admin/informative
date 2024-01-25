import React,{useState, useEffect} from 'react'
import h_line from './../../assets/h_line.png'
import s_line from './../../assets/s_line.png'
import style from './style.module.css'
import useApi from '../../components/Loading/LoadingApi'
import { useTranslation } from 'react-i18next';
import icon_1 from './../../assets/icon_1.png'
import icon_2 from './../../assets/icon_2.png'
import Medal from './../../assets/Medal.png'
import img_1 from './../../assets/about/1.png'
import img_2 from './../../assets/about/2.png'
import img_3 from './../../assets/about/3.png'
import img_4 from './../../assets/about/4.png'
import img_5 from './../../assets/about/5.png'
import img_6 from './../../assets/about/6.png'
import img_7 from './../../assets/about/7.png'
import { CheckOutlined } from '@ant-design/icons'
import Services from '../home/sections/Services'
import EndBanner from './../home/sections/EndBanner';
import BreadCrumb from '../../components/Layout/BreadCrumb';
import Header3 from '../../common/Header3'
import { Col, Row } from 'antd';
import Header1 from '../../common/Header1'

export default function About() {
 useApi(600)
 const{t,i18n} = useTranslation()
 const data = [
  {name:"Active Seller", number:"3000",background:"rgba(136, 5, 13, 1)"},
  {name:"Sold Product", number:"2000",background:"rgba(223, 144, 25, 1)"},
  {name:"Daily vistors", number:"30000",background:"rgba(10, 128, 106, 1)"},
]
 const Goals = [
  {title:"Facilitating procedures", image:img_1},
  {title:"Digital leadership", image:img_2},
  {title:"Support and empowerment", image:img_3},
  {title:"Community development", image:img_4},
  {title:"Improvement", image:img_5},
  {title:"Quality and innovation", image:img_6},
  {title:"Privacy and respect", image:img_7},
]
 const AboutPoints = [
  {title:"We target creators and makers who want to sell their handmade products and services online."},
  {title:"We encourage local markets in the UAE that are interested in unique and handcrafted products."},
  {title:"We seek to create an image that reflects our distinction as a platform that supports creativity and contributes to the success of creators."},
  {title:"We distinguish ourselves from our competitors by providing an interactive environment for creators and makers."},
]
const[matches,setMatches] = useState(window.matchMedia("(min-width: 1050px)").matches)
useEffect(() => {const handler = (e) => setMatches( e.matches ); window.matchMedia("(min-width: 1050px)").addListener(handler);},[])
  return (
    <div>
        <img className={style.image_h_line} src={h_line} alt='h_line'/>
        <BreadCrumb/>
        <div className={style.header}  >
              <img className={style.s_line} src={s_line} alt="Who we are" />
                <Header1 classname={style.header_h} text={"About Sona3"}/>
              <img className={style.s_line} src={s_line} alt="Who we are"  />
        </div>
        <Header3 classname={style.h3_} text={"Online platform built with Emirati hands A home for every maker and creator"}/>
          <div className={style.cards}>
            <Row gutter={[8, 8]} type="flex" align="middle">
              <Col span={matches ? 12 : 24} type="flex" align="middle">
                <div className={style.line} id={style.Line_1}>
                  <img className={style.icon} src={icon_1} alt="header"/>
                  <div className={style.line_text}><span className={style.line_text_bold}>{t("Sona3 is an online platform built by Emirati hands, ")}</span><span className={style.p}>{t("designed to be a home for every maker and innovator in various fields, and to enable creators and makers to form a fan base that increases their commercial and financial growth opportunities.")}</span></div>
                </div>
              </Col>
              <Col span={matches ? 12 : 24} type="flex" align="middle">
                <div className={style.line} id={style.Line_2} >
                  <img className={style.icon} src={Medal} alt="header"/>
                  <div className={style.line_text}><span className={style.line_text_bold}>{t("At Sona3, we believe that creativity and innovation begin with creating new opportunities, ")}</span><span className={style.p}>{t("and this is what we offer on our platform to every creative person to help him start his journey and to support him to attract clients.")}</span></div>
                </div>
              </Col>
              <Col span={matches ? 12 : 24} type="flex" align="middle">
                <div className={style.line} id={style.Line_3} >
                  <img className={style.icon} src={icon_2} alt="header"/>
                  <div className={style.line_text}><span className={style.line_text_bold}>{t("Our platform is distinguished by the use of modern technologies, ")}</span><span className={style.p}>{t("and unique designs that allow manufacturers to upload their products or services easily and display them in an attractive and distinctive way.")}</span></div>
                </div>
              </Col>
              <Col span={matches ? 12 : 24} type="flex" align="middle">
                <div className={style.line} id={style.Line_1} >
                  <img className={style.icon} src={icon_1} alt="header"/>
                  <div className={style.line_text}><span className={style.line_text_bold}>{t("Our efforts are focused on supporting and empowering owners of home projects, ")}</span><span className={style.p}>{t("handicrafts and highlighting the creative hands of people of determination, as well as owners of productive farms, with the aim of improving the quality of community services.")}</span></div>
                </div>
              </Col>
            </Row>
          </div>
          <div className={style.message_content}>
              <div className={style.message}  >
                <Header3 classname={style.message_h} text={"Our Vision"}/>
                <div className={style.message_p}>{t("Empowering and assisting crafts owners, small businesses, and talented people of determination, and becoming the link between the manufacturer and the buyer.")}</div>
              </div>

              <div className={style.message}  >
                <Header3 classname={style.message_h} text={"Our Message"}/>
                <div className={style.message_p}>{t("Empowering and assisting crafts owners, small businesses, and talented people of determination, and becoming the link between the manufacturer and the buyer.")}</div>
              </div>
          </div>
          <div className={style.Goals_Container}>
            <div className={style.goals_header_container}  >
                <img className={style.s_line} src={s_line} alt="Our Goals" />
                  <div className={style.goals_header}>{t("Our Goals")}</div>
                <img className={style.s_line} src={s_line} alt="Our Goals"  />
            </div>
            <Row gutter={[8, 8]} type="flex" align="middle" style={{justifyContent:"center"}}>
              {Goals.map((items,key)=>
                <Col span={matches ? 6 : 8} type="flex" align="middle"  style={{justifyContent:"center"}}>
                <div className={style.goal_card} >
                  <img className={style.goal_image} src={items.image} alt="goal_image_1"/>
                  <div className={style.goal_text}>{t(`${items.title}`)}</div>
                </div>
              </Col>
              )}
            </Row>
          </div>
          <div className={style.header}  >
              <img className={style.s_line} src={s_line} alt="Who we are" />
              <Header3 classname={style.points_header_h} text={"Empowering makers and creators is our priority"}/>
              <img className={style.s_line} src={s_line} alt="Who we are"  />
          </div>
          <div className={style.Points_Container}>
            <Row gutter={[8, 8]} type="flex" align="middle" style={{justifyContent:"center"}}>
              {AboutPoints.map((items,key)=>
                <Col span={matches ? 12 : 24} type="flex" align="middle"  style={{justifyContent:"center"}}>
                <div className={style.point_card} >
                  <CheckOutlined className={style.point_check_icon}/>
                  <div className={style.point_text}>{t(`${items.title}`)}</div>
                </div>
              </Col>
              )}
            </Row>
          </div>
          <EndBanner color={"#88050D"}/>
    </div>
  )
}

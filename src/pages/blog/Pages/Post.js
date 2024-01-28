import Header1 from '../../../common/Header1'
import style from './style/post.module.css'
import person from '../../../assets/post_man.png'
import post_img from '../../../assets/post_img.png'
import google from '../../../assets/google_store.png'
import app from '../../../assets/app_store.png'
import facebook from '../../../assets/facebook.svg'
import instagram from '../../../assets/instagram.svg'
import twitter from '../../../assets/twitter.svg'
import { useTranslation } from 'react-i18next';
import { Button, } from 'antd';
import Data from './../../../DummyData/Data';
import MayLike from '../components/sliders/MayLike'
import BreadCrumb from './../../../components/Layout/BreadCrumb';
import CommentForm from '../components/forms/CommentForm'
export default function Post() {
const {t} = useTranslation()
const {articale_ads} = Data()
  return (
    <div className={style.page_container}>
    <div className={style.post_container}>
        <div className={style.post_content}>
          <div className={style.BreadCrumbs}><BreadCrumb/></div>
          
          <Header1 classname={style.header} text={"Sona3 is the best e-commerce platform in the UAE"}/>
          <ul className={style.post_info}>
            <img className={style.post_user_img} src={person} alt={"person"}/>
            <div className={style.post_user}>Sona3 Team</div>
            <li className={style.post_date}>11 may 2023</li>
            <li className={style.post_sub}>Professional license</li>
          </ul>
          <img className={style.post_img} src={post_img} alt='post_img'/>
          <p className={style.post_p} >{t("You need the professional license simulator to be trained in a distinctive way to pass the exams. This is because its many features have made it the first in the Kingdom in this field. With it, you will obtain a license to work in Saudi schools and prove your competence and skill, because it puts you in front of an actual test through which you achieve the highest levels of training. Continue. The following lines and learn more about the best application for simulating professional license tests for teachers.")}</p>
          <Header1 classname={style.header} text={"Professional license simulator"}/>
          <div className={style.post_p_list}>
            <div className={style.post_p_lis_li}>{t("What do you need to obtain a professional license through which you can work in Saudi schools, whether private or government?")}</div>
            <div className={style.post_p_lis_li}>{t("There are some conditions, most notably passing the general and specialized professional license with the grades preferred by the teacher who is applying to work there.")}</div>
            <div className={style.post_p_lis_li}>{t("There are three ranks, the highest being that of the expert teacher, whose score is more than 80 out of 100, the practicing teacher, whose score ranges between 50 and 69, and the advanced teacher, whose score ranges between 70 and 79 degrees.")}</div>
            <div className={style.post_p_lis_li}>{t("There are many steps you need to obtain a license to practice the teaching profession, starting with registering on the Education and Training Evaluation Commission website and ending with obtaining the license, including the stage of preparing for and taking tests.")}</div>
            <div className={style.post_p_lis_li}>{t("This makes you need to apply a simulator through which you can ensure training appropriate to the level of the actual tests, while adhering to all the Authority’s standards.")}</div>
          </div>
          <Header1 classname={style.header} text={"The best professional licensing courses"}/>
          
          <div className={style.post_p_list}>
            <div className={style.post_p_lis_li}>{t("The professional license simulator offers you many features and services that you need on the way to obtaining your teaching license")}</div>
            <div className={style.post_p_lis_li}>{t("This is because it is the first program in the Kingdom specialized in training teachers and includes distinguished courses in this field, in addition to many other features, the most prominent of which are the following:")}</div>
          </div>
          <ul id={style.ul}>
            <li>{t("The application includes a powerful and rich database of more than 18,000 questions.")}</li>
            <li>{t("The questions available on the application are selected from previous years’ professional license tests.")}</li>
            <li>{t("The questions include the correct answers after being reviewed and revised by experts.")}</li>
          </ul>
          <div className={style.post_p_lis_li}>{t("The professional license simulator is distinguished by providing distinguished services at competitive prices.")}</div>
          <ul id={style.ul}>
            <li>{t("The application includes a powerful and rich database of more than 18,000 questions.")}</li>
            <li>{t("The questions available on the application are selected from previous years’ professional license tests.")}</li>
            <li>{t("The questions include the correct answers after being reviewed and revised by experts.")}</li>
          </ul>
          <Header1 classname={style.header} text={"Professional license test form for teachers"}/>
          
          <div className={style.post_p_list}>
            <div className={style.post_p_lis_li}>{t("The professional license simulator offers you many features and services that you need on the way to obtaining your teaching license")}</div>
            <div className={style.post_p_lis_li}>{t("This is because it is the first program in the Kingdom specialized in training teachers and includes distinguished courses in this field, in addition to many other features, the most prominent of which are the following:")}</div>
          </div>
          <ul id={style.ul}>
            <li>{t("The application includes a powerful and rich database of more than 18,000 questions.")}</li>
            <li>{t("The questions available on the application are selected from previous years’ professional license tests.")}</li>
            <li>{t("The questions include the correct answers after being reviewed and revised by experts.")}</li>
          </ul>
          <div className={style.post_p_lis_li}>{t("The professional license simulator is distinguished by providing distinguished services at competitive prices.")}</div>
          <ul id={style.ul}>
            <li>{t("The application includes a powerful and rich database of more than 18,000 questions.")}</li>
            <li>{t("The questions available on the application are selected from previous years’ professional license tests.")}</li>
            <li>{t("The questions include the correct answers after being reviewed and revised by experts.")}</li>
          </ul>
        </div>
        <div className={style.post_ad_side}>
          <div className={style.ad_banner}>
              <div>
                <Header1 classname={style.ad_card_header} text={"Register now and be among the elite with Makers"}/>
                <p className={style.ad_card_p}>{t("Makers App blog articles help grow your project and increase your sales")}</p>
              </div>
              <div className={style.ad_card_small_header}>{t("Numbers we achieved")}</div>
              <div className={style.small_cards}>
                <div className={style.small_card}>
                  <div className={style.small_card_number}>5,000+</div>
                  <div className={style.small_card_text}>{t("Maker")}</div>
                </div>
                <div className={style.small_card}>
                  <div className={style.small_card_number}>30+</div>
                  <div className={style.small_card_text}>{t("Specialty")}</div>
                </div>
                <div className={style.small_card}>
                  <div className={style.small_card_number}>200+</div>
                  <div className={style.small_card_text}>{t("Type")}</div>
                </div>
              </div>
              <p className={style.ad_card_p} style={{marginBottom:'0px'}}>{t("Download App Now")}</p>
              <img onClick={()=>{window.open(`https://play.google.com/store/games?device=windows&pli=1`, '_blank')}} className={style.ad_download_img} src={google} alt='ad_download_img'/>
              <img onClick={()=>{window.open(`https://www.apple.com/store`, '_blank')}} className={style.ad_download_img} src={app} alt='ad_download_img'/>
              <div className={style.line_break}>
                <p className={style.ad_card_p_border}></p>
                <p className={style.ad_card_p}>{t("OR")}</p>
                <p className={style.ad_card_p_border}></p>
              </div>
              <Button  onClick={()=>{window.open(`https://shop.sona3.ae/my-account/`, '_blank')}} id={style.ad_card_btn}>{t(" Subscribe Now ")}</Button>
            </div>
            <div>
              <Header1 classname={style.header_secondary} text={"Popular articles 🔥"}/>
              <div className={style.popular_news_container}>
              {articale_ads.map((items,key)=>
              <div className={style.popular_news_card}>
                <div className={style.image_wrapper}>
                  <img className={style.popular_news_img} src={items.image} alt={"popular"}/>
                  <div className={style.text_over_image}>{t(`${items.views}`)}</div>
                </div>

                <div className={style.popular_news_card_texts}>
                  <div className={style.popular_news_card_title}>{t(`${items.title}`)}</div>
                  <ul className={style.popular_news_card_date}>
                    <div>{t(`${items.date}`)}</div>
                    <li>{t(`${items.section}`)}</li>
                  </ul>
                </div>
              </div>
              
              )}
              </div>
            </div>


        </div>
    </div>
      <div className={style.bottom_content}>
          <div className={style.hashtags}>
            <div className={style.hashtag}>{t("#Handmade_crafts")}</div>
            <div className={style.hashtag}>{t("#Handmade_crafts_Emirates")}</div>
            <div className={style.hashtag}>{t("#E-commerce_Emirates")}</div>
          </div>
          <h3 className={style.h3}>{t("Share the article")}</h3>
        <div className={style.social_links}>
          <img onClick={()=>{window.open(`https://www.facebook.com/sona3app`, '_blank')}} className={style.social_img} src={facebook} alt='facebook'/>
          <img onClick={()=>{window.open(`https://www.instagram.com/sona3app/`, '_blank')}} className={style.social_img} src={instagram} alt='instagram'/>
          <img onClick={()=>{window.open(`https://www.snapchat.com/add/sona3app`, '_blank')}} className={style.social_img} src={twitter} alt='whatsapp'/>
        </div>       
        <CommentForm/>
      <h1 className={style.h1}>{t("Articles you may like")}</h1>
      <MayLike/>
      </div>
    </div>
  )
}

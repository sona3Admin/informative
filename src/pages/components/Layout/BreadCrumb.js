import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import style from './styles/breadcrumbs.module.css'
import { useTranslation } from 'react-i18next';
export default function BreadCrumb() {
const{t} = useTranslation()
const location = useLocation()
const pathnames = location.pathname.split('/').filter((x) => x);
  return (
    <div>
      <Breadcrumb id={style.Breadcrumb}>
      <Breadcrumb.Item> <Link to="/">{t("Home")}</Link> </Breadcrumb.Item>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return (
          <Breadcrumb.Item key={index}>
            {isLast ? 
              ( <span className={style.bread_active}>{t(`${name}`)}</span> ) 
            : 
              ( <Link  to={`${routeTo}?page=1&limit=5`}>{t(`${name}`)}</Link> )
            }
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
    </div>
  )
}

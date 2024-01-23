import { Route, Routes } from 'react-router-loading'
import Services from './pages/services/Page'
import Pricing from './pages/pricing/Page'
import Home from './pages/home/Page'
import About from './pages/about/About'
import { topbar } from "react-router-loading";
import Support from './pages/support/Support'
import Faqs from './pages/faqs/Faqs'
import Ecommerce from './pages/blog/Pages/Ecommerce'
import Index from './pages/blog/Index'
import Jobs from './pages/blog/Pages/Jobs'
import Crafts from './pages/blog/Pages/Crafts'
import Sona3App from './pages/blog/Pages/Sona3App'
import Layout from './pages/blog/components/Layout'
import PrivacyPolicy from './pages/privacy&policy/PrivacyPolicy';
import TermsConditions from './pages/terms&conditions/TermsConditions';
import Post from './pages/blog/Pages/Post';
topbar.config({
  autoRun      : true,
  barThickness : 9,
  barColors: {
    '0': 'rgba(139, 0, 0, 0.9)',      // Dark Red
    '0.2': 'rgba(139, 0, 0, 0.9)',  // Maroon
    '0.4': 'rgba(139, 0, 0, 0.9)',  // Dark Orange
    '0.6': 'rgba(157, 120, 61, 0.57)',  // Orange
    '0.8': 'rgba(157, 120, 61, 0.57)', // Burnt Orange
    '1.0': 'rgba(255, 214, 147, 0.57)'    // Rust Red
  },
  shadowBlur   : 10,
  shadowColor  : 'rgba(0,   0,   0,   .6)',
  // className: i18n.language === 'en' ? 'topbar_en' : 'topbar_ar'
})
export default function App_Routes() {
  return (
    <>
      <Routes>
          <Route exact index element={<Home/>} loading />
          <Route exact path="/services" element={<Services/>} loading />
          <Route exact path="/about" element={<About/>} loading />
          <Route exact path="/pricing" element={<Pricing/>} loading />
          <Route element={<Layout/>}>
                <Route  path="/blog" element={<Index />} />
                <Route  path="/blog/e-commerce" element={<Ecommerce />} />
                <Route  path="/blog/crafts" element={<Crafts />} />
                <Route  path="/blog/jobs" element={<Jobs />} />
                <Route  path="/blog/sona3-app" element={<Sona3App />} />
          </Route>
          <Route exact path="/blog/:section/:id" element={<Post />} />
          <Route exact path="/support" element={<Support/>} loading />
          <Route exact path="/faqs" element={<Faqs/>} loading />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy/>} loading />
          <Route exact path="/terms-conditions" element={<TermsConditions/>} loading />
      </Routes>
    </>
  )
}

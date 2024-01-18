
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './pages/components/Layout/Layout';
import App_Routes from './App_Routes';
import { useTranslation } from 'react-i18next';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import ScrollToTop from './pages/components/scroll-top/ScrollTop';
AOS.init({ once: false, offset: 20, disableMutationObserver: true, });
AOS.refresh();
function App() {
useEffect(() => {
  const handleScroll = () => { AOS.init({ once: false, offset: 20, disableMutationObserver: true, }); AOS.refresh(); };
  window.addEventListener('scroll', handleScroll);
  return () => { window.removeEventListener('scroll', handleScroll); };
}, []); 
  const {i18n} = useTranslation()
  return (
    <div className="App" style={{direction: i18n.language === 'en' ? 'ltr' : 'rtl'}}>
     <Router>
          <Layout>
              <ScrollToTop/>
              <App_Routes />
          </Layout>
     </Router>
    </div>
  );
}

export default App;

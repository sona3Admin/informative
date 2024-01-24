import { useEffect } from "react";
import { useLocation } from "react-router";
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth" 
      });
    };

    scrollToTop();
  }, [pathname]);

  return null;
};

export default ScrollToTop;

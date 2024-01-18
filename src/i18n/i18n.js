import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Ar from "./lang/ar.json";

i18n
    .use(initReactI18next)
    .init({
        resources:{
            // en:{translation: En},
            ar:{translation: Ar},
        },
        fallbackLng:"en",
        //fallbackLng: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'ar',
        lng:localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en',
        debug: false,
        interpolation: { escapeValue: false, }
    });

export default i18n ;
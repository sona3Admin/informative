import React from 'react'
import { useTranslation } from 'react-i18next';
import bag from './../assets/bag.png'
import cs from './../assets/cs.png'
import car from './../assets/car.png'
import pay from './../assets/pay.png'
import hour from './../assets/24.png'
import target from './../assets/target.png'
import { convertToArabicNumeral } from './../utils/functions';
export const Packages = [
    {
      name:"Free",
       p:"Level up with more power and enhanced features",
       originalPrice:0,
        price:0,
        discount:100,
        features:[
          {status:false,name:"Number of products displayed"},
          {status:false,name:"Number of orders"},
          {status:false,name:"No commission on sales"},
          {status:false,name:"Banners on the application's home page"},
          {status:true,name:"Show product discounts"},
        ],
        marketing:[
          {status:false,name:"Special offers"},
          {status:false,name:"Benefit from appearing on search engines"},
          {status:false,name:"Social media publications"},
          {status:false,name:"Discount coupons"},
          {status:false,name:"Show the store on the home page of the application"},
          {status:false,name:"Display the store on the home page of the site"},
          {status:true,name:"Loyalty points"},
        ],
        shipping:[
          {status:false,name:"Shipping companies available"},
          {status:false,name:"Packaging bags"},
        ],
        management:[
          {status:true,name:"Mobile store management iOS and Android"},
          {status:false,name:"Reports"},
          {status:false,name:"Users number"},
          {status:false,name:"And other advantages"},
        ],
        advanced:[
          {status:true,name:"Number of languages"},
          {status:false,name:"Number of currencies"},
          {status:false,name:"Recover deleted data"},
          {status:false,name:"Training courses"},
          {status:true,name:"Technical Support"},
          {status:false,name:"E-marketing service providers"},
          {status:false,name:"Product photography service providers"},
          {status:false,name:"Product packaging service providers"},
        ],
       },
    {
      name:"Basic",
       p:"Level up with more power and enhanced features",
       originalPrice:1000,
        price:1500,
        discount:30,
        features:[
          {status:false,name:"Number of products displayed"},
          {status:false,name:"Number of orders"},
          {status:false,name:"No commission on sales"},
          {status:false,name:"Banners on the application's home page"},
          {status:true,name:"Show product discounts"},
        ],
        marketing:[
          {status:true,name:"Special offers"},
          {status:true,name:"Benefit from appearing on search engines"},
          {status:true,name:"Social media publications"},
          {status:false,name:"Discount coupons"},
          {status:true,name:"Show the store on the home page of the application"},
          {status:true,name:"Display the store on the home page of the site"},
          {status:true,name:"Loyalty points"},
        ],
        shipping:[
          {status:true,name:"Shipping companies available"},
          {status:true,name:"Packaging bags"},
        ],
        management:[
          {status:true,name:"Mobile store management iOS and Android"},
          {status:true,name:"Reports"},
          {status:true,name:"Users number"},
          {status:false,name:"And other advantages"},
        ],
        advanced:[
          {status:true,name:"Number of languages"},
          {status:false,name:"Number of currencies"},
          {status:false,name:"Recover deleted data"},
          {status:false,name:"Training courses"},
          {status:true,name:"Technical Support"},
          {status:false,name:"E-marketing service providers"},
          {status:false,name:"Product photography service providers"},
          {status:false,name:"Product packaging service providers"},
        ],
       },
    {
      name:"Professional",
       p:"Level up with more power and enhanced features",
       originalPrice:2000,
        price:2500,
        discount:30,
        features:[
          {status:true,name:"Number of products displayed"},
          {status:false,name:"Number of orders"},
          {status:true,name:"No commission on sales"},
          {status:true,name:"Banners on the application's home page"},
          {status:true,name:"Show product discounts"},
        ],
        marketing:[
          {status:true,name:"Special offers"},
          {status:true,name:"Benefit from appearing on search engines"},
          {status:true,name:"Social media publications"},
          {status:true,name:"Discount coupons"},
          {status:true,name:"Show the store on the home page of the application"},
          {status:true,name:"Display the store on the home page of the site"},
          {status:true,name:"Loyalty points"},
        ],
        shipping:[
          {status:true,name:"Shipping companies available"},
          {status:true,name:"Packaging bags"},
        ],
        management:[
          {status:true,name:"Mobile store management iOS and Android"},
          {status:true,name:"Reports"},
          {status:true,name:"Users number"},
          {status:false,name:"And other advantages"},
        ],
        advanced:[
          {status:true,name:"Number of languages"},
          {status:false,name:"Number of currencies"},
          {status:false,name:"Recover deleted data"},
          {status:true,name:"Training courses"},
          {status:true,name:"Technical Support"},
          {status:false,name:"E-marketing service providers"},
          {status:false,name:"Product photography service providers"},
          {status:false,name:"Product packaging service providers"},
        ],
       },
    {
      name:"Advanced",
       p:"Level up with more power and enhanced features",
       originalPrice:3000,
        price:3500,
        discount:30,
        features:[
          {status:true,name:"Number of products displayed"},
          {status:false,name:"Number of orders"},
          {status:true,name:"No commission on sales"},
          {status:true,name:"Banners on the application's home page"},
          {status:true,name:"Show product discounts"},
        ],
        marketing:[
          {status:true,name:"Special offers"},
          {status:true,name:"Benefit from appearing on search engines"},
          {status:true,name:"Social media publications"},
          {status:true,name:"Discount coupons"},
          {status:true,name:"Show the store on the home page of the application"},
          {status:true,name:"Display the store on the home page of the site"},
          {status:true,name:"Loyalty points"},
        ],
        shipping:[
          {status:true,name:"Shipping companies available"},
          {status:true,name:"Packaging bags"},
        ],
        management:[
          {status:true,name:"Mobile store management iOS and Android"},
          {status:true,name:"Reports"},
          {status:true,name:"Users number"},
          {status:false,name:"And other advantages"},
        ],
        advanced:[
          {status:true,name:"Number of languages"},
          {status:false,name:"Number of currencies"},
          {status:false,name:"Recover deleted data"},
          {status:true,name:"Training courses"},
          {status:true,name:"Technical Support"},
          {status:false,name:"E-marketing service providers"},
          {status:false,name:"Product photography service providers"},
          {status:false,name:"Product packaging service providers"},
        ],
       },
    
  ];




  export const AllPackages = [
    {
      name:"Free",
       p:"Level up with more power and enhanced features",
       originalPrice:0,
        price:0,
        discount:100,
        features:[
          {status:false,name:"Daily appearance on the homepage"},
          {status:false,name:"Free marketing on social media"},
          {status:false,name:"Professional product photography"},
          {status:false,name:"Priority in customer support"},
          {status:false,name:"Increased visibility in search engines"},
          {status:false,name:"Increased visibility in search engines"},

        ],
        marketing:[
          {status:false,name:"Daily appearance on the homepage"},
          {status:false,name:"Free marketing on social media"},
          {status:false,name:"Professional product photography"},
          {status:false,name:"Priority in customer support"},
          {status:false,name:"Increased visibility in search engines"},
          {status:false,name:"Increased visibility in search engines"},
        ],
       },
    {
      name:"Special package",
       p:"Level up with more power and enhanced features",
       originalPrice:100,
        price:650,
        discount:40,
        features:[
          {status:false,name:"Daily appearance on the homepage"},
          {status:false,name:"Free marketing on social media"},
          {status:false,name:"Professional product photography"},
          {status:false,name:"Priority in customer support"},
          {status:false,name:"Increased visibility in search engines"},
          {status:false,name:"Increased visibility in search engines"},

        ],
        marketing:[
          {status:false,name:"Daily appearance on the homepage"},
          {status:false,name:"Free marketing on social media"},
          {status:false,name:"Professional product photography"},
          {status:false,name:"Priority in customer support"},
          {status:false,name:"Increased visibility in search engines"},
          {status:false,name:"Increased visibility in search engines"},
        ],
       },
    {
      name:"Best Selling",
       p:"Level up with more power and enhanced features",
       originalPrice:1200,
        price:900,
        discount:60,
        features:[
          {status:false,name:"Daily appearance on the homepage"},
          {status:false,name:"Free marketing on social media"},
          {status:false,name:"Professional product photography"},
          {status:false,name:"Priority in customer support"},
          {status:false,name:"Increased visibility in search engines"},
          {status:false,name:"Increased visibility in search engines"},

        ],
        marketing:[
          {status:false,name:"Daily appearance on the homepage"},
          {status:false,name:"Free marketing on social media"},
          {status:false,name:"Professional product photography"},
          {status:false,name:"Priority in customer support"},
          {status:false,name:"Increased visibility in search engines"},
          {status:false,name:"Increased visibility in search engines"},
        ],
        Special:false
       },
    {
      name:"Premium package",
       p:"Level up with more power and enhanced features",
       originalPrice:1800,
        price:1500,
        discount:30,
        features:[
          {status:false,name:"Daily appearance on the homepage"},
          {status:false,name:"Free marketing on social media"},
          {status:false,name:"Professional product photography"},
          {status:false,name:"Priority in customer support"},
          {status:false,name:"Increased visibility in search engines"},
          {status:false,name:"Increased visibility in search engines"},

        ],
        marketing:[
          {status:false,name:"Daily appearance on the homepage"},
          {status:false,name:"Free marketing on social media"},
          {status:false,name:"Professional product photography"},
          {status:false,name:"Priority in customer support"},
          {status:false,name:"Increased visibility in search engines"},
          {status:false,name:"Increased visibility in search engines"},
        ],
       }
  ];





  export const common_q =  [
    { key: '1', header: 'What types of products can I find on Sona3?', content: 'All products are homemade, such as jewelry, clothing, decorations, unique gifts, etc. We strive to provide a diverse assortment that meets the interests and tastes of customers.' },
    { key: '2', header: 'What payment methods can I use?', content: 'We provide you with various payment options, including payment via credit cards, direct debit, bank transfer, and digital wallets, and you can choose the method that suits you during the payment process.' },
    { key: '3', header: 'Can I return products if they do not meet my expectations?', content: "Yes, we offer a return policy that allows you to return products if they do not meet your expectations. Please review the return policy for detailed information on the required procedures and conditions." },
    { key: '4', header: 'Can I check and follow up on the status of my order?', content: "Yes, you can check the status of your order and follow it through your account on the website. You will receive updates regarding the order processing stages and tracking information via email." },
  ];
  export const pay_q =  [
    { key: '10', header: 'كيف يمكنني الاشتراك في خدمة العضوية؟', content: 'يمكنك الاشتراك في خدمة العضوية عن طريق زيارة صفحة العضوية على الموقع واتباع الخطوات المطلوبة لإكمال عملية الاشتراك.' },
    { key: '11', header: 'ما هي طرق الدفع المتاحة للعمليات عبر الإنترنت؟', content: 'يمكنك استخدام بطاقات الائتمان (مثل فيزا وماستركارد)، التحويل البنكي، الدفع عند الاستلام، المحافظ الإلكترونية (مثل بايبال)، وخدمات الدفع عبر الهاتف المحمول لإتمام عملياتك عبر الإنترنت.' },
 ];
  export const support_q =  [
    { key: '12', header: 'كيف يمكنني الاتصال بفريق الدعم؟', content: 'يمكنك الاتصال بفريق الدعم عن طريق زيارة صفحة اتصل بنا على الموقع أو استخدام نموذج الاتصال لإرسال استفسارك أو مشكلتك.' },
    { key: '13', header: 'هل هناك أوقات محددة لدعم العملاء؟', content: 'نعم، نحن نقدم دعمًا على مدار الساعة طوال أيام الأسبوع. يمكنك الاتصال بنا أو إرسال رسالة في أي وقت وسنكون سعداء بمساعدتك.' },
    { key: '14', header: 'هل هناك مركز مساعدة أو أسئلة شائعة؟', content: 'نعم، يمكنك زيارة مركز المساعدة على الموقع للعثور على إجابات على أسئلة شائعة ونصائح حول كيفية استخدام المنصة.' },
  ];
  export const return_q =  [
    { key: '15', header: 'ما هي سياسة الاسترجاع للمنتجات؟', content: 'يُرجى مراجعة سياسة الاسترجاع على صفحة الموقع للحصول على تفاصيل حول فترة الاسترجاع، شروط المنتج المقبولة للاسترجاع، ورسوم الاسترجاع إن وجدت.' },
    { key: '16', header: 'كيف يمكنني طلب استبدال للمنتج؟', content: 'إذا كنت بحاجة إلى استبدال منتج، يرجى الاتصال بفريق الدعم وتقديم تفاصيل حول المنتج والسبب وسيقومون بتوجيهك خطوة بخطوة في عملية استبدال المنتج.' },
    { key: '17', header: 'متى سيتم استرداد المبلغ بعد الاسترجاع؟', content: 'عملية استرداد المبلغ تختلف وفقًا لسياسة الاسترجاع. يرجى الرجوع إلى السياسة لمعرفة المزيد حول مدى زمني لاسترداد المبلغ بعد عملية الاسترجاع.' },
    
  ];
  export const products_q =  [
    { key: '18', header: 'كيف يمكنني البحث عن منتجات محددة على الموقع؟', content: 'يمكنك استخدام شريط البحث في أعلى الموقع للعثور على منتجات محددة. ببساطة أدخل كلمات البحث واضغط على Enter لعرض النتائج المتعلقة.' },
    { key: '19', header: 'هل يمكنني تقديم طلب لمنتج مخصص؟', content: 'نعم، في بعض الحالات يمكنك تقديم طلب لمنتج مخصص. اتصل بفريق الدعم للحصول على مزيد من المعلومات حول إمكانية تخصيص المنتجات.' },
    { key: '20', header: 'هل تقدمون عروض خاصة على بعض المنتجات؟', content: 'نعم، نقدم عروض خاصة على بعض المنتجات. تحقق من صفحة العروض أو اشترك في النشرة الإخبارية لتلقي تحديثات حول العروض الحالية.' },
    
  ];
  
  
  export const cards =  [
    { header: 'Sona3 is the best e-commerce platform in the UAE', p: "Educational test forms are required for teachers who wish to obtain a professional license, in the stage of preparation for these exams and good training in order to pass them successfully without problems.",},
    { header: 'Sona3 is the best e-commerce platform in the UAE', p: "Educational test forms are required for teachers who wish to obtain a professional license, in the stage of preparation for these exams and good training in order to pass them successfully without problems.",},
    { header: 'Sona3 is the best e-commerce platform in the UAE', p: "Educational test forms are required for teachers who wish to obtain a professional license, in the stage of preparation for these exams and good training in order to pass them successfully without problems.",},
    { header: 'Sona3 is the best e-commerce platform in the UAE', p: "Educational test forms are required for teachers who wish to obtain a professional license, in the stage of preparation for these exams and good training in order to pass them successfully without problems.",},
    { header: 'Sona3 is the best e-commerce platform in the UAE', p: "Educational test forms are required for teachers who wish to obtain a professional license, in the stage of preparation for these exams and good training in order to pass them successfully without problems.",},
    { header: 'Sona3 is the best e-commerce platform in the UAE', p: "Educational test forms are required for teachers who wish to obtain a professional license, in the stage of preparation for these exams and good training in order to pass them successfully without problems.",},
    { header: 'Sona3 is the best e-commerce platform in the UAE', p: "Educational test forms are required for teachers who wish to obtain a professional license, in the stage of preparation for these exams and good training in order to pass them successfully without problems.",},
    { header: 'Sona3 is the best e-commerce platform in the UAE', p: "Educational test forms are required for teachers who wish to obtain a professional license, in the stage of preparation for these exams and good training in order to pass them successfully without problems.",},
    { header: 'Sona3 is the best e-commerce platform in the UAE', p: "Educational test forms are required for teachers who wish to obtain a professional license, in the stage of preparation for these exams and good training in order to pass them successfully without problems.",},
    { header: 'Sona3 is the best e-commerce platform in the UAE', p: "Educational test forms are required for teachers who wish to obtain a professional license, in the stage of preparation for these exams and good training in order to pass them successfully without problems.",},
    { header: 'Sona3 is the best e-commerce platform in the UAE', p: "Educational test forms are required for teachers who wish to obtain a professional license, in the stage of preparation for these exams and good training in order to pass them successfully without problems.",},
    { header: 'Sona3 is the best e-commerce platform in the UAE', p: "Educational test forms are required for teachers who wish to obtain a professional license, in the stage of preparation for these exams and good training in order to pass them successfully without problems.",},
    { header: 'Sona3 is the best e-commerce platform in the UAE', p: "Educational test forms are required for teachers who wish to obtain a professional license, in the stage of preparation for these exams and good training in order to pass them successfully without problems.",},
    { header: 'Sona3 is the best e-commerce platform in the UAE', p: "Educational test forms are required for teachers who wish to obtain a professional license, in the stage of preparation for these exams and good training in order to pass them successfully without problems.",},
    { header: 'Sona3 is the best e-commerce platform in the UAE', p: "Educational test forms are required for teachers who wish to obtain a professional license, in the stage of preparation for these exams and good training in order to pass them successfully without problems.",},
    { header: 'Sona3 is the best e-commerce platform in the UAE', p: "Educational test forms are required for teachers who wish to obtain a professional license, in the stage of preparation for these exams and good training in order to pass them successfully without problems.",},
    { header: 'Sona3 is the best e-commerce platform in the UAE', p: "Educational test forms are required for teachers who wish to obtain a professional license, in the stage of preparation for these exams and good training in order to pass them successfully without problems.",},
    { header: 'Sona3 is the best e-commerce platform in the UAE', p: "Educational test forms are required for teachers who wish to obtain a professional license, in the stage of preparation for these exams and good training in order to pass them successfully without problems.",},
    { header: 'Sona3 is the best e-commerce platform in the UAE', p: "Educational test forms are required for teachers who wish to obtain a professional license, in the stage of preparation for these exams and good training in order to pass them successfully without problems.",},
    { header: 'Sona3 is the best e-commerce platform in the UAE', p: "Educational test forms are required for teachers who wish to obtain a professional license, in the stage of preparation for these exams and good training in order to pass them successfully without problems.",},
  ];
  


export default function Data() {
  const {t} = useTranslation()
  const sellerData = [
    {
      header: 'Extensive marketing',
      p:'We market your products effectively to reach a wider audience using advanced strategies to attract potential customers. We also care about providing attractive and creative content that highlights the beauty and uniqueness of our products.',
      img:bag,
      style:"rtl",
      style_dir:"rtl",
      mirror:"scaleX(1)",
      style_text:'start',
      color:"rgba(136, 5, 13, 1)"
    },
    {
      header: 'Various payment options',
      p: 'We are keen to provide diverse and secure payment options to our customers. We also offer innovative and reliable payment interfaces that include options such as payment via credit cards, direct debit, and bank transfers.'
      ,img:target,
      style:"ltr",
      style_dir:"rtl",
      style_align:"right",
      mirror:"scaleX(-1)",
      style_text:'end',
      color:"rgba(10, 128, 106, 1)"
      
    },
    {
      header: '24/7 technical support',
      p: 'We strive to provide a comfortable and enjoyable shopping experience for our customers, where they can explore and purchase our products with ease, and in case of any questions or problems, our support team is always ready to help you and provide quick solutions.'
      ,img:cs,
      style:"rtl",
      style_dir:"rtl",
      mirror:"scaleX(1)",
      style_text:'start',
      color:"rgba(223, 144, 25, 1)"
    },
  ];
  const customerData = [
    {
      header: 'Fast and safe shipping',
      p:"Don't worry about shipping, exchange and return options, we take care of all shipping services for you, to provide you with a comfortable shopping experience.",
      img:car,
      style:"rtl",
      style_dir:"rtl",
      mirror:"scaleX(1)",
      style_text:'start',
      color:"rgba(136, 5, 13, 1)"
    },
    {
      header: 'Multiple payment systems',
      p:"Sonaa offers various payment systems that suit all categories to facilitate the customer’s shopping experience, all of which are secure due to our commitment to the highest levels of security and digital protection."
      ,img:pay,
      style:"ltr",
      style_dir:"rtl",
      style_align:"right",
      mirror:"scaleX(-1)",
      style_text:'end',
      color:"rgba(10, 128, 106, 1)"
      
    },
    {
      header: '24/7 Purchasing',
      p:"Our products are available for purchase throughout the day without any opening or closing dates. You will not miss any opportunity to purchase when you register in our application."
      ,img:hour,
      style:"rtl",
      style_dir:"rtl",
      mirror:"scaleX(1)",
      style_text:'start',
      color:"rgba(223, 144, 25, 1)"
    },
  ];
  const articale_ads = [
    {title:"Sona3 is the best e-commerce platform in the UAE", date:"May 11, 2023", section:"E-Commerce",image:"", views:"40,5840 Views"},
    {title:"Sona3 is the best e-commerce platform in the UAE", date:"May 11, 2023", section:"E-Commerce",image:"", views:"40,5840 Views"},
    {title:"Sona3 is the best e-commerce platform in the UAE", date:"May 11, 2023", section:"E-Commerce",image:"", views:"40,5840 Views"},
    {title:"Sona3 is the best e-commerce platform in the UAE", date:"May 11, 2023", section:"E-Commerce",image:"", views:"40,5840 Views"},
  ]
  const May_Like_Articles = [
    {title:"Sona3 is the best e-commerce platform in the UAE", image:""},
    {title:"Sona3 is the best e-commerce platform in the UAE", image:""},
    {title:"Sona3 is the best e-commerce platform in the UAE", image:""},
    {title:"Sona3 is the best e-commerce platform in the UAE", image:""},
    {title:"Sona3 is the best e-commerce platform in the UAE", image:""},
    {title:"Sona3 is the best e-commerce platform in the UAE", image:""},
  ]
  return (
    {customerData, sellerData, articale_ads, May_Like_Articles}
  )
}

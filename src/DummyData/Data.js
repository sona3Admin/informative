import React from 'react'
import { useTranslation } from 'react-i18next';
import bag from './../assets/bag.png'
import cs from './../assets/cs.png'
import target from './../assets/target.png'
import { convertToArabicNumeral } from './../utils/functions';
export const Packages = [
    {
      name:"Special package",
       p:"Level up with more power and enhanced features",
       originalPrice:100,
        price:650,
        discount:30,
        features:[
          {status:true,name:"Daily appearance on the homepage"},
          {status:true,name:"Free marketing on social media"},
          {status:true,name:"Professional product photography"},
          {status:false,name:"Priority in customer support"},
          {status:false,name:"Increased visibility in search engines"},
          {status:false,name:"Increased visibility in search engines"},

        ],
        marketing:[
          {status:true,name:"Daily appearance on the homepage"},
          {status:true,name:"Free marketing on social media"},
          {status:true,name:"Professional product photography"},
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
        discount:40,
        features:[
          {status:true,name:"Daily appearance on the homepage"},
          {status:true,name:"Free marketing on social media"},
          {status:true,name:"Professional product photography"},
          {status:true,name:"Priority in customer support"},
          {status:false,name:"Increased visibility in search engines"},
          {status:false,name:"Increased visibility in search engines"},

        ],
        marketing:[
          {status:true,name:"Daily appearance on the homepage"},
          {status:true,name:"Free marketing on social media"},
          {status:true,name:"Professional product photography"},
          {status:true,name:"Priority in customer support"},
          {status:false,name:"Increased visibility in search engines"},
          {status:false,name:"Increased visibility in search engines"},
        ],
        Special:true
       },
    {
      name:"Premium package",
       p:"Level up with more power and enhanced features",
       originalPrice:1800,
        price:1500,
        discount:30,
        features:[
          {status:true,name:"Daily appearance on the homepage"},
          {status:true,name:"Free marketing on social media"},
          {status:true,name:"Professional product photography"},
          {status:true,name:"Priority in customer support"},
          {status:true,name:"Increased visibility in search engines"},
          {status:true,name:"Increased visibility in search engines"},

        ],
        marketing:[
          {status:true,name:"Daily appearance on the homepage"},
          {status:true,name:"Free marketing on social media"},
          {status:true,name:"Professional product photography"},
          {status:true,name:"Priority in customer support"},
          {status:true,name:"Increased visibility in search engines"},
          {status:true,name:"Increased visibility in search engines"},
        ],
       }
  ];




  export const AllPackages = [
    {
      name:"Free",
       p:"Level up with more power and enhanced features",
       originalPrice:0,
        price:0,
        discount:100,
        features:[
          {status:true,name:"Daily appearance on the homepage"},
          {status:false,name:"Free marketing on social media"},
          {status:false,name:"Professional product photography"},
          {status:false,name:"Priority in customer support"},
          {status:false,name:"Increased visibility in search engines"},
          {status:false,name:"Increased visibility in search engines"},

        ],
        marketing:[
          {status:true,name:"Daily appearance on the homepage"},
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
          {status:true,name:"Daily appearance on the homepage"},
          {status:true,name:"Free marketing on social media"},
          {status:true,name:"Professional product photography"},
          {status:false,name:"Priority in customer support"},
          {status:false,name:"Increased visibility in search engines"},
          {status:false,name:"Increased visibility in search engines"},

        ],
        marketing:[
          {status:true,name:"Daily appearance on the homepage"},
          {status:true,name:"Free marketing on social media"},
          {status:true,name:"Professional product photography"},
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
          {status:true,name:"Daily appearance on the homepage"},
          {status:true,name:"Free marketing on social media"},
          {status:true,name:"Professional product photography"},
          {status:true,name:"Priority in customer support"},
          {status:false,name:"Increased visibility in search engines"},
          {status:false,name:"Increased visibility in search engines"},

        ],
        marketing:[
          {status:true,name:"Daily appearance on the homepage"},
          {status:true,name:"Free marketing on social media"},
          {status:true,name:"Professional product photography"},
          {status:true,name:"Priority in customer support"},
          {status:false,name:"Increased visibility in search engines"},
          {status:false,name:"Increased visibility in search engines"},
        ],
        Special:true
       },
    {
      name:"Premium package",
       p:"Level up with more power and enhanced features",
       originalPrice:1800,
        price:1500,
        discount:30,
        features:[
          {status:true,name:"Daily appearance on the homepage"},
          {status:true,name:"Free marketing on social media"},
          {status:true,name:"Professional product photography"},
          {status:true,name:"Priority in customer support"},
          {status:true,name:"Increased visibility in search engines"},
          {status:true,name:"Increased visibility in search engines"},

        ],
        marketing:[
          {status:true,name:"Daily appearance on the homepage"},
          {status:true,name:"Free marketing on social media"},
          {status:true,name:"Professional product photography"},
          {status:true,name:"Priority in customer support"},
          {status:true,name:"Increased visibility in search engines"},
          {status:true,name:"Increased visibility in search engines"},
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
      img:bag
    },
    {
      header: 'Various payment options',
      p: 'We are keen to provide diverse and secure payment options to our customers. We also offer innovative and reliable payment interfaces that include options such as payment via credit cards, direct debit, and bank transfers.'
      ,img:target
      
    },
    {
      header: '24/7 technical support',
      p: 'We strive to provide a comfortable and enjoyable shopping experience for our customers, where they can explore and purchase our products with ease, and in case of any questions or problems, our support team is always ready to help you and provide quick solutions.'
      ,img:cs
    },
  ];
  const customerData = [
    {
      header: 'Extensive marketing',
      p:'We market your products effectively to reach a wider audience using advanced strategies to attract potential customers. We also care about providing attractive and creative content that highlights the beauty and uniqueness of our products.',
      img:bag
    },
    {
      header: 'Various payment options',
      p:'We are keen to provide diverse and secure payment options to our customers. We also offer innovative and reliable payment interfaces that include options such as payment via credit cards, direct debit, and bank transfers.'
      ,img:target
      
    },
    {
      header: '24/7 technical support',
      p: 'We strive to provide a comfortable and enjoyable shopping experience for our customers, where they can explore and purchase our products with ease, and in case of any questions or problems, our support team is always ready to help you and provide quick solutions.'
      ,img:cs
    },
  ];
  const ServicesData = [
    {tag:t("Extensive marketing"),
     header:"The makers of the application make your bridge to the world of creativity and craftsmanship in the Emirates",
     p:"We market your products effectively to reach a wider audience using advanced strategies to attract potential customers. We also care about providing attractive and creative content that highlights the beauty and uniqueness of our products.",
     points:["All social media platforms", "Appears on the home page of the site", "Control panel to display statistics"],
     style:"rtl",
     style_dir:"rtl",
     mirror:"scaleX(1)",
     style_text:'start',
     color:"rgba(136, 5, 13, 1)"
    },
    {tag:t('Various payment options'),
     header:"The makers of the application make your bridge to the world of creativity and craftsmanship in the Emirates",
     p:"We are keen to provide diverse and secure payment options to our customers. We also offer innovative and reliable payment interfaces that include options such as payment via credit cards, direct debit, and bank transfer.",
     points:["All social media platforms", "Appears on the home page of the site", "Control panel to display statistics"],
     style:"ltr",
     style_dir:"rtl",
     style_align:"right",
     mirror:"scaleX(-1)",
     style_text:'end',
     color:"rgba(10, 128, 106, 1)"
    },
    {tag: "24/7 technical support",
     header:"The makers of the application make your bridge to the world of creativity and craftsmanship in the Emirates",
     p:"We strive to provide a comfortable and enjoyable shopping experience for our customers, where they can explore and purchase our products with ease, and in case of any questions or problems, our support team is always ready to help you and provide quick solutions.",
     points:["All social media platforms", "Appears on the home page of the site", "Control panel to display statistics"],
     style:"rtl",
     style_dir:"rtl",
     mirror:"scaleX(1)",
     style_text:'start',
     color:"rgba(223, 144, 25, 1)"
    },
    {tag:`${t('Shipment tracking')}`,
     header:"The makers of the application make your bridge to the world of creativity and craftsmanship in the Emirates",
     p:"The application allows customers to easily track shipments. Once the order is shipped, customers are provided with tracking information to know the status of the shipment and its current location. This feature allows customers to follow the product’s journey until it reaches their destination.",
     points:["All social media platforms", "Appears on the home page of the site", "Control panel to display statistics"],
     style:"rtl",
     style_dir:"rtl",
     mirror:"scaleX(1)",
     style_text:'start',
     color:"rgba(223, 144, 25, 1)"
    },
  ]
  const articale_ads = [
    {title:"Sona3 is the best e-commerce platform in the UAE", date:"May 11, 2023", section:"E-Commerce",image:"", views:"40,5840 Views"},
    {title:"Sona3 is the best e-commerce platform in the UAE", date:"May 11, 2023", section:"E-Commerce",image:"", views:"40,5840 Views"},
    {title:"Sona3 is the best e-commerce platform in the UAE", date:"May 11, 2023", section:"E-Commerce",image:"", views:"40,5840 Views"},
    {title:"Sona3 is the best e-commerce platform in the UAE", date:"May 11, 2023", section:"E-Commerce",image:"", views:"40,5840 Views"},
  ]
  return (
    {customerData, sellerData, ServicesData, articale_ads}
  )
}

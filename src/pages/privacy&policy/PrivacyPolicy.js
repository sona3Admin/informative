import s_line from './../../assets/s_line.png'
import h_line from './../../assets/h_line.png'
import style from './style.module.css'
import useApi from './../../components/Loading/LoadingApi';
import { useTranslation } from 'react-i18next';
import BreadCrumb from './../../components/Layout/BreadCrumb';
export default function PrivacyPolicy() {
useApi(600)
const{t, i18n} = useTranslation()
  return (
    <div className={style.Content} style={{direction:i18n.language === 'en' ? "rtl" : "rtl", textAlign:i18n.language === 'en' ? "justify" : "justify"}}>
        <img className={style.image_h_line} src={h_line} alt='h_line' />
        <BreadCrumb/>
        <div className={style.header} >
          <img className={style.s_line} src={s_line} alt="PrivacyPolicy" />
            <h1 className={style.h1}>{t("Privacy & Policy")}</h1>
          <img className={style.s_line} src={s_line} alt="PrivacyPolicy" />
        </div>
        <div>
        <p dir="rtl">
            يرحّب بكم فريق عمل صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و، ويتقدّم إليكم بالشكر على ثقتكم به، ويفيدكم صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و بأنه حرصاً منه ولإدراكه التام بأن المستخدم له حقوق، فإن صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و يسعى للحفاظ على المعلومات الخاصة بالمستخدمين وفقاً لآلية سياسة الخصوصية وسرية المعلومات المعمول بها في صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و
        </p>

        <p dir="rtl">
            وعليه فإن صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و يوضّح لكم بأن سياسة الخصوصية وسرية المعلومات التي سيتم التعامل مع معلوماتكم الخاصة بكم بموجبها كما يلي:
        </p>

        <p dir="rtl">
            تحدد سياسة الخصوصية هذه الأساس الذي سيتم من خلاله التعامل مع أي بيانات شخصية، بما في ذلك على سبيل المثال لا الحصر، تفاصيل الدفع والمعلومات الأخرى التي نجمعها منك أو من مصادر أخرى أو التي تقدمها لنا ("المعلومات") فيما يتعلق ببياناتك الشخصية. الوصول إلى موقع <a href="sona3.ae">sona3.ae</a> واستخدامه و/أو تطبيق "صُناع" للهاتف المحمول (يشار إليها إجمالاً بـ "المنصة") والخدمات والتطبيقات (يُشار إليها إجمالاً بـ "الخدمات"). نحن نتفهم الأهمية التي توليها للمعلومات، ونحن ملتزمون بحماية واحترام خصوصيتك. يرجى قراءة ما يلي بعناية لفهم ممارساتنا فيما يتعلق بمعلوماتك. باستخدام خدماتنا، فإنك توافق على التعامل مع معلوماتك وفقًا لسياسة الخصوصية هذه.
        </p>

        <p dir="rtl">
            الإشارات في سياسة الخصوصية هذه إلى "نحن" أو "خاصتنا" أو "نا" (أو ما شابه ذلك) هي إشارات إلى منصة"صُناع". المملوكة لشركة (صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و) الإشارات إلى "المستخدم" أو "أنت" (أو ما شابه ذلك) هي إشارات إليك كفرد أو كيان قانوني حسب مقتضى الحال.
        </p>
    </div>
        <div className={style.header} >
          <img className={style.s_line} src={s_line} alt="PrivacyPolicy" />
            <h1 className={style.h1}>المعلومات التي يحصل عليها "صناع" وتحتفظ بها في قواعد بياناتها</h1>
          <img className={style.s_line} src={s_line} alt="PrivacyPolicy" />
        </div>
    <div>
        <p dir="rtl">
            قد نقوم بجمع ومعالجة المعلومات التالية عنك :
        </p>

        <p dir="rtl">
            <strong>أ‌-</strong> المعلومات التي تقدمها عن طريق ملء النماذج الموجودة على منصتنا، بما في ذلك المعلومات المقدمة في وقت التسجيل لاستخدام منصتنا وعمليات التسجيل المشتركة الأخرى (مثل تسجيلات الدخول إلى وسائل التواصل الاجتماعي)، أو الاشتراك في خدماتنا، أو نشر المواد أو طلب المزيد من الخدمات
        </p>

        <p dir="rtl">
            <strong>ب‌-</strong> المعلومات التي تقدمها عندما تدخل في مسابقة أو عرض ترويجي عبر منصتنا، أو تقدم مراجعات أو شهادات أو تعليقات على منصتنا
        </p>

        <p dir="rtl">
            <strong>ت‌-</strong> المعلومات التي تقدمها لنا، أو التي قد نجمعها منك، عندما تبلغ عن مشكلة في منصتنا
        </p>

        <p dir="rtl">
            <strong>ث‌-</strong> سجل المراسلات إذا اتصلت بنا
        </p>

        <p dir="rtl">
            <strong>ج‌-</strong> المعلومات العامة والمجمعة والديموغرافية وغير الشخصية
        </p>

        <p dir="rtl">
            <strong>ح‌-</strong> إذا قمت بتنزيل أو استخدام تطبيق الهاتف المحمول الخاص بنا، فقد نتمكن من الوصول إلى تفاصيل حول موقعك وجهازك المحمول، بما في ذلك المعرف الفريد لجهازك
        </p>

        <p dir="rtl">
            <strong>خ‌-</strong> تفاصيل المعاملات التي تقوم بها من خلال منصتنا وتنفيذ طلباتك
        </p>

        <p dir="rtl">
            <strong>د‌-</strong> تفاصيل حول جهاز الكمبيوتر الخاص بك، بما في ذلك على سبيل المثال لا الحصر عنوان IP الخاص بك ونظام التشغيل ونوع المتصفح، بالإضافة إلى معلومات حول استخدامك العام للإنترنت (على سبيل المثال، باستخدام التكنولوجيا التي تخزن المعلومات على جهازك أو تتمكن من الوصول إليه، مثل ملفات تعريف الارتباط والتتبع وحدات البيكسل وإشارات الويب وما إلى ذلك (يشار إليها معًا باسم "ملفات تعريف الارتباط "))
        </p>

        <p dir="rtl">
            <strong>ذ‌-</strong> أي معلومات أخرى نعتبرها ضرورية لتعزيز تجربتك على المنصة.
        </p>
    </div>
        <div className={style.header} >
          <img className={style.s_line} src={s_line} alt="PrivacyPolicy" />
            <h1 className={style.h1}>الاحتفاظ بسرية المعلومات</h1>
          <img className={style.s_line} src={s_line} alt="PrivacyPolicy" />
        </div>
    <div>
        <p dir="rtl">
            <strong>أ‌-</strong> بطبيعة الحال فإن (صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و) يسعى بالاحتفاظ بهذه المعلومات بما يحفظ خصوصية المستخدم، و (صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و) لا يحتفظ بهذه المعلومات إلا بهدف تحسين جودة المتجر الإلكتروني وتيسير التعامل فيما بين (صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و) والمستخدم.
        </p>

        <p dir="rtl">
            <strong>ب‌-</strong> كقاعدة عامة فإن جميع هذه المعلومات لا يطلع عليها إلا القائمين على منصة "صُناع"، ولن يقوموا بنشرها أو بثها للغير.
        </p>

        <p dir="rtl">
            <strong>ت‌-</strong> حيث (صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و) يسعى للحفاظ على سلامة المستخدمين، فإنه – في حالة ملاحظة (صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و) لأي نشاط غير نظامي أو غير شرعي يقوم به المستخدم – فإن (صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و) قد يقوم بإبلاغ الجهات المختصة بعد التشاور مع المحامي الخاص (صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و).
        </p>
    </div>
        <div className={style.header} >
          <img className={style.s_line} src={s_line} alt="PrivacyPolicy" />
            <h1 className={style.h1}>أمان وسرية المعلومات الخاصة بالمتجر</h1>
          <img className={style.s_line} src={s_line} alt="PrivacyPolicy" />
        </div>
   <div>
        <p dir="rtl">
            <strong>أ‌-</strong> يسعى (صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و) إلى سرية المعلومات وسياسة الخصوصية الخاصة بالمستخدمين و لن تخالف أحكام هذه القواعد والسياسة. ولكن نظراً لعدم إمكانية ضمان ذلك 100 % عبر وسائل الإنترنت فإن فريق عمل (صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و)  ينوّه بما يلي:
        </p>

        <p dir="rtl">
            <strong>ب‌-</strong> يسعى (صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و) بالحفاظ على جميع المعلومات الخاصة بالمستخدم وألا يطلع عليها أحد بما يخالف هذه السياسة المعمول بها في (صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و).
        </p>

        <p dir="rtl">
            <strong>ت‌-</strong> (صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و) على حماية هذه المعلومات عن طريق "سيرفرات معيّنة" محمية بموجب أنظمة الحماية الإلكترونية "نظامي برمجي أو Software معيّن".
        </p>

        <p dir="rtl">
            <strong>ث‌-</strong> غير أنه نظراً لأن شبكة الانترنت لا يمكن ضمانها 100 % لما قد يطرأ من اختراق أو فيروسات على أنظمة الحماية الالكترونية و على جدران الحماية المعمول به في منصة "صُناع" فإن (صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و)  ينصح المستخدمين بالحفاظ على معلوماتهم بسرية تامة، وعدم إفشاء أي معلومات يراها المستخدم هامة جداً له، وهذا حرصاً من (صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و)  في توجيه وإرشاد المستخدمين.
        </p>
    </div>
        <div className={style.header} >
          <img className={style.s_line} src={s_line} alt="PrivacyPolicy" />
            <h1 className={style.h1}>قواعد وأحكام استخدام منصة "صُناع"</h1>
          <img className={style.s_line} src={s_line} alt="PrivacyPolicy" />
        </div>
    <div>
        <p dir="rtl">
            إن جميع التزامات (صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و) ، وجميع التزامات المستخدمين، وجميع الحقوق الواردة في العلاقة بين المستخدم أو المستهلك (صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و) ، موجودة هنا "في نفس الصفحه"، حيث أن هذه القواعد هي "سياسة الخصوصية وسرية المعلومات" والمنبثقة من الاتفاقية التي أبرمت بين المستخدم و (صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و)  بخصوص العلاقة النظامية والقانونية بينهما، وقد وضعت سياسة الخصوصية وسرية المعلومات لضمان المصداقية والثقة التي يحرص (صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و)  على توفيرها للمستخدمين.
        </p>
    </div>
        <div className={style.header} >
          <img className={style.s_line} src={s_line} alt="PrivacyPolicy" />
            <h1 className={style.h1}>كيف سنستخدم معلوماتك</h1>
          <img className={style.s_line} src={s_line} alt="PrivacyPolicy" />
        </div>
    <div>
        <p dir="rtl">
            <strong>قد نستخدم المعلومات التي نحتفظ بها عنك بالطرق التالية:</strong>
        </p>

        <p dir="rtl">
            <strong>أ‌-</strong> لتزويدك بالمعلومات أو المنتجات أو الخدمات التي تطلبها منا أو التي نشعر أنها قد تهمك، حيث وافقت على أن يتم الاتصال بك لهذه الأغراض
        </p>

        <p dir="rtl">
            <strong>ب‌-</strong> لتزويدك بالخدمات المستندة إلى الموقع، مثل الإعلانات ونتائج البحث والمحتويات المخصصة الأخرى
        </p>

        <p dir="rtl">
            <strong>ت‌-</strong> لتنفيذ التزاماتنا الناشئة عن أي عقود مبرمة بينك وبين كيان آخر يستخدم منصتنا أو بينك وبيننا
        </p>

        <p dir="rtl">
            <strong>ث‌-</strong> لتحسين خدماتنا وتقديم خدمة أفضل وأكثر تخصيصًا لك
        </p>

        <p dir="rtl">
            <strong>ج‌-</strong> لضمان تقديم المحتوى من منصتنا بالطريقة الأكثر فعالية لك وللجهاز الذي تستخدمه للوصول إلى منصتنا
        </p>

        <p dir="rtl">
            <strong>ح‌-</strong> لإعلامك بالتغييرات التي تطرأ على خدماتنا
        </p>

        <p dir="rtl">
            <strong>خ‌-</strong> لأي سبب آخر نعتبره ضروريًا لتعزيز تجربتك في المنصة
        </p>

        <p dir="rtl">
            <strong>د‌-</strong> لإدارة وإدارة برامج الحوافز لدينا وتلبية طلباتك للحصول على الحوافز، و /أو السماح لك بالمشاركة في اليانصيب وإعلامك إذا كنت فائزًا في اليانصيب.
        </p>

        <p dir="rtl">
            لن يتم تخزين جميع تفاصيل بطاقات الائتمان/الخصم ومعلومات التعريف الشخصية أو بيعها أو مشاركتها أو تأجيرها أو تأجيرها لأي طرف ثالث. لن نقوم بتمرير أي تفاصيل لبطاقة الخصم/الائتمان إلى أطراف ثالثة. نحن نتخذ الخطوات المناسبة لضمان خصوصية البيانات وأمانها، بما في ذلك من خلال منهجيات الأجهزة والبرامج المختلفة.
        </p>

        <p dir="rtl">
            ومع ذلك، لا يمكن لـ (صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و)  ضمان أمان أي معلومات يتم الكشف عنها عبر الإنترنت. نحن لسنا مسؤولين عن سياسات الخصوصية للمواقع التي ترتبط بها. إذا قمت بتقديم أي معلومات إلى هذه الأطراف الثالثة، فقد يتم تطبيق قواعد مختلفة فيما يتعلق بجمع واستخدام معلوماتك الشخصية. ويجب عليك الاتصال بهذه الكيانات مباشرة إذا كانت لديك أي أسئلة حول استخدامها للمعلومات التي تجمعها.
        </p>

        <p dir="rtl">
            قد يتم تغيير أو تحديث سياسات الموقع الإلكتروني والشروط والأحكام من حين لآخر لتلبية المتطلبات والمعايير. ولذلك، فإننا نشجع العملاء على زيارة هذه الأقسام بشكل متكرر لاطلاعهم على التغييرات التي تطرأ على الموقع. التعديلات ستكون فعالة في يوم نشرها.
        </p>
    </div>
        <div className={style.header} >
          <img className={style.s_line} src={s_line} alt="PrivacyPolicy" />
            <h1 className={style.h1}>لمن قد نكشف عن معلوماتك</h1>
          <img className={style.s_line} src={s_line} alt="PrivacyPolicy" />
        </div>
    <div>
        <p dir="rtl">
            <strong>تعد المعلومات المتعلقة بعملائنا جزءًا مهمًا من أعمالنا. نحن نشارك معلوماتك فقط كما هو موضح أدناه ومع الشركات التي تتبع ممارسات وقائية على الأقل مثل تلك الموضحة في سياسة الخصوصية هذه :</strong>
        </p>

        <p dir="rtl">
            <strong>أ‌-</strong> أعمال أخرى. لنقدم لك خدماتنا، قد نتعامل مع الشركات التابعة لنا و/أو مقدمي الخدمات غير التابعين لنا (مثل شركات الخدمات اللوجستية المستخدمة لتوصيل المنتجات إليك، وشركات التسويق، ومعالجي المدفوعات لمعالجة المعاملات عبر الإنترنت، وما إلى ذلك). قد نقوم بإشراك شركات أخرى في معاملاتك، والتي قد تقوم بتخزين معلوماتك في محفظة رقمية لجعل استخدامك لخدماتنا أكثر كفاءة .
        </p>

        <p dir="rtl">
            <strong>ب‌-</strong> العروض التسويقية والترويجية. يجوز لنا أيضًا استخدام معلوماتك لتزويدك بمعلومات حول السلع والخدمات التي قد تهمك وتعزيز تجربة النظام الأساسي ورسائل الخدمة والميزات الجديدة والتحسينات والعروض الخاصة والأحداث التي تهمك . قد نتصل بك عبر قنوات مختلفة، بما في ذلك، على سبيل المثال لا الحصر، رسائل البريد الإلكتروني والإشعارات الفورية وإشعارات الويب والبريد والهاتف والرسائل داخل التطبيق وبطاقات موجز الأخبار .
        </p>

        <p dir="rtl">
            <strong>ت‌-</strong> حماية منصتنا والآخرين. نقوم بإصدار الحساب والمعلومات الأخرى عندما نعتقد أن هذا الإصدار مناسب للامتثال للقانون وتحقيقات إنفاذ القانون ولحماية حقوق أو ملكية أو سلامة مستخدمينا أو الآخرين. يتضمن ذلك تبادل المعلومات مع الشركات والمؤسسات الأخرى لأسباب مختلفة، مثل الحماية من الاحتيال والحد من مخاطر الائتمان .
        </p>

        <p dir="rtl">
            <strong>ث‌-</strong> لاحظ أن منصتنا قد تحتوي، من وقت لآخر، على روابط من وإلى مواقع الويب الخاصة بشبكاتنا الشريكة والمعلنين والشركات التابعة لنا. إذا اتبعت رابطًا لأي من هذه المواقع، فيرجى ملاحظة أن هذه المواقع لديها سياسات خصوصية خاصة بها وأننا لا نقبل أي مسؤولية أو التزام تجاه هذه السياسات. يرجى التحقق من هذه السياسات قبل تقديم أي بيانات شخصية أو معلومات أخرى إلى هذه المواقع .
        </p>
    </div>
        <div className={style.header} >
          <img className={style.s_line} src={s_line} alt="PrivacyPolicy" />
            <h1 className={style.h1}>الحسابات والتزامات التسجيل</h1>
          <img className={style.s_line} src={s_line} alt="PrivacyPolicy" />
        </div>
    <div>
        <p dir="rtl">
            <strong>فور التقدم بطلب الانضمام إلى عضوية منصة "صُناع" كمستخدم تكون ملتزماً بالإفصاح عن معلومات محددة واختيار اسم مستخدم وكلمة مرور سرية لاستعمالها عند الولوج لخدمات منصة "صُناع". وبذلك تكون قد وافقت على:</strong>
        </p>

        <p dir="rtl">
            <strong>أ‌)</strong> أن تكون مسؤولاً عن المحافظة على سرية معلومات حسابك وسرية كلمة المرور ، وتكون بذلك موافقاً على إعلام (صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و) حالاً بأي استخدام غير مفوض به لمعلومات حسابك لدى منصة "صُناع" أو أي اختراق آخر لمعلوماتك السرية
        </p>

        <p dir="rtl">
            <strong>ب‌)</strong> لن يكون (صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و) بأي حال من الأحوال مسؤولًا عن أي خسارة قد تلحق بك بشكل مباشر أو غير مباشر معنويا أو ماديا نتيجة كشف معلومات اسم المستخدم أو كلمة الدخول.
        </p>

        <p dir="rtl">
            <strong>ت‌)</strong> أنت تلتزم باستخدام حسابك أو عضويتك لدى منصة "صُناع" بنفسك، حيث أنك مسؤولاً عنه مسؤولية كاملة، وفي حال استخدام غيرك له فهذه قرينة على أنك قد فوّضته باستخدام المتجر باسمك ولحسابك.
        </p>

        <p dir="rtl">
            <strong>ث‌)</strong> أنت تلتزم عند استخدام منصة "صُناع" أن تستخدمها بكل جدية ومصداقية.
        </p>

        <p dir="rtl">
            <strong>ج‌)</strong> أنت تلتزم بالإفصاح عن معلومات حقيقية وصحيحة ومحدثة و كاملة وقانونية عن نفسك حسبما هو مطلوب أثناء التسجيل لدى (صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و) وتلتزم بتحديث بياناتك في تغييرها في الواقع أو في حال الحاجة إلى ذلك.
        </p>

        <p dir="rtl">
            <strong>ح‌)</strong> إن (صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و) يلتزم بالتعامل مع معلوماتك الشخصية وعناوين الاتصال بك بسريّة تامة.
        </p>

        <p dir="rtl">
            <strong>خ‌)</strong> إذا تبيّن ل (صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و) بأنك أفصحت عن معلومات غير حقيقية أو غير صحيحة أو غير راهنة أو غير كاملة أو غير قانونية او مخالفة لما جاء في اتفاقية الاستخدام، فإن (صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و) يمتلك الحق في وقف أو تجميد أو إلغاء عضويتك وحسابك في المتجر والمنصة، وذلك دون إلحاق الأضرار بحقوق (صناع مجمع للتعامل الإلكتروني-ذ.م.م-ش.ش.و) الأخرى ووسائلها المشروعة في استرداد حقوقها وحماية باقي المستخدمين.
        </p>
    </div>
        <div className={style.header} >
          <img className={style.s_line} src={s_line} alt="PrivacyPolicy" />
            <h1 className={style.h1}>كيف نقوم بتخزين معلوماتك</h1>
          <img className={style.s_line} src={s_line} alt="PrivacyPolicy" />
        </div>
    <div>
        <p dir="rtl">
            <strong>سنقوم بتخزين معلوماتك طالما كان ذلك ضروريًا لتحقيق الأغراض المشار إليها في سياسة الخصوصية هذه أو كما يسمح به القانون أو يقتضيه. قد يتم نقل معلوماتك وتخزينها ومعالجتها واستخدامها من قبل الشركات التابعة لنا و/أو مقدمي الخدمات غير التابعين لنا في بلد واحد أو أكثر خارج بلدك الأصلي. قد يتم نقل تفاصيل الدفع الخاصة بك إلى الشركات التابعة لنا وتخزينها لديها من أجل، من بين أمور أخرى، معالجة تفاصيل الدفع الخاصة بك وتقديم خدمات الدعم لك.</strong>
        </p>
    </div>
        <div className={style.header} >
          <img className={style.s_line} src={s_line} alt="PrivacyPolicy" />
            <h1 className={style.h1}>ما هي التدابير الأمنية التي نطبقها</h1>
          <img className={style.s_line} src={s_line} alt="PrivacyPolicy" />
        </div>
    <div>
        <p dir="rtl">
            <strong>نحن نحافظ على ضمانات فنية وإدارية ومادية معقولة تجاريًا لضمان التعامل مع معلوماتك بشكل آمن ووفقًا لسياسة الخصوصية هذه، وللحماية من الوصول غير المصرح به أو تغيير معلوماتك أو الكشف عنها أو تدميرها. يجوز لنا، على سبيل المثال، استخدام تقنية التشفير لتأمين معلوماتك أثناء النقل إلى منصتنا بالإضافة إلى جدار الحماية الخارجي وتقنية جدار الحماية على المضيف لمنع الهجمات على مستوى الشبكة. يُسمح فقط للموظفين والمقاولين والوكلاء المعتمدين الذين يحتاجون إلى معرفة معلوماتك فيما يتعلق بأداء خدماتهم بالوصول إلى هذه المعلومات.</strong>
        </p>
    </div>

    <div>
        <p>
            <strong>من المهم بالنسبة لك حماية نفسك من الوصول غير المصرح به إلى كلمة المرور الخاصة بك وإلى أجهزتك المستخدمة للوصول إلى خدماتنا. أنت مسؤول عن الحفاظ على سرية كلمة المرور. على سبيل المثال، تأكد من تسجيل الخروج عند الانتهاء من استخدام جهاز مشترك.</strong>
        </p>
    </div>

    <div>
        <p dir="rtl">
            <strong>لسوء الحظ، فإن نقل المعلومات عبر الإنترنت ليس آمنًا تمامًا. على الرغم من أننا سنبذل قصارى جهدنا لحماية معلوماتك، إلا أنه لا يمكننا ضمان أمان معلوماتك المنقولة إلى منصتنا وأي نقل يكون على مسؤوليتك الخاصة.</strong>
        </p>
    </div>
        <div className={style.header} >
          <img className={style.s_line} src={s_line} alt="PrivacyPolicy" />
            <h1 className={style.h1}>كيف يمكنك الوصول إلى معلوماتك وتعديلها</h1>
          <img className={style.s_line} src={s_line} alt="PrivacyPolicy" />
        </div>
    <div>
        <p dir="rtl">
            <strong>يمكنك الوصول إلى مجموعة واسعة من المعلومات حول حسابك وتفاعلاتك مع المنصة بغرض عرض معلوماتك، وفي بعض الحالات، تحديثها.</strong>
        </p>
    </div>

    <div>
        <p>
            <strong>تتضمن أمثلة المعلومات التي يمكنك الوصول إليها بسهولة على المنصة ما يلي:</strong>
        </p>
    </div>

    <div>
        <ul dir="rtl">
            <li>معلومات محدثة بشأن الطلبات الأخيرة</li>
            <li>معلومات التعريف الشخصية (بما في ذلك الاسم والبريد الإلكتروني وكلمة المرور والاتصالات وتفضيلات الإعلانات الشخصية)</li>
            <li>إعدادات الدفع (بما في ذلك معلومات بطاقة الائتمان)</li>
            <li>إعدادات إشعارات البريد الإلكتروني.</li>
        </ul>
    </div>

    <div>
        <p dir="rtl">
            <strong>يمكنك إلغاء الاشتراك في تلقي الاتصالات التسويقية المستقبلية منا في أي وقت عن طريق ضبط تفضيلات اتصالات العملاء الخاصة بك، من خلال رابط إلغاء الاشتراك الموجود في مراسلات البريد الإلكتروني. للتسويق عبر تطبيق الهاتف المحمول الخاص بك، ستحتاج إلى ضبط إعدادات الإشعارات في القسم العام على هاتفك المحمول.</strong>
        </p>
    </div>

    <div>
        <p>
            <strong>كما سيضع نظامنا ملفات تعريف الارتباط عند تسجيل الدخول إلى منصتنا وهذا لضمان حصولك على تجربة مستخدم ممتعة وقدرتك على الاستفادة من جميع جوانب المنصة. يمكنك تعطيل ملفات تعريف الارتباط عن طريق تغيير الإعدادات في متصفحك. إذا قمت بتعطيل ملفات تعريف الارتباط، فسيؤثر ذلك على كيفية عمل منصتنا وقد لا تتمكن من الوصول إلى أو استخدام مناطق معينة من منصتنا أو الوظائف الكاملة. على سبيل المثال، تقوم ملفات تعريف الارتباط الخاصة بالأداء بجمع معلومات حول كيفية استخدامك للموقع، على سبيل المثال، الصفحات التي تزورها في أغلب الأحيان، مما يسمح لنا بتزويدك بالخيارات المستهدفة وذات الصلة التي تعزز تجربة الموقع الخاص بك.</strong>
        </p>
    </div>

    <div>
        <p dir="rtl">
            <strong>قد نحتفظ بنسخة من معلوماتك لأسباب تتعلق بالامتثال. عندما تقوم بتحديث المعلومات، قد نحتفظ بنسخة من الإصدار السابق لسجلاتنا.</strong>
        </p>
    </div>  
        <div className={style.header} >
          <img className={style.s_line} src={s_line} alt="PrivacyPolicy" />
            <h1 className={style.h1}>ماذا لو غيرنا سياسة الخصوصية الخاصة بنا</h1>
          <img className={style.s_line} src={s_line} alt="PrivacyPolicy" />
        </div>
    <div>
        <p dir="rtl">
            <strong>يتعرض عملنا لتغييرات بصفة مستمرة، لذا قد تتأثر سياسة الخصوصية الخاصة بنا وتحتاج إلى تغيير موازٍ. سوف نقوم بنشر النسخة الحالية لسياسة الخصوصية هذه على الموقع وستظل سارية المفعول منذ نشرها على الموقع أو بناءً على الموعد الذي نحدده من جانبنا كـتاريخ لسريانها.</strong>
        </p>
    </div>

    <div>
        <p>
            <strong>قد نقوم بإرسال رسائل تذكيرية بصفة دورية عبر البريد الإلكتروني بإخطاراتنا وشروطنا، ولكن ينبغي لك التحقق بزيارتك المتكررة لموقعنا للاطلاع على أحدث التغييرات.</strong>
        </p>
    </div>

    <div>
        <p dir="rtl">
            <strong>يجب عليك التحقق من سياسة الخصوصية بصورة منتظمة. فإن استمرارك في استخدام الموقع بعد أي تغييرات يُعد موافقة منك على سياسة الخصوصية هذه بصيغتها المعدلة.</strong>
        </p>
    </div>

    </div>
  )
}

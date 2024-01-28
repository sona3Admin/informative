import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik'; // Import the necessary components from Formik
import * as Yup from 'yup';
import { Input, Checkbox, Button } from 'antd'; // Replace with your actual component library
import TextArea from 'antd/es/input/TextArea'
import { useTranslation } from 'react-i18next';
import style from './style.module.css'

const CommentForm = () => {
  const {t} = useTranslation()
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t('Name is required')),
    email: Yup.string().email(t('Invalid email')).required(t('Email is required')),
    comment: Yup.string().required(t('Comment is required')),
    acceptTerms: Yup.bool().oneOf([true], t('You must accept the Privacy & Policies')),
  });

  const initialValues = {
    name: '',
    email: '',
    comment: '',
    acceptTerms: false,
  };

  const handleSubmit = (values, { resetForm }) => {
    alert(t('تم ارسال تعليقك بنجاح'));
    resetForm()
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className={style.form}>
        <h3 className={style.h3}>{t('Leave a comment')}</h3>
        <p className={style.p}>{t('Make sure that your comment is objective and useful')}</p>
        <div className={style.form_inputs}>
          <div className={style.form_inputs_flex}>
            <div style={{display:"block",width:"100%"}}>
                <Field
                id={style.form_input}
                name="name"
                placeholder={t('Name')}
                type="text"
                as={Input}
                />
                <ErrorMessage name="name" component="div" className={style.error} />
            </div>
            <div style={{display:"block",width:"100%"}}>
                <Field
                id={style.form_input}
                name="email"
                placeholder={t('Email')}
                type="email"
                as={Input}
                />
                <ErrorMessage name="email" component="div" className={style.error} />
            </div>
          </div>
          <Field
            as={TextArea}
            id={style.form_input}
            name="comment"
            placeholder={t('Type comment')}
            autoSize={{ minRows: 5, maxRows: 6 }}
          />
          <ErrorMessage name="comment" component="div" className={style.error} />
          <div className={style.form_check_line}>
            <Field type="checkbox" name="acceptTerms" as={Checkbox} />
            <span>{t('I accept to')}</span>
            <span className={style.span_custom}>{t('Privacy & Policies')}</span>
          </div>
          <ErrorMessage name="acceptTerms" component="div" className={style.error} />
          <Button htmlType="submit" id={style.form_btn}>
            {t('Send Comment')}
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default CommentForm;

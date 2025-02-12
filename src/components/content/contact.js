import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import React, { useState } from 'react';

const InteoContactForm = () => {
    const initialValues = {
        name: '',
        email: '',
        message: '',
        phone: ''
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        message: Yup.string().required('Required'),
        phone: Yup.string().required('Required')
    });

    const onSubmit = (values, { resetForm }) => {
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', values, 'YOUR_USER_ID')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                resetForm();
            }, (error) => {
                console.log('FAILED...', error);
            });
    };

    return (
        <div>
            <h1>Contact Us</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Field type="text" id="name" name="name" />
                        <ErrorMessage name="name" component="div" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field type="email" id="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <Field as="textarea" id="message" name="message" />
                        <ErrorMessage name="message" component="div" />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone Number</label>
                        <Field type="text" id="phone" name="phone" />
                        <ErrorMessage name="phone" component="div" />
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

export default InteoContactForm;
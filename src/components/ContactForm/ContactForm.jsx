// import { Formik, Field, Form } from 'formik';
import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Container, Label, Btn } from './ContactForm.styled';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string().min(2, 'Too Short!').required('Required'),
});

const ContacForm = ({ addCont }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        addCont(values);
        actions.resetForm();
      }}
    >
      <Container>
        <Label htmlFor="name">Name</Label>
        <Field type="text" name="name" />

        <Label htmlFor="number">Number</Label>
        <Field type="tel" name="number" />

        <Btn type="submit">Add contact</Btn>
      </Container>
    </Formik>
  );
};

export default ContacForm;

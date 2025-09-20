"use client"

import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {

  const initialValues = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    phone: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    role: Yup.string().oneOf(['researcher', 'normal', 'tutor'], 'Role is required').required('Role is required'),
    phone: Yup.string().matches(/^\+?\d*$/, 'Invalid phone number').notRequired(),
  });

  return (
    <div className="sign-up-container p-8 mx-auto rounded-xl bg-[var(--color-surface)] text-white w-full max-w-[480px]">
      <h2 style={{ fontWeight: 700 }} className="mb-3 text-2xl text-[var(--color-primary)]">Sign Up for N2N</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        <Form id="signup-form">
          <div className="mb-4">
            <label className='mb-2 text-[#C9D4DA]' htmlFor="name">First Name</label>
            <Field type="text" id="name" name="name" 
              placeholder='Your First Name'
              className="w-full focus-secondary py-3 px-4 rounded-xl bg-[rgba(255,255,255,0.05)]" />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1"/>
          </div>
          <div className="mb-4">
            <label className='mb-2 text-[#C9D4DA]' htmlFor="lastName">Last Name</label>
            <Field type="text" id="lastName" name="lastName" 
              placeholder='Your Last Name'
              className="w-full focus-secondary py-3 px-4 rounded-xl bg-[rgba(255,255,255,0.05)]" />
            <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1"/>
          </div>
          <div className="mb-4">
            <label className='mb-2 text-[#C9D4DA]' htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" 
              placeholder='you@example.com'
              className="w-full focus-secondary py-3 px-4 rounded-xl bg-[rgba(255,255,255,0.05)]" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1"/>
          </div>
          <div className="mb-4">
            <label className='mb-2 text-[#C9D4DA]' htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" 
              placeholder='••••••••'
              className="w-full focus-secondary py-3 px-4 rounded-xl bg-[rgba(255,255,255,0.05)]" />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1"/>
          </div>
          <div className="mb-4">
            <label className='mb-2 text-[#C9D4DA]' htmlFor="confirmPassword">Confirm Password</label>
            <Field type="password" id="confirmPassword" name="confirmPassword" 
              placeholder='••••••••'
              className="w-full focus-secondary py-3 px-4 rounded-xl bg-[rgba(255,255,255,0.05)]" />
            <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1"/>
          </div>
          <div className="mb-4">
            <label className='mb-2 text-[#C9D4DA]' htmlFor="role">Role</label>
            <Field as="select" id="role" name="role" 
              className="w-full focus-secondary py-3 px-4 rounded-xl bg-[rgba(255,255,255,0.05)]">
              <option value="">Select Role</option>
              <option value="researcher">Researcher</option>
              <option value="normal">Normal User</option>
              <option value="tutor">Tutor</option>
            </Field>
            <ErrorMessage name="role" component="div" className="text-red-500 text-sm mt-1"/>
          </div>
          <div className="mb-4">
            <label className='mb-2 text-[#C9D4DA]' htmlFor="phone">Phone Number</label>
            <Field type="text" id="phone" name="phone" 
              placeholder='+1 234 567 890'
              className="w-full focus-secondary py-3 px-4 rounded-xl bg-[rgba(255,255,255,0.05)]" />
            <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1"/>
          </div>
          <div className="flex gap-3">
            <button type="submit" className="btn-primary-empty font-semibold px-3 py-2 text-sm rounded-lg hover:scale-105 transition">
              <span>Sign Up</span>
            </button>
          </div>
          <div id="status" role="status" className='min-h-[24px]'></div>
          <div className="flex items-center gap-3 mt-5">
            <div className="flex-1 h-[1px] bg-[rgba(255,255,255,0.3)]"></div>
            <span className="text-[#C9D4DA] text-sm">or</span>
            <div className="flex-1 h-[1px] bg-[rgba(255,255,255,0.3)]"></div>
          </div>
          <div className="mt-4">
            <button className="btn-back-gradient-empty w-full text-center px-3 py-2 text-sm rounded-lg hover:scale-105 transition font-semibold"> 
              <span>Continue with Google</span>
            </button>
            <p className="text-[#C9D4DA] text-sm mt-4">
              Already have an account? <a href="#" className="text-[var(--color-accent)] font-semibold">Log In</a>
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default SignUp

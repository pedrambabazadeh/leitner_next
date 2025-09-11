"use client"

import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const LogIn = () => {

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  // it is similar to lig-in for now
  // we will change it later
  // when we have the backend ready

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  return (
    <div className="log-in-container p-8 mx-auto rounded-xl bg-[var(--color-surface)] text-white w-full max-w-[480px]">
        <h2 style={{fontWeight:700}} className="mb-3 text-2xl text-[var(--color-primary)]">Log In to N2N</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        <Form  id="login-form">
            <div className="mb-4">
              <label className='mb-2 text-[#C9D4DA]' htmlFor="email">Email</label>
              <Field  type="email" id="email" name="email" 
                required autoComplete='email' placeholder='you@example.com'
                className="w-full focus-secondary py-3 px-4 rounded-xl bg-[rgba(255,255,255,0.05)]" />
            </div>
            <div className="mb-4">
              <label className='mb-2 text-[#C9D4DA]' htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" 
              required autoComplete='current-password' placeholder='••••••••'
              className="w-full focus-secondary py-3 px-4 rounded-xl bg-[rgba(255,255,255,0.05)]" />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex gap-2 items-center">
              <Field type="checkbox" id="remember" name="remember" className="accent-[var(--color-primary)]" />
              <span className="text-[#C9D4DA] text-sm">Remember me</span>
            </label>
            <a href="#" className="text-[var(--color-secondary)] text-sm no-underline">Forgot password?</a>
          </div>
          <div className="flex gap-3">
            <button type="submit" className="btn-primary-empty font-semibold px-3 py-2 text-sm rounded-lg hover:scale-105 transition">
              <span>Log In</span></button>
          </div>
          <div id="status" role="status" className='min-h-[24px]'></div>
          <div className="flex items-center  gap-3 mt-5">
            <div className="flex-1 h-[1px] bg-[rgba(255,255,255,0.3)]"></div>
            <span className="text-[#C9D4DA] text-sm">or</span>
            <div className="flex-1 h-[1px] bg-[rgba(255,255,255,0.3)]"></div>
          </div>
          <div className="mt-4">
            <button className="btn-back-gradient-empty w-full text-center px-3 py-2 text-sm rounded-lg hover:scale-105 transition font-semibold"> <span> Continue with Google</span></button>
            <p className="text-[#C9D4DA] text-sm mt-4">Don't you have an account? <a href="#" className="text-[var(--color-accent)] font-semibold">Sign Up</a></p>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default LogIn
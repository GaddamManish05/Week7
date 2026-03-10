import React, { useEffect } from 'react'
import { useAuth } from '../AuthStore/AuthStore'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { toast } from 'react-hot-toast'

import {
  pageBackground,
  pageWrapper,
  formCard,
  formTitle,
  formGroup,
  labelClass,
  inputClass,
  submitBtn,
  errorClass
} from '../styles/Common'

function Login() {

  const navigate = useNavigate()

  const login = useAuth(state => state.login)
  const isAuthenticated = useAuth(state => state.isAuthenticated)
  const currentUser = useAuth(state => state.currentUser)
  const error = useAuth(state => state.error)

  const { register, handleSubmit } = useForm()

  const onLoginUser = async (userCredObj) => {
    await login(userCredObj)
  }

  useEffect(() => {

    if (isAuthenticated) {

      if (currentUser?.role === "USER") {
        toast.success("Logged In Successfully")
        navigate('/user-profile')
      }

      if (currentUser?.role === "AUTHOR") {
        toast.success("Logged In Successfully")
        navigate('/author-profile')
      }

    }

  }, [isAuthenticated, currentUser, navigate])

  return (

    <div className={pageBackground}>

      <div className={pageWrapper}>

        <div className={formCard}>

          <h2 className={formTitle}>Login</h2>

          <form onSubmit={handleSubmit(onLoginUser)}>

            {error && <p className={errorClass}>{error}</p>}

            {/* Email */}

            <div className={formGroup}>
              <label className={labelClass}>Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                {...register("email", { required: true })}
                className={inputClass}
              />
            </div>

            {/* Password */}

            <div className={formGroup}>
              <label className={labelClass}>Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                {...register("password", { required: true })}
                className={inputClass}
              />
            </div>

            <button type="submit" className={submitBtn}>
              Login
            </button>

          </form>

        </div>

      </div>

    </div>

  )
}

export default Login
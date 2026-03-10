import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import axios from 'axios'

import {
  pageBackground,
  pageWrapper,
  formCard,
  formTitle,
  formGroup,
  labelClass,
  inputClass,
  submitBtn,
  errorClass,
  loadingClass
} from '../styles/Common'

function Register() {

  let navigate = useNavigate()
  const { register, handleSubmit } = useForm()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const onCreateUser = async (newUser) => {

    setLoading(true)
    setError(null)

    let { role, ...userObj } = newUser

    try {

      if (role === "user") {
        let resObj = await axios.post('http://localhost:4000/user-api/users', userObj)
        console.log(resObj.data)
      }

      if (role === "author") {
        let resObj = await axios.post('http://localhost:4000/author-api/users', userObj)
        console.log(resObj.data)
      }

      navigate('/login')

    } catch (err) {
      setError(err.message)
    }
    finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <p className={loadingClass}>Loading...</p>
  }

  return (

    <div className={pageBackground}>

      <div className={pageWrapper}>

        <div className={formCard}>

          <h2 className={formTitle}>Create Account</h2>

          {error && <p className={errorClass}>{error}</p>}

          <form onSubmit={handleSubmit(onCreateUser)}>

            {/* Role Selection */}

            <div className={formGroup}>

              <label className={labelClass}>Select Role</label>

              <div className="flex gap-6 mt-2">

                <label>
                  <input
                    className='p-3 m-3'
                    type="radio"
                    value="user"
                    {...register("role", { required: true })}
                  /> User
                </label>

                <label>
                <input
                    className='m-3'
                    type="radio"
                    value="author"
                    {...register("role", { required: true })}
                  /> Author
                </label>

              </div>

            </div>


            {/* First Name */}

            <div className={formGroup}>
              <label className={labelClass}>First Name</label>
              <input
                type="text"
                {...register("firstName", { required: true })}
                placeholder="First Name"
                className={inputClass}
              />
            </div>


            {/* Last Name */}

            <div className={formGroup}>
              <label className={labelClass}>Last Name</label>
              <input
                type="text"
                {...register("lastName")}
                placeholder="Last Name"
                className={inputClass}
              />
            </div>


            {/* Email */}

            <div className={formGroup}>
              <label className={labelClass}>Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter Email"
                className={inputClass}
              />
            </div>


            {/* Password */}

            <div className={formGroup}>
              <label className={labelClass}>Password</label>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="Enter Password"
                className={inputClass}
              />
            </div>


            {/* Profile Image */}

            <div className={formGroup}>
              <label className={labelClass}>Profile Image URL</label>
              <input
                type="text"
                {...register("profileImageUrl")}
                placeholder="Paste Image URL"
                className={inputClass}
              />
            </div>


            <button type="submit" className={submitBtn}>
              Register
            </button>

          </form>

        </div>

      </div>

    </div>

  )
}

export default Register
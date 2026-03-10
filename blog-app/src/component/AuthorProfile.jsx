import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../AuthStore/AuthStore'
import axios from 'axios'

import {
  pageBackground,
  pageWrapper,
  headingClass,
  primaryBtn,
  errorClass,
  loadingClass,
  articleGrid,
  articleCardClass,
  articleTitle,
  articleMeta,
  articleBody
} from '../styles/Common'

function AuthorProfile() {

  const navigate = useNavigate()
  const logout = useAuth(state => state.logout)
  const [error, setError] = useState(null)
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)

  const onLogOut = async () => {
    await logout()
    navigate('/login')
  }

  const toaddArticle = () => {
    navigate('/add-article')
  }

  const onGetOwnArticles = async () => {

    setError(null)
    setLoading(true)

    try {


      let res = await axios.get(
        `http://localhost:4000/author-api/articles`,
        { withCredentials: true }
      )
      console.log(res.data.payload);
      setArticles(res.data.payload)

    } catch (err) {

      setError(err.message)

    } finally {

      setLoading(false)

    }

  }

  return (

    <div className={pageBackground}>

      <div className={pageWrapper}>

        <h2 className={headingClass + " mb-6"}>
          Author Dashboard
        </h2>

        {/* Buttons */}

        <div className="flex gap-4 mb-8">

          <button className={primaryBtn} onClick={onGetOwnArticles}>
            Load My Articles
          </button>
          <button className={primaryBtn} onClick={toaddArticle}>
            AddArticles
          </button>

          <button className={primaryBtn} onClick={onLogOut}>
            Logout
          </button>

        </div>

        {/* Loading */}

        {loading && <p className={loadingClass}>Loading...</p>}

        {/* Error */}

        {error && <p className={errorClass}>{error}</p>}

        {/* Articles */}

        <div className={articleGrid}>

          {articles.map(articleObj => (

            <div key={articleObj._id} className={articleCardClass}>

              <h3 className={articleTitle}>
                {articleObj.title}
              </h3>

              <p className={articleMeta}>
                Category: {articleObj.category}
              </p>

              <p className={articleBody}>
                {articleObj.content}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  )
}

export default AuthorProfile
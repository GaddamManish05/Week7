import React, { useState } from "react";
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { errorClass,loadingClass } from "../styles/Common";

function AddArticle() {
  const { register, handleSubmit } = useForm()
  // const [title, setTitle] = useState("");
  // const [category, setCategory] = useState("");
  // const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onCreateArticle = async(newArticle) => {
    try{
        setLoading(true);
        setError(null);
        let res = await axios.post('http://localhost:4000/author-api/articles',newArticle);
        let data = res.data.payload;
        console.log(data);
    }
    catch(err){
      setLoading(false);
      setError(err.message);
    } 
  }
  if (loading) {
      return <p className={loadingClass}>Loading...</p>
    }
  

  return (
    <div className="w-full min-h-screen bg-gray-200 flex flex-col items-center">

    {error && <p className={errorClass}>{error}</p>}
    <form
        onSubmit={handleSubmit(onCreateArticle)}
        className="w-9/12 bg-gray-300 mt-6 p-10 flex flex-col items-center rounded-lg"
    >
        <h1 className="text-xl font-semibold mb-6">Add Article</h1>
        <input
        type="text"
        placeholder="Title"
        className="w-6/12 h-12 bg-gray-400 text-center mb-6 rounded-2xl"
        {...register("title",{required : true})}
        />

    
        <select
        className="w-6/12 h-12 bg-gray-400 text-center mb-6 rounded-2xl"
        {...register("category",{required : true})}
        >
        <option value="" >Category</option>
        <option value="Technology">Technology</option>
        <option value="Sports">Sports</option>
        <option value="Education">Education</option>
        </select>


        <textarea
        placeholder="Content"
        className="w-9/12 h-28 bg-gray-400 text-center mb-6 outline-none p-3 rounded-2xl"
        {...register("content",{required : true})}
        />

        <button
        type="submit"
        className="bg-sky-400 px-6 py-2 text-black rounded-2xl"
        >
        Publish Article
        </button>

      </form>
    </div>
  );
}

export default AddArticle;
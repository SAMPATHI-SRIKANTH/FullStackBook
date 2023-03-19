import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [book,setBook] = useState({
        title:"",
        author:""
    })

    const navigate = useNavigate()

    const handleClick = async e => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/books",book);
            navigate("/")
            
        } catch (error) {
            console.log(error)
        }

    }

    const handleChange = (e) => {
        setBook((prev) =>({...prev,[e.target.name]:e.target.value}));
    };

  return (
    <form className='form'>
        <h1>Add New Book</h1>
        <input type="text" placeholder='title' name="title" onChange={handleChange}/>
        <input type="text" placeholder='author'name="author" onChange={handleChange}/>
        <button type="button" onClick={handleClick} className="form-add">Add</button>
    </form>
  )
}

export default Add

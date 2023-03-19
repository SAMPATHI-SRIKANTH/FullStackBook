import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Books = () => {
    const [books,setBooks] = useState([])

    useEffect(()=>{
        const fetchAllBooks = async ()=>{
            try {
                const result  = await axios.get("http://localhost:8800/books")
                setBooks(result.data)
                console.log(result)
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllBooks()
    },[])

  return (
    <div>
        <h1>Books </h1>
        <ul className="books">
            {books.map(book =>(
                <li className='book' key={book.id}>
                    <img src="https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg?size=338&ext=jpg" alt="book-cover" className ="cover-image"/>
                    <div className='book-info'> 
                        <h1 className='title'>{book.title}</h1>
                        <p className='author'>Author:{book.author}</p>
                    </div>
                </li>
            ))}
        </ul>
        <button className='addnewbtn'>
            <Link to="/add" className='add'>Add New Book</Link>
        </button>
    </div>

  )
}

export default Books
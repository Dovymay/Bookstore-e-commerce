// import React from 'react'
import axios from 'axios';
import Bookform from '../components/Bookform' 
import { useContext, useState } from 'react'
import { BookstoreContext } from '../context/BookstoreContext';
import { useNavigate } from 'react-router-dom';

const Addbook = () => {
const{ books, setBooks} = useContext(BookstoreContext)
    const [formData, setFormData] = useState({
    image: "",
    book_name: "",
    author: "",
    categories: [],
    price: 0,
    discounts: 0,
    in_stock: false,
    is_bestseller: false,
    rating: "",
    description: "",
    pub_date: ""
  });
  const nav = useNavigate();    

   const handleSubmit = async (e) =>{
    e.preventDefault()


try {
    const response =  await axios.post("http://localhost:5005/books", {...formData, price: Number(formData.price), discounts: Number (formData.discounts)})
    console.log(response.data) 
    setBooks([...books, response.data])
    nav("/")
} catch (error) {
    console.log (error)
}
  }

  return (
    <div>Addbook
    <Bookform formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>
    </div>
  )
}

export default Addbook


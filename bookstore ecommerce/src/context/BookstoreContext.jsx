import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const BookstoreContext = createContext()



const Bookstore = ({children}) => {
    const [books, setBooks] = useState([])


     const fetchSingleBook = async (id, setBook) => {
        try {
            const response = await axios.get(
                `http://localhost:5005/books/${id}`
            )
            setBook(response.data)
        } catch (error) {
            console.log(error)
        }
     }

     useEffect (()=>{
        const fetchBookStore = async () => {
        try {
            const response = await axios.get("http://localhost:5005/books")

            setBooks(response.data)
            console.log(response.data)
        }catch (error){
            console.log(error)
        }
     }   
        fetchBookStore()
     }, [])


  return (
    <BookstoreContext.Provider
    value ={{books, setBooks, fetchSingleBook}}>
        {children}
     
    </BookstoreContext.Provider>
  )
}

export default Bookstore
export {BookstoreContext}


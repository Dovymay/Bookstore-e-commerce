import { useContext, useEffect, useState } from "react"
import { BookstoreContext } from "../context/BookstoreContext"
import { useParams } from "react-router-dom"

const BookDetailsPage = () => {
    const {fetchSingleBook} = useContext(BookstoreContext)
    const { id } = useParams()
    const [book, setBook] = useState()

    useEffect (()=>{
        fetchSingleBook(id, setBook)
     }, [id])

  return (
    <div>
      <p>{book.book_name}</p>
      
     
    </div>
  )
}

export default BookDetailsPage

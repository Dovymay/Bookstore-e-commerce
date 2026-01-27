import { BookstoreContext } from "../context/BookstoreContext"
import BookCard from "../components/BookCard"
import { useContext } from "react"



const Homepage = () => {
  const {books} = useContext(BookstoreContext)

  return (
    <div>
<BookCard key={books.id} books={books} />

    </div>
  )
}

export default Homepage



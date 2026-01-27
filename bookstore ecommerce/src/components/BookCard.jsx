import { Link } from "react-router-dom";

const BookCard = ({ books }) => {
  return (
    <div className="book-container">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <Link to={`/books/${book.id}`}>
            <img src={book.image} alt={book.book_name} className="book-cover" />
            <h4>{book.book_name}</h4>
          </Link>
          <p>{book.author}</p>
          <p>${book.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default BookCard;

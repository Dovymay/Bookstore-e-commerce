import { useState } from "react";

const Bookform = ({formData, setFormData, handleSubmit}) => {


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Book image:
          <input
            value={formData.image}
            onChange={(e) => {
              setFormData({...formData, image: e.target.value});
            }}
            type="text"
            placeholder="Add image url"
          />
        </label>

        <label>
          Book name:
          <input 
          value={formData.book_name}
          onChange={(e) => {
              setFormData({...formData, book_name: e.target.value});
            }}
          type="text" placeholder="Book name" />
        </label>

            <label>
         Author name:
          <input 
          value={formData.author}
          onChange={(e) => {
              setFormData({...formData, author: e.target.value});
            }}
          type="text" placeholder="Book author name" />
        </label>

        {/* look for the synteax for array input */}
            <label> 
         Category:
          <input 
          value={formData.categories}
          onChange={(e) => {
              setFormData({...formData, categories: e.target.value});
            }}
          type="text" placeholder="Add book category" />
        </label>

        <label>
         Price:
          <input 
          value={formData.price}
          onChange={(e) => {
              setFormData({...formData, price: e.target.value});
            }}
          type="number" placeholder="Book price" />
        </label>

        <label>
         Discounts:
          <input 
          value={formData.discounts}
          onChange={(e) => {
              setFormData({...formData, discounts: e.target.value});
            }}
          type="number"/>
        </label>

        <label>
         Stock:
          <input 
          checked={formData.in_stock}
          onChange={(e) => {
              setFormData({...formData, in_stock: e.target.checked});
            }}
          type="checkbox"/>
        </label>
        
         <label>
         Bestseller:
          <input 
          checked={formData.is_bestseller}
          onChange={(e) => {
              setFormData({...formData, is_bestseller: e.target.checked});
            }}
          type="checkbox"/>
        </label>
        
        <label>
         Rating:
          <input 
          value={formData.rating}
          onChange={(e) => {
              setFormData({...formData, rating: e.target.value});
            }}
          type="text" placeholder="Book rating" />
        </label>

        <label>
         Description:
          <input 
          value={formData.description}
          onChange={(e) => {
              setFormData({...formData, description: e.target.value});
            }}
          type="text" placeholder="Book description" />
        </label>
        
        <label>
         Publication Date:
          <input 
          value={formData.pub_date}
          onChange={(e) => {
              setFormData({...formData, pub_date: e.target.value});
            }}
          type="text" placeholder="yyyy/mm/dd" />
        </label>
 <button type="submit">Launch Book</button>
            

      </form>
    </div>
  );
};

export default Bookform;

// id": "BK-001",
//     "book_name": "Harry Potter and the Sorcerer's Stone",
//     "author": "J.K. Rowling",
//     "categories": [
//       "Fantasy",
//       "YA"
//     ],
//     "price": 24.99,
//     "discounts": 0.15,
//     "in_stock": true,
//     "is_bestseller": true,
//     "rating": 4.9,
//     "description": "A young boy discovers he is a wizard.",
//     "image": "https://covers.openlibrary.org/b/isbn/9780545582889-M.jpg",
//     "pub_date": "1997-06-26"

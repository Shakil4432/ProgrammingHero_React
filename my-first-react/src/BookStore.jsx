import React from 'react'
import Book from './Book'

export default function BookStore({books}) {
  return (
    <div>
   
    {
        books.map(book=><Book book={book}></Book>)
    }
    </div>
  )
}

import { useEffect, useState } from "react";
import { getBooks } from "../api/books";
import BookList from "./BookList";

//Fetches all books
export default function BooksPage() {
  const [books, setBooks] = useState([]);

  const syncBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  useEffect(() => {
    syncBooks();
  }, []);

  return (
    <>
      <h1>Books</h1>
      <BookList books={books} />
    </>
  );
}

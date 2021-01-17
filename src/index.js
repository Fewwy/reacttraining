import React from "react";
import ReactDom from "react-dom";
import { books } from "./components/books";
import SpecificBook from "./components/book";
//css
import "./pages/pagstyles/index.css";

//stateless functional component
// always return jsx and only single element
//className instead of class (use camelCase for html attribute)
//close every element with closing tags
//formatting

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        const {
          img,
          title,
          author,
        } = book; /* doing a destructuring of each object */
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));

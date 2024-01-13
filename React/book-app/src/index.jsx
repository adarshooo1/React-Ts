import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// List:

const books = [
  {
    author: "Morgan Housel",
    title: "The Psychology Of Money",
    image: "https://m.media-amazon.com/images/I/61-hMfd7NGL._SY522_.jpg",
    id: 1,
  },

  {
    author: "James Clear",
    title: "Atomic Habits",
    image: "https://m.media-amazon.com/images/I/81IL8Dy4vmL._SY522_.jpg",
    id: 2,
  },
  {
    author: "Daaji",
    title: "Spiritual Anatomy",
    image: `https://m.media-amazon.com/images/I/61PJx0YuQpL._SY466_.jpg`,
    id: 3,
  },
];

// // Rendering Element
const Book = (props) => {
  const { image, title, author } = props;
  return (
    <div className="BookContainer">
      <div className="ImageHolder">
        <img className="BookImage" src={image} alt={title} />
      </div>
      <div className="InfoHolder">
        <h1>{title}</h1>
        <h2>{author}</h2>
      </div>
    </div>
  );
};

const BookList = () => {
  return (
    <section className="BookList">
      {books.map((book) => {
        console.log(book);

        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const app = ReactDOM.createRoot(document.getElementById("root"));
app.render(
  <React.StrictMode>
    {/* <div className="BookList">
      <Book img={Book1.image} title={Book1.title} author={Book1.author} />
      <Book img={Book2.image} title={Book2.title} author={Book2.author}></Book>
    </div> */}
    <BookList />
  </React.StrictMode>
);

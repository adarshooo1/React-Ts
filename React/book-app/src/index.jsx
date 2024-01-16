import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { books } from "./data";
import { Book } from "./Book";
import "./index.css";

const BookList = () => {
  function getBookDetail(id) {
    const BookInfo = books.find((book) => book.id === id);
    console.log(BookInfo);
  }
  return (
    <>
      <h1
        style={{
          marginBottom: "40px",
          marginTop: "40px",
          marginLeft: "70px",
        }}
      >
        Amazon Best Sellers
      </h1>
      <section className="BookList">
        {books.map((book, index) => {
          return (
            <Book
              {...book}
              key={book.id}
              getBookDetail={getBookDetail}
              BookNumber={index}
            />
          );
        })}
      </section>
      <div style={{ marginLeft: "60px" }}>
        <Form />
      </div>
    </>
  );
};

// Input form
const Form = () => {
  const [readerName, setReaderName] = useState("");
  const [bookName, setBookName] = useState("");

  return (
    <form style={{ width: "80%", height: "100px" }} className="BookReadingForm">
      <h1 style={{ margin: "10px 0 10px 0 " }}>Whose Reading,</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <input
          style={{
            width: "30%",
            margin: "0 10px 10px 0",
            border: "none",
            outline: "none",
            height: "20px",
          }}
          type="text"
          name="Reader"
          required
          value={readerName}
          onChange={(e) => {
            setReaderName(e.target.value);
          }}
          placeholder="Enter Your Name"
        />

        <input
          style={{
            width: "30%",
            margin: "0 10px 10px 0",
            border: "none",
            outline: "none",
            height: "20px",
          }}
          type="text"
          name="Book"
          value={bookName}
          required
          onChange={(e) => {
            setBookName(e.target.value);
          }}
          placeholder="Enter Book Name"
        />

        <button
          type="submit"
          onClick={() => {
            if (readerName === "" && bookName === "") {
              alert("Please enter details");
            } else {
              alert(
                `Happy Reading Dear "${readerName}", Reading "${bookName}" will be worth it`
              );
            }
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);

import React from "react";
import { bookOne, bookTwo, bookThree } from "./data";

// const imageUrl =
//   "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71hwUY5ZmxL._SL1500_.jpg";
// const author = "John Doe";
// const bookName = "Costa Maple";

const Book = (props) => {
  console.log(props);
  return (
    <>
      <div className="w-[300px] mt-4 mb-4 flex flex-col relative bg-white rounded-lg p-3 shadow-xl transition-transform duration-150 hover:scale-105 hover:shadow-none">
        {/* This is fetched from somewhere */}
        <img
          src={props.imageUrl}
          alt={props.bookName}
          className="h-56 object-contain"
        />
        <div className="flex flex-col justify-between text-center">
          <h2 className="text-xl">{props.bookName}</h2>
          <p className="font-extralight">{props.author}</p>
        </div>
      </div>
    </>
  );
};

const BookList = () => {
  return (
    <>
      <div className="text-center mb-6">
        <h1 className="text-2xl">Amazon Seller</h1>
      </div>
      <div className="imageContainer flex justify-around mt-4 mb-4">
        <Book
          author="Adarsh"
          bookName="Bear biceps true coverage"
          imageUrl="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71hwUY5ZmxL._SL1500_.jpg"
        />
        <Book
          author="Adam"
          bookName="comic world lost in the space"
          imageUrl="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71hwUY5ZmxL._SL1500_.jpg"
        />
        <Book
          author="Deeps"
          bookName="Loops are in the infinite way"
          imageUrl="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71hwUY5ZmxL._SL1500_.jpg"
        />
      </div>

      {/* Imported Data Example */}
      <div className="imageContainer flex justify-around mt-4 mb-4">
        <Book
          author={bookOne.author}
          bookName={bookOne.bookName}
          imageUrl={bookOne.imageUrl}
        />
        <Book
          author={bookTwo.author}
          bookName={bookTwo.bookName}
          imageUrl={bookTwo.imageUrl}
        />
        <Book
          author={bookThree.author}
          bookName={bookThree.bookName}
          imageUrl={bookThree.imageUrl}
        />
      </div>
    </>
  );
};

export default BookList;

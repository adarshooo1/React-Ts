import React from "react";

interface Props {
  url: string;
  title: string;
  author: string;
}

const Book: React.FC<Props> = ({ url, title, author }: Props) => {
  return (
    <>
      <div className="bg-white h-[300px] w-[360px] flex justify-center items-center flex-col text-black rounded-lg m-3 shadow-2xl transition-transform duration-200 ease-linear hover:scale-105">
        <img src={url} alt="Curious Minds Book" className="h-60" />
        <div className="flex flex-col justify-center text-center mt-3">
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="leading-tight font-thin">Written By {author}</p>
        </div>
      </div>
    </>
  );
};

export default Book;

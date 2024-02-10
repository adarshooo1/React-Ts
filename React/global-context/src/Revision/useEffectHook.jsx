import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  // // Example 1:
  // const [resourceType, setResourceType] = useState("posts");
  // const [items, setItems] = useState([]);
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then((response) => response.json())
  //     .then((data) => setItems(data));
  // }, [resourceType]);
  // // Example 1:
  // return (
  //   <div className="p-2">
  //     <div>
  //       <button
  //         onClick={() => {
  //           setResourceType("posts");
  //         }}
  //         className="border-2 border-black px-4 py-2 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-2xl"
  //       >
  //         Posts
  //       </button>
  //       <button
  //         onClick={() => {
  //           setResourceType("users");
  //         }}
  //         className="border-2 border-black px-4 py-2 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-2xl"
  //       >
  //         Users
  //       </button>
  //       <button
  //         onClick={() => setResourceType("comments")}
  //         className="border-2 border-black px-4 py-2 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-2xl"
  //       >
  //         Comments
  //       </button>
  //     </div>
  //     <div>
  //       <h1>DISPLAY CONTENT</h1>
  //       <div>
  //         {items.map((item) => {
  //           return <pre key={item.id}> {JSON.stringify(item)} </pre>;
  //         })}
  //       </div>
  //     </div>
  //   </div>
  // );

  // Example 2:

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  return <div>{windowWidth}</div>;
};

export default UseEffectHook;

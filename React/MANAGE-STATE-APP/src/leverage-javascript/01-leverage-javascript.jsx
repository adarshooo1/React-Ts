import { List } from "./List";
import { useState } from "react";
import { people } from "../data";

export const Starter = () => {
  const [isPeople, setIsPeople] = useState(people);

  return (
    <div className="container">
      <h1>Leverage Javascript</h1>
      {isPeople.map((person) => {
        console.log(person);
        return <List key={person.name} {...person} />;
      })}
    </div>
  );
};

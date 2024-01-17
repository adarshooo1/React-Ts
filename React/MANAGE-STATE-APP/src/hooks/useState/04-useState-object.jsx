import React, { useState } from "react";
import { peopleClassification } from "../../data";

export const Starter = () => {
  const [name, setName] = useState("Adarsh");
  const [age, setAge] = useState(21);
  const [hobby, setHobby] = useState("Playing Volley");

  function hasNext() {
    setName("Mark Charles");
    setAge(23);
    setHobby("Rugby Match");
  }

  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>Age : {age}</h1>
      <h1>Enjoys : {hobby}</h1>
      <button type="button" onClick={hasNext}>
        show Next
      </button>
    </div>
  );
};

export const Middle = () => {
  const [person, setPerson] = useState({
    name: "Adarsh",
    age: 23,
    hobby: "Singing",
  });

  function setNextPerson() {
    setPerson({ ...person, name: "susan" });
  }
  return (
    <>
      <div>
        <h1>{person.name}</h1>
        <h1>{person.age}</h1>
        <h1>{person.hobby}</h1>
        <button onClick={setNextPerson}>Show Next</button>
      </div>
    </>
  );
};

export const Final = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const people = peopleClassification;

  function handleNextPerson() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % people.length);
  }

  return (
    <>
      <div key={people[currentIndex].id}>
        <h1>{people[currentIndex].name}</h1>
        <h1>{people[currentIndex].age}</h1>
        <h1>{people[currentIndex].hobby}</h1>
        <button onClick={handleNextPerson}>show Next</button>
      </div>
    </>
  );
};

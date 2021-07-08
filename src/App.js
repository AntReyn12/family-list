import React from "react";
import "./App.css";
import Family from "./Family";

const familyInfo = [
  {
    firstName: "Michele",
    age: "50",
    relation: "mother",
    familyKey: "1",
  },
  {
    firstName: "Mike",
    age: "50",
    relation: "father",
    familyKey: "2",
  },
  {
    firstName: "Michael",
    age: "28",
    relation: "brother",
    familyKey: "3",
  },
  {
    firstName: "Nicole",
    age: "22",
    relation: "sister",
    familyKey: "4",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>List of my family members:</h1>
        {familyInfo.map((family) => {
          /* USED SPREAD BELOW 
          const { firstName, age, relation, familyKey } = family; */
          return (
            <Family
              key={family.familyKey}
              {...family}
              /* key={familyKey}
              firstName={firstName}
              age={age}
              relation={relation} */
            />
          );
        })}
      </header>
    </div>
  );
}

export default App;

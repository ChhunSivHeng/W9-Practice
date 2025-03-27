import React from "react";
import StuffForm from "./components/StuffForm";
import StuffCard from "./components/StuffCard";

const INITIAL_STUFFS = [
  {
    name: "Banana",
    price: 54.5,
  },
  {
    name: "Computer",
    price: 100.5,
  },
  {
    name: "Table",
    price: 60,
  },
];

export default function App() {
  const [stuffs, setStuffs] = React.useState(INITIAL_STUFFS);

  const addStuff = (name, price) => {
    const newStuff = { name, price: parseFloat(price) };
    console.log(`A new object named ${newStuff.name}, price ${newStuff.price}$ will be added to the list`);
    setStuffs((prevstuff) => [...prevstuff, newStuff]); 
  };

  return (
    <>
      <header>
        <h1>My Stuff</h1>
      </header>

      <StuffForm addStuff={addStuff} />

      <div className="stuff-list">
        {stuffs.map((stuff, index) => (
          <StuffCard key={index} name={stuff.name} price={stuff.price} />
        ))}
      </div>
    </>
  );
}

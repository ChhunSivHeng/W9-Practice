import React, { useState } from "react";

export default function StuffForm({ addStuff }) {
  const [name, setname] = useState('');
  const [price, setprice] = useState('');

  const handleNameChange = (e) => {
    setname(e.target.value);
  };

  const handlePriceChange = (e) => {
    setprice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    addStuff(name, price);
    setname(""); 
    setprice(""); 
  };

  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input
        type="text"
        placeholder="Banana"
        value={name}
        onChange={handleNameChange}
      />

      <p>Stuff price</p>
      <input
        type="number"
        placeholder="15"
        value={price}
        onChange={handlePriceChange}
      />

      <button type="submit">Add Stuff</button>
    </form>
  );
}

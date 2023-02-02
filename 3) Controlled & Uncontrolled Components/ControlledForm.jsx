import React, { useState, useEffect } from "react";

export const ControlledForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [hairColor, setHairColor] = useState("");

  return (
    <form>
      <input
        name='name'
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name='age'
        type='number'
        placeholder='Age'
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <input
        name='hairColor'
        type='text'
        placeholder='Hair Color'
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

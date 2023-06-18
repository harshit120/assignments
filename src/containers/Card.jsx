import React, { useState } from "react";
import Spinner from "./Spinner";
import CreateCars from "./CreateCars";

const Card = (props) => {
  const [value, setvalue] = useState("");
  const [abc, setabc] = useState(null);
  const [loading, setloading] = useState(true);
  var ans = props.api;

  async function findd() {
    setloading(true);
    const answer = await ans.find((elemet) => elemet.id === value);
    setabc(answer);
    if (answer === undefined) {
      alert("plese check the spelling");
      setloading(true);
    } else {
      setloading(false);
    }
  }

  return (
    <div>
        <p>write the name of coins you want to search</p>
      <input
        type="text"
        name=""
        id=""
        onChange={(event) => {
          setvalue(event.target.value);
        }}
      />
      <button onClick={findd}>Search</button>
      {loading ? <Spinner /> : <CreateCars abc={abc} />}
    </div>
  );
};

export default Card;

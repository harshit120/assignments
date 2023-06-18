import React from "react";

const CreateCars = (props) => {

  
  const makecard = props.abc;
  return (
    <div >
        <div className="">
        
      <p className="text-red-600">{makecard.id}</p>
      <p>
        <img src={makecard.icon} alt="" />
      </p>
      <p>{makecard.name}</p>
      </div>
      <div>

     
      <p>{makecard.symbol}</p>
      <p>{makecard.rank}</p>
      <p>{makecard.price}</p>
      <p>{makecard.priceBtc}</p>
      <p>{makecard.volume}</p>
      <p>{makecard.marketCap}</p>
    </div>
    </div>
  );
};

export default CreateCars;

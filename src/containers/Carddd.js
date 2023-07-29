import React, { useState } from "react";
import "./style.css";
//import { subjects } from "./data";
import { TableRow } from "./TableRow";
import { classes } from "./Data2";
const Carddd = () => {
  const cricletick = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M11.2 21L4.2 14L6.174 12.012L11.2 17.038L21.826 6.412L23.8 8.4M14 0C12.1615 0 10.341 0.362121 8.64243 1.06569C6.94387 1.76925 5.40053 2.80048 4.1005 4.1005C1.475 6.72601 0 10.287 0 14C0 17.713 1.475 21.274 4.1005 23.8995C5.40053 25.1995 6.94387 26.2307 8.64243 26.9343C10.341 27.6379 12.1615 28 14 28C17.713 28 21.274 26.525 23.8995 23.8995C26.525 21.274 28 17.713 28 14C28 12.1615 27.6379 10.341 26.9343 8.64243C26.2307 6.94387 25.1995 5.40053 23.8995 4.1005C22.5995 2.80048 21.0561 1.76925 19.3576 1.06569C17.659 0.362121 15.8385 0 14 0Z"
        fill="#74D46B"
        fill-opacity="0.819608"
      />
    </svg>
  );
  const downArrow = (index) => (
    <svg
      className={`class${index + 1}`}
      id="ssv"
      onClick={fun}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.29289 11.3193C7.68342 10.8936 8.31658 10.8936 8.70711 11.3193L15.2929 18.5C15.6834 18.9258 16.3166 18.9258 16.7071 18.5L23.2929 11.3194C23.6834 10.8936 24.3166 10.8936 24.7071 11.3194C25.0976 11.7451 25.0976 12.4355 24.7071 12.8613L18.1213 20.042C16.9497 21.3193 15.0503 21.3194 13.8787 20.042L7.29289 12.8613C6.90237 12.4355 6.90237 11.7451 7.29289 11.3193Z"
        fill="#1C1C1C"
      />
    </svg>
  );
  const [close, setClose] = useState([""]);
  const fun = (event) => {
    console.log(event.target);
    let a = event.target.getAttribute("class");

    const updatedClose = close.includes(a)
      ? close.filter((item) => item !== a)
      : close.concat(a);
    setClose(updatedClose);
  };
  const mystyle = {
    width: "1200px",
    heigth: "407",
  };

  return (
    <table style={mystyle}>
      {classes.map((subject, index) => (
        <div className="card">
          <thead className="">
            <tr className="rowtr">
              <th></th>
              <th className="rowthead">class{index + 1}</th>
              <th className="rowthead1">{cricletick}</th>
              <th className="rowthead1">{cricletick}</th>
              <th className="rowthead1">{cricletick}</th>
              <th className="rowthead1">{cricletick}</th>
              <th className="rowstatus"> Decleared</th>
              <th className="rowarrow"> {downArrow(index)}</th>
            </tr>
          </thead>

          {close.includes(`class${index + 1}`) ? (
            <tbody className="rowtbody">
              <p className="rowp">Subject Names</p>
              {Object.values(subject).map((subject, index) => (
                <TableRow key={index} subject={subject} />
              ))}
              <tr className="rowdownload0">
                <td className="rowdownload ">Total Marks</td>
                <td className="rowdownload1 ">download1</td>

                <td className="rowdownload1 ">download1</td>
                <td className="rowdownload1">download1</td>
                <td className=" rowdownload2">download1</td>
                {/* <button onClick={increse }>hello</button> */}
              </tr>
            </tbody>
          ) : (
            <div></div>
          )}
        </div>
      ))}
    </table>
  );
};

export default React.memo(Carddd);

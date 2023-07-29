import React, { useCallback, useState } from "react";
import "./style.css";
export const TableRow = React.memo(({ subject }) => {
  const [id, setid] = useState(0);
  const calculateStatus = useCallback(
    (subject) => {
      const allTrue = Object.values(subject).every(
        (value) => value === "True" || value === "true"
      );
      return allTrue === true ? "Submitted" : "Not Submittted";
    },
    [subject]
  );

  const fun = (division) => {
    console.log("hell");
    return division === "True" ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="16"
        viewBox="0 0 29 16"
        fill="none"
      >
        <path
          d="M0 9.33532L6.97247 16L8.73118 14.307L1.77118 7.65425M27.2288 0L14.0323 12.6259L8.84344 7.65425L7.05979 9.33532L14.0323 16L29 1.693M21.9402 1.693L20.1815 0L12.2611 7.57079L14.0323 9.25186L21.9402 1.693Z"
          fill="#007AFF"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="16"
        viewBox="0 0 29 16"
        fill="none"
      >
        <path
          d="M0 9.33532L6.97247 16L8.73118 14.307L1.77118 7.65425M27.2288 0L14.0323 12.6259L8.84344 7.65425L7.05979 9.33532L14.0323 16L29 1.693M21.9402 1.693L20.1815 0L12.2611 7.57079L14.0323 9.25186L21.9402 1.693Z"
          fill="#5D5D5D"
        />
      </svg>
    );
  };

  const status = calculateStatus(subject.division);

  return (
    <tr className="row-table-tr">
      <td className=" row-table-tr1">{subject.name}</td>
      <td className=" row-table-tr2">{fun(subject.division.division1)}</td>

      <td className=" row-table-tr2">{fun(subject.division.division2)}</td>
      <td className=" row-table-tr2">{fun(subject.division.division3)}</td>
      <td className=" row-table-tr3">{fun(subject.division.division4)}</td>
      {/* <button onClick={increse }>hello</button> */}
      <td className="row-table-tr4">{status}</td>
    </tr>
  );
});

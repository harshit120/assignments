import React,{useCallback,useState} from "react";
import './style.css'

export const TableRow = React.memo(({ subject }) => {
  const [id ,setid]=useState(0);
  const calculateStatus = useCallback((subject) => {

    const allTrue = Object.values(subject).every((value) => value === "True" || value === "true");
    return allTrue === true ? "Submitted" : "Not Submittted";
  }, [subject]);

    const status = calculateStatus(subject.division);

    return (
      <tr className=" row5 ">
        <th className="">{subject.name}</th>
        <th className="">{subject.division.division1}</th>
        <th className="">{subject.division.division2}</th>
        <th className="">{subject.division.division3}</th>
        <th className="">{subject.division.division4}</th>
        {/* <button onClick={increse }>hello</button> */}
        <th className=" row6">{status}</th>
      </tr>
    );
  });
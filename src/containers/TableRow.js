import React,{useCallback} from "react";

export const TableRow = React.memo(({ subjects }) => {
  const calculateStatus = useCallback((subject) => {
    // Check if all divisions are "True"
   // console.log(subject);
    const allTrue = Object.values(subject).every((value) => value === "True" || value === "true");

     let a = 0;
    // for (let i = 1; i <= 4; i++) {
    //   let b = "division" + i;
    //   if (subject[b] === "True" || subject[b] === "true") {
    //     a++;
    //   }
    // }
    return allTrue === true ? "Submitted" : "Not Submittted";
  }, []);
    const status = calculateStatus(subjects.division);

    return (
      <tr>
        <td>{subjects.name}</td>
        <td>{subjects.division.division1}</td>
        <td>{subjects.division.division2}</td>
        <td>{subjects.division.division3}</td>
        <td>{subjects.division.division4}</td>
        <td>{status}</td>
      </tr>
    );
  });
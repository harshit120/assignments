import React,{useCallback,useState} from "react";

export const TableRow = React.memo(({ subject }) => {
  const [id ,setid]=useState(0);
  const calculateStatus = useCallback((subject) => {
    // Check if all divisions are "True"
    //console.log("hello");
    const allTrue = Object.values(subject).every((value) => value === "True" || value === "true");

    // let a = 0;
    // for (let i = 1; i <= 4; i++) {
    //   let b = "division" + i;
    //   if (subject[b] === "True" || subject[b] === "true") {
    //     a++;
    //   }
    // }
    return allTrue === true ? "Submitted" : "Not Submittted";
  }, [subject]);
// const increse =()=>{
// setid(1);
// console.log("hii")
// }

    const status = calculateStatus(subject.division);

    return (
      <tr>
        <td>{subject.name}</td>
        <td>{subject.division.division1}</td>
        <td>{subject.division.division2}</td>
        <td>{subject.division.division3}</td>
        <td>{subject.division.division4}</td>
        {/* <button onClick={increse }>hello</button> */}
        <td>{status}</td>
      </tr>
    );
  });
import React, { useCallback } from "react";

import { subjects } from "./data";
import { TableRow } from "./TableRow";

const Carddd = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Subject</th>
         
          <th>Division 1</th>
          <th>Division 2</th>
          <th>Division 3</th>
          <th>Division 4</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {subjectss.map((subjects, index) => (
          <TableRow key={index} subject={subjects} />
        ))}
      </tbody>
    </table>
  );
};

export default React.memo(Carddd);

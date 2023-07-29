import React, { useCallback ,useState,} from "react";
import './style.css'
//import { subjects } from "./data";
import { TableRow } from "./TableRow";
import { classes } from "./Data2";
const Carddd = () => {
  const downArrow= <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M7.29289 11.3193C7.68342 10.8936 8.31658 10.8936 8.70711 11.3193L15.2929 18.5C15.6834 18.9258 16.3166 18.9258 16.7071 18.5L23.2929 11.3194C23.6834 10.8936 24.3166 10.8936 24.7071 11.3194C25.0976 11.7451 25.0976 12.4355 24.7071 12.8613L18.1213 20.042C16.9497 21.3193 15.0503 21.3194 13.8787 20.042L7.29289 12.8613C6.90237 12.4355 6.90237 11.7451 7.29289 11.3193Z' fill='#1C1C1C'/></svg>
  const [close,setClose]=useState([""]);
  const fun=(event)=>{
    console.log(event.target);
    let a=event.target.getAttribute("class");
    

    
    const updatedClose = close.includes(a)
      ? close.filter((item) => item !== a)
      : close.concat(a);
    setClose(updatedClose);
  }
  
  return (
    
    <table>
     
       
        {classes.map((subject, index) => (
          <div className="card">
          <thead className="row">
           <tr className="row">
          <th>class{index+1}</th>
          <th>Division 1</th>
          <th>Division 2</th>
          <th>Division 3</th>
          <th>Division 4</th>
          <th>Status <button className={`class${index+1}`}  onClick={fun}>click</button> </th>
         
        
        </tr>
        </thead>
        {
  close.includes( `class${index+1}`)?(<tbody>
        {Object.values(subject).map((subject, index) => (

          <TableRow key={index} subject={subject}  />
        ))}
      </tbody>):(<div></div>)
}
        </div>
        ))}
         
         
    

      
    </table>
  );
};

export default React.memo(Carddd);

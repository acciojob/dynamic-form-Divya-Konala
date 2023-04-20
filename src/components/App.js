
import React, { useState } from "react";
import './../styles/App.css';
import Task from "./Task";

const App = () => {
  const [fields,setFields]=useState([]);
  const handleClick=()=>{
    setFields([...fields,{value:""}]);
  }
  const handleDelete=(index)=>{
    let arr=[...fields];
    arr.splice(index,1);
    setFields(arr);
  }
  const handleInputChange=(value,id)=>{
    let arr=[...fields];
    arr.map((item,index)=>{
      if(index==id) item.value=value;
    })
    setFields(arr);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        {(fields.length>0)?<>
          {fields.map((field,index)=>{
            return <Task key={index} index={index} field={field} handleDelete={handleDelete} handleInputChange={handleInputChange}/>
          })
        }
          </>
          :<>No fields in the form<br/></>
        }
        <button onClick={handleClick}>Add Field</button>
    </div>
  )
}

export default App

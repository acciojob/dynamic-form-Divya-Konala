import React, { useState } from 'react'

const Task = ({field,index,handleDelete,handleInputChange}) => {
  return (
    <div className='task'>
        <input  onChange={(e)=>handleInputChange(e.target.value,index)} value={field.value}/>
        <button onClick={()=>handleDelete(index)}>Delete</button>
        <br/>
    </div>
  )
}

export default Task
import React from 'react'

import { useState } from 'react'

function AddTask({addTask}) {
    const [value,setValue]=useState("")

    const addItems =()=>{
       addTask(value)
       setValue("")
    }
    // const handleKeyPress=()=>{
    //     if(Event.key === 'Enter'){
    //         addItems()
    //     }
    // }
 
    return (<>
        <div className='input-container'>
            <input
             type="text"
             className='input-box' 
             placeholder='🖊️ Add a new task'
             value={value}
             onChange={(e)=>{setValue(e.target.value)}}/>
            <button onClick={addItems} onKeyDown={(event)=>{if(event.key === 'Enter'){console.log("clicked")}}} className='add-btn'>ADD</button>
        </div>
    </>
    )
}

export default AddTask

import { useState } from "react"
import Addtodoform from "./Addtodoform"
import Todolist from "./Todolist"



function TodoContainer()
{

    const [ActivityArr, SetactivityArr] = useState([
        {
            id:1,
            activity: "Wakeup"
        
        },
        {
            id:2,
            activity: "workout"
        },
        {
            id:3,
            activity:"Meditat"
        }
    ])
    return(
        <>
        <div className="flex gap-5 flex-wrap">
            <Addtodoform ActivityArr={ActivityArr} SetactivityArr={SetactivityArr}></Addtodoform>
            <Todolist ActivityArr={ActivityArr} SetactivityArr={SetactivityArr}></Todolist>
        </div>
        
         
          </>
     
    )
}

export default TodoContainer
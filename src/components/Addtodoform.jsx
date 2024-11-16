import { useState } from "react"

function Addtodoform(props)
{
    const ActivityArr = props.ActivityArr
    const SetactivityArr = props.SetactivityArr
    const [Newactivity, SetNewactivity] = useState("")

   function handlechange(evt){
          SetNewactivity(evt.target.value)
    }

    function Addactivity(){
          SetactivityArr([...ActivityArr,{id:ActivityArr.length+1, activity:Newactivity}])
    }
    
    return(<div>
        <h2 className="text-2xl font-medium">Manage Activities</h2>
        <input value={Newactivity} onChange={handlechange} type="text" className="my-2 p-2 border border-black bg-transparent" placeholder="Add your Activity" />
        <button onClick={Addactivity} className="border border-black p-2 bg-black text-white">Add</button>
        </div>)
}

export default Addtodoform
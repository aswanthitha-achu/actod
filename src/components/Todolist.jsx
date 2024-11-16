
import Todoitem from "./Todoitem"

function Todolist(props)
{
 const ActivityArr = props.ActivityArr
 const SetactivityArr = props.SetactivityArr
    
    return( <div style={{backgroundColor:"#948B9E"}} className="border rounded-md p-3 flex-grow">
        <h2 className="text-2xl font-medium">Today's Activity</h2>
       {ActivityArr.length===0? <p>You haven't added anything yet!</p> : ""} 
        {
            ActivityArr.map(function(item, index){
                return <Todoitem id={item.id} activity = {item.activity} index = {index} ActivityArr = {ActivityArr} setactivityArr = {SetactivityArr}></Todoitem>
            })
        }
      </div>
      )
}

export default Todolist
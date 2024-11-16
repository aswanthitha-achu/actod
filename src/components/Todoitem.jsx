

function Todoitem(props)
{
    const activityArr = props.ActivityArr
    const setactivity = props.setactivityArr
    const id = props.id
    
function handledelete(deleteid)
{
    var tempar = activityArr.filter(function(item){
        if(item.id===deleteid){
            return false
        }
        else {
            return true
        }
    })
    setactivity(tempar)
}

    return(<div className="flex justify-between"><p>{props.index+1}.{props.activity}</p>
        <button className="text-red-800" onClick={function(){handledelete(props.id)} }> Delete </button>
        </div>
    )
}

export default Todoitem
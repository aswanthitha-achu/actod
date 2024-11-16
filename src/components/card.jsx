function Card(props)
{
    return(
        <div style={{backgroundColor:props.bgcolor}} className="px-10 py-10 border rounded-md mx-5 my-5 flex-grow" >
        <h3 className="text-3xl font-medium">{props.title}</h3>
        <p className="font-bold">{props.subtitle}</p>
      </div>
      
    )
}

export default Card

import { Link } from "react-router-dom"
import { useState } from "react"


function Signup(props)
{

    const user = props.user
    const setuser = props.setuser

    const[eusername, seteusername] = useState()
 const [epassword, setepassword] = useState()

 

 function handleeusername(evt){
 seteusername(evt.target.value)
 }
 function handleepassword(evt){
setepassword(evt.target.value)
 }

 function adduser ()
 {
    setuser([...user,{username:eusername, password:epassword}])
 }


    return(
     <div className="bg-black p-10">
        <div className="bg-white p-10 border rounded-md">

            <h1 className="font-medium text-3xl">Hey, Hi</h1>
             <p>Sign up here</p>
<div className="flex flex-col gap-2 my-2">
    <input type="text"  className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="username" onChange={handleeusername}/>
</div>
<div className="flex flex-col gap-2 my-2">
    <input type="text"  className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="password" onChange={handleepassword}/>
</div>
<div className="flex flex-col gap-2 my-2">
    <input type="text"  className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="confirm password"/>

    <button className="bg-orange-400 w-24 p-1 rounded-md" onClick={adduser}> Sign up</button>

    <p>Already have an Account? <Link to={"/"} className="underline">Login</Link> </p>
</div>
        </div>
     </div>
    )
}

export default Signup
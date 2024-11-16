

import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


function Login(props)
{
    const navigate = useNavigate()
 const[eusername, seteusername] = useState()
 const [epassword, setepassword] = useState()

 const [ruser, setruser] = useState(true)
 const user = props.user
 

 function handleeusername(evt){
 seteusername(evt.target.value)
 }
 function handleepassword(evt){
setepassword(evt.target.value)
 }


    

    function checkuser(){
        var userfound = false
user.forEach(function(item)
{if(item.username === eusername && item.password === epassword)
{
    console.log("login successful")
    userfound = true
    navigate("/landing", {state:{user:eusername}})
}

})

if(userfound===false)
{
    console.log("login failed")
}


    }


    
    return(
        <div className="bg-black p-10">
        <div className="bg-white p-10 border rounded-md">

            <h1 className="font-medium text-3xl">Hey, Hi</h1>
            {ruser?<p>I help you manage you activity after you login</p>: "please sign up first"}
             
<div className="flex flex-col gap-2 my-2">
    <input type="text"  className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="username" onChange={handleeusername}/>
</div>
<div className="flex flex-col gap-2 my-2">
    <input type="text"  className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="password" onChange={handleepassword}/>
</div>
<div className="flex flex-col gap-2 my-2">
   

    <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkuser}> Login</button>

    <p>Don't have an Account? <Link to={"/signup"} className="underline">Sign up</Link> </p>
</div>
        </div>
     </div>
    )
}

export default Login
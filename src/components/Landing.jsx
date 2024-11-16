import Header from "../components/header";
import Card from "../components/card";
import TodoContainer from "../components/todocontainer";

import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"



function Landing() {
    const data = useLocation();
    const navigate = useNavigate();

    if (!data.state) {
        navigate("/");
        return null; // Prevent rendering
    }

    const username = data.state.user;
  return(
    <div className="bg-black p-16">
        <div className=" bg-[#F7F7F7] border rounded-md p-10">
          <Header username={username}></Header>

          <div className="flex  gap-6 flex-wrap">
           
           <Card bgcolor={"#CB93DD"} title={"23"} subtitle={"Chennai"}></Card>
           <Card bgcolor={"#ED974A"} title={"20 October"} subtitle={"14:52:43"}></Card>
           <Card bgcolor={"#C4E757"} title={"Created using"} subtitle={"React"}></Card>
              </div>
              
                <TodoContainer></TodoContainer>
              
              

           
            </div>
          </div>
        
        
      
  )
}

export default Landing
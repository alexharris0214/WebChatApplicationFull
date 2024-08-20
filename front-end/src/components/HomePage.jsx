import React, { useContext, useEffect} from "react";
import { NavBar } from "./NavBar";
import { ConversationProvider } from "../providers/ConversationProvider";
import { MainWindow } from "./MainWindow";
import { SideChatWindow } from "./SideChatWindow";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate()
  const {userId} = useContext(AuthContext)
  
  useEffect(() => {
    if(userId == ""){
        navigate("/login")
    }
  }, [])

  return (
    <>
      <NavBar />
      <div className="d-flex" style={{backgroundColor:"lightgrey"}}>
        <ConversationProvider>
          <SideChatWindow />
          <MainWindow />
        </ConversationProvider>
      </div>
    </>
  );
};

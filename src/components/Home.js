import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../contexts/UserAuthContext";

const Home = () => {
 
    const {user, logOut} = useUserAuth()
    console.log(user)

    const handleLogOut =async ()=>{
        try{
            await logOut()
        }catch(err){
            console.log(err.message)
        }
    }
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello, {user && user.displayName} ({user && user.email})
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogOut}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;
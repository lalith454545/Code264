import React, { useState } from "react";
import { v4 as uv4 } from "uuid";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";

 const Home = () => {
    const [roomId, setRoomId]=useState('');
    const [username, setUsername]=useState();
    const navigate=useNavigate();
    const createroom = (e) => {
        e.preventDefault();
        const id = uv4();
        setRoomId(id);
        toast.success('Created room ra howle')
    }

    const roomjoin=()=>{
        if(!roomId || !username){
            toast.error('edokati ivvale nuvvu');
            return;
        }

        navigate(`/editor/${roomId}`, {
            state:{
                username,
            }
        })

    }
    return ( 
        <div className="homewrap">
            <div className="formwrap">
                <img src="code264logo.png" alt="code264logo" className="logoimg"></img>
                <h4 className="LabelforInput">Paste Invitation </h4>
                <div className="Inputs2">
                    <input type="text" placeholder="Room ID" className="input" value={roomId} onChange={(e)=>setRoomId(e.target.value)}/>
                    <input type="text" placeholder="Your Name" className="input" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <button className="buttons Joinbutton" onClick={roomjoin}>Join</button>
                    <span className="CreateRoom">If you have no invitation, then create one &nbsp; 
                        <a href="" className="createnewroom" onClick={createroom}>new room</a>
                    </span>
                </div>
            </div>
            <footer>
                Built with no interest. Only time pass 😎 by <a href="https://www.instagram.com/mlsnandan/" target="blank">this boy</a>
            </footer>
        </div>
     );
 }
  
 export default Home;
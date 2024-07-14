import React, { useEffect, useRef, useState } from "react";
import Client from "../Components/Clients";
// import Editor from "../Components/Editor";
import {initSocket} from "../Socket";
import ACTIONS from "../Actions";

const Editorpage = () => {
    const socketRef= useRef(null);
    useEffect(()=>{
        const init=async()=>{
            socketRef.current= await initSocket();
            socketRef.current.emit(ACTIONS.JOIN);
        };
        init();
    },[])

    const [clients, setClients]= useState([
        {socketid:1, username:'Lalith S'},
        {socketid:2, username:'Sudheep B'},
        {socketid:3, username:'Yesh M'},
        {socketid:4, username:'Banne Man'},
    ]);
    return ( 
        <div className="mainwrap">
            <div className="asideeditor">
                <div className="asideinner">
                    <div className="logo">
                        <img className="editorlogo" src="/code264logo.png" alt="logocode264"></img>
                    </div>
                    <h3>Connected</h3>
                    <div className="userlist">
                        {
                            clients.map((client)=>(
                                <Client key={client.socketid} username={client.username}/>
                            ))
                        }
                    </div>
                </div>
                <button className="buttons copybtn">Copy Room ID</button>
                <button className="buttons leavebtn">Leave</button>
            </div>
            <div className="editor"> 
                {/* <Editor/>  */}
            </div>
        </div>
     );
}
 
export default Editorpage;
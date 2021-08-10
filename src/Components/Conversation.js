import Headers from './Headers';
import './CSS/Conversation.css';
import def_profile from './Images/default_profile.png';
import {useEffect, useState} from 'react';
import axios from 'axios';
function Message(props){
    return(
        <div className={props.class + " message"}>
            <div className="message-items pfp">
                <img src={def_profile} alt=""/>
            </div>
            <div className="message-items text">
                {props.text}
            </div> 
        </div>
    )
}
function sendReply(reply){
    axios.post("http://localhost:4000/replysend",
    {"reply":reply}).then(res =>{console.log(res)}).catch(err =>{console.log(err)});
}
function Conversation(props){
    console.log("hello");
    const [messages, setMesages] = useState([]);
    const [reply, setReply] = useState('');
    const [replyform, formChange] = useState('');
    useEffect(()=>{
        async function getmsgs(){
            console.log(props.convo)
            await axios.post("https://richpanel-webhook-adityan.herokuapp.com/get_convo",{"pageId": "102115728846178", "sender":props.convo.sender})
                .then(result =>{
                    let count = 0;
                    let msgs = []
                    result.data.forEach(message => {
                        msgs.push(<Message key={count++} text ={message.msg.text} class="incoming"/>);
                    });
                    setMesages(msgs);
                })
                .catch(err =>{
                    console.log(err);
                })
            }
        if(props.active !== -1)
        getmsgs();
        let incoming = document.getElementsByClassName("incoming");
        if(incoming.length !== 0){
            let last_incoming = incoming[incoming.length - 1];
            last_incoming.getElementsByClassName("pfp")[0].getElementsByTagName("img")[0].style.display = "block";
        }
        let outgoing = document.getElementsByClassName("outgoing");
        if(outgoing.length !==0){
            let last_outgoing = outgoing[outgoing.length - 1];
            last_outgoing.getElementsByClassName("pfp")[0].getElementsByTagName("img")[0].style.display = "block";
        }
    },[props])
    return(
        <div className="Conversation">
            <Headers content = {["Name of the user"]}/>
            <div className="messages-space">
                {messages}
            </div>
            <div className="message-form">
                <input className="message-form-element" type="text" name="send-msg" placeholder="Enter your Message here" onChange={(e) => {formChange(e.target.value)}}/>
                <button className="message-form-element" type="button" onClick={() => {setReply(replyform);sendReply(reply, props.convo.sender)}}>Send</button>
            </div>
        </div>
    )
}

export default Conversation;
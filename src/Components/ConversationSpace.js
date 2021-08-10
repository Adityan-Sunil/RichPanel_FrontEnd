import axios from 'axios';
import { useEffect, useState } from 'react';
import Conversation from './Conversation';
import ConversationList from './ConversationList';
import ConversationUser from './ConversationUser';
import './CSS/ConversationSpace.css'
function ConversationSpace(){
    const [list, getList] = useState([]);
    const [active, switchConvo] = useState(0);
    useEffect(()=>{
        async function getmsgs(){
            await axios.post("https://richpanel-webhook-adityan.herokuapp.com/get_convo_list",{"pageId": "102115728846178"})
                .then(result =>{
                    let msgs = []
                    result.data.forEach(message => {
                        msgs.push(message);
                    });
                    getList(msgs);
                    console.log(msgs);
                })
                .catch(err =>{
                    console.log(err);
                })
            }
        getmsgs();
        },[])
    return(
        <div className="ConversationSpace">{( list.length !== 0 ? <>
            <ConversationList list = {list} click = {switchConvo}/>
            <Conversation convo = {list[active]} index = {active}/>
            <ConversationUser uid = {list[active]} index = {active}/> </> :"")}
        </div>
    )
}

export default ConversationSpace;
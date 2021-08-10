import Header from './Headers';
import './CSS/ConversationList.css';

function ConversationTag(props){
    return(
        <div className="conv-list-item" onClick={() => props.click(props.key)}>
            <div className="conv-header">
                <div className="conv-header-item">Icon</div>
                <div className="conv-header-item">Name</div>
                <div className="conv-header-item">sent time</div>
            </div>
            {/* <div className="convo-latest-msg">
                {props.text}
            </div> */}
        </div>
    )
    
}
function ConversationList(props){
    let tags = [];
    var count = 0;
    props.list.forEach(convo => {
        tags.push(<ConversationTag key={count++} sid={convo.sender} click={props.click}/>)
    });
    return(
        <div className="ConversationList">
            <Header content = {["Conversation", {"icon":"reload"}]} />
            {tags}
        </div>
    )
}

export default ConversationList;
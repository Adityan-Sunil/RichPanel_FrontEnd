import './CSS/ConversationUser.css'
import Headers from './Headers';
import def_profile from './Images/default_profile.png';
function ConversationUser(){
    return(
        <div className="ConversationUser">
            <div className="user-profile user">
                <div className="user-pfp">
                    <div className="pfp profile-dets">
                        <img src={def_profile} alt="Logo"/>
                    </div>
                    <div className="profile-name profile-dets">
                        Name here
                    </div>
                    <div className="status profile-dets">
                        Offline
                    </div>
                    <div className="contact profile-dets">
                        <button type="button">Call</button>
                        <button type="button">Profile</button>
                    </div>
                </div>
            </div>
            <div className="user-dets user">
                <Headers title={["Customer Details"]}/>
                <div className="name firstname">
                    First Name
                </div>
                <div className="name lastname">
                    Last Name
                </div>
            </div>
        </div>
    )
}

export default ConversationUser;
import { useState } from 'react';
import './CSS/App.css';
import MenuBar from './MenuBar';
import ConversationSpace from './ConversationSpace'
import FacebookLogin from 'react-facebook-login'

function componentClicked(){
  console.log("clicked");
}
function App() {
  const [login , changeLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPic] = useState('');
  // const [pageConvo, setPageConv] = useState('');
  return(
    <div className="App">   
    {(!login ? <FacebookLogin
        appId="6138773676163381"
        autoLoad={true}
        fields="name,email,picture"
        scope="pages_show_list, pages_read_user_content, pages_messaging"
        onClick={componentClicked}
        callback={(response) => {
            if(response.accessToken){
              changeLogin(true);
              setData(response);
              setPic(response.picture.data.url)              
            }
        }} /> 
        :<> <MenuBar pfp = {picture}/> <ConversationSpace data={data}/> </>) }
    </div>
  )
}

export default App;

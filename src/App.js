import logo from './logo.svg';
import './App.css';
import Body from './Components/Body';
import Mbody from './Components/Mbody';
import Speednews from './Components/Speednews';

function App() {
  return (
    <div className="App">
      <div className="mbody">
        <div className="body">
            <div className="mnav">

                <div className="navbtn" id="home">HOME</div>
                <div className="navbtn">ABOUT</div>
                <div className="navbtn">CONTENT</div>
                <div className="navbtn" id="cp">CONTACT</div>
                
            </div>

            <div className="mlogo">

                <div className="logo">
                    <div className="newspro"><i>NEWS PRO</i></div>
                    <div className="newstext">All in one news site</div>
                </div>

                <div className="mjoin">

                    <div className="join">
                        Join News Pro
                    </div>
                </div>

            </div>

            <div className="mmnav">
                 <div className="mnav" id="mnav">
                 <div className="navbtn">SPEED NEWS</div> 
                <div className="navbtn">ENTERTAINMENT</div>
                <div className="navbtn">MUSIC</div>
                <div className="navbtn">POLITICS</div>
                <div className="navbtn">TECH</div>
                <div className="navbtn">SPORTS</div>


         </div></div>
        

        <Mbody/>
       
     </div></div>
    </div>
  );
}

export default App;

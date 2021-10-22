import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile'

function App() {
  return (
    <div className="App">
      <Profile fullName ='Apata Henrietta' bio='A competent freelancer and hustler' profession='Student' >
      <img style = {{width: '200px',paddingBottom:'20px'}}src='ProfilePicture.jpg' alt='Profile picture'  />
      </Profile>
    </div>
  );
}

export default App;

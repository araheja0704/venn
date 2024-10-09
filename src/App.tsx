import './css/App.css';
import BubbleBackground from './js/components/Bubbles';
import Logo from './js/components/Logo';
import Button from './js/components/Button';
import InstagramIcon from './js/components/InstagramIcon';

function Navbar() {
  return (
      <div className="navbar">
          <div className="navbar-left">
          <span className="navbar-title">venn</span>
          </div>
          <div className="navbar-right">
              <InstagramIcon />
          </div>
      </div>
  );
}

function App() {
    return (
      <>
        <BubbleBackground />
        <Navbar /> 
        <div className="wrapper">
        <div className="main-content">
          <Logo />
          <br />
          <br />
          <br />
          <a href = "https://tally.so/r/3lWGqV">
          <Button />
          </a>
        </div>
        </div>
      </>
    );
  }
  
  export default App;


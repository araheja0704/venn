import './css/App.css';
import BubbleBackground from './js/components/Bubbles';
import Logo from './js/components/Logo';
import Button from './js/components/Button';



function App() {
    return (
      <>
        <BubbleBackground />
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


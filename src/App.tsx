import './App.css';

function App() {
  return (
    <>
      <header className="header">
        <nav className="nav-links">
          <a href="mailto:venn-michigan@umich.edu">Contact Us</a>
        </nav>
      </header>
      <main className="main-content">
        <h1 className="brand-name">Venn</h1>
        <br/>
        <br/>
        <button className="primary-button" onClick={() => window.location.href = 'https://tally.so/r/3lWGqV'}>
          Join our Waitlist
        </button>
      </main>
      <footer className="footer">
        <p>© 2024 Venn</p>

      </footer>
    </>
  );
}

export default App;

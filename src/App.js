import logo from './logo.svg';
import './App.css';

function App() {
  const handleNameChange = () => {
    const names = ['Karol', 'Petar', 'Michael'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* We can use expression like arrow function to show some results */}
          Hello {handleNameChange()}!
        </p>
      </header>
    </div>
  );
}

export default App;

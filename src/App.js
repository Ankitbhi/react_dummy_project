import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/HomeScreen';
window.contextPath = "";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomeScreen />

      </header>
    </div>
  );
}

export default App;

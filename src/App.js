import logo from "./logo.svg";
import "./App.css";
import MovieCards2 from "./Movie.liste/Moviecards2";
import Barre from "./Movie.liste/Barre";
function App() {
  return (
    <div className="App">
      <div className="Full">
        <MovieCards2 className="carte" />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Movie from "./Components/Movie.js";

function App() {
  const movies = ["1", "2", "3"];
  return (
    <div>
      {movies.map((movie) => (
        <Movie />
      ))}
    </div>
  );
}

export default App;

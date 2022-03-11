import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/artists")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <div className="App">
      <p style={{ paddingBottom: "3rem" }}>Hello World</p>
      {typeof data.artists == "undefined" ? (
        <p> Loading ...</p>
      ) : (
        data.artists.map((artist, index) => <p key={index}>{artist.name}</p>)
      )}
    </div>
  );
}

export default App;

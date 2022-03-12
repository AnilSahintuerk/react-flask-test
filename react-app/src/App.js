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
      {typeof data == "undefined" ? (
        <p> Loading ...</p>
      ) : (
        data.map((data, index) => <p key={index}>{data.name}</p>)
      )}
    </div>
  );
}

export default App;

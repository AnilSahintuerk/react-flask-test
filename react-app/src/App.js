import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([{}]);

  const addArtistHandler = async (event) => {
    // event.preventDefault();
    const name = event.target.name.value;
    fetch("/artists", {
      method: "POST",
      body: JSON.stringify({ name: name }),
      headers: { "Content-Type": "application/json" },
    });
  };

  const deleteArtistHandler = async (event, artistId) => {
    // event.preventDefault();
    console.log(artistId);
    await fetch("/artists", {
      method: "DELETE",
      body: JSON.stringify({ id: artistId }),
      headers: { "Content-Type": "application/json" },
    });
  };

  useEffect(() => {
    fetch("/artists")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <p style={{ paddingBottom: "3rem" }}>Hello World</p>
      <form method="put" id="form1" onSubmit={addArtistHandler}>
        <label>Artist Name:</label>
        <input type="text" id="name" name="name" />
        <input type="submit" value="Submit" />
      </form>
      {typeof data == "undefined" ? (
        <p> Loading ...</p>
      ) : (
        data.map((data, index) => (
          <form
            method="delete"
            index={index}
            id="existingArtist"
            onSubmit={(event) => deleteArtistHandler(event, data.id)}
          >
            <span key={index}>{data.name}</span>
            <input index={index} type="submit" value="Delete" />
          </form>
        ))
      )}
    </div>
  );
}

export default App;

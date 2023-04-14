import { useState, useEffect } from "react";

function Joke() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    getJoke();
  }, []);

  function getJoke() {
    const URL =
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist&type=single";

    fetch(URL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setJoke(data.joke)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    
    <div className="box">
      <div className="joke-text">
        <h3>{joke}</h3>
      </div>
      <div className="joke-button">
        <button onClick={getJoke}>get a joke</button>
      </div>
    </div>

  );
}
export default Joke;
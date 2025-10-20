import { useState } from "react";
import APIForm from "./components/APIForm";
import Gallery from "./components/Gallery";
import "./App.css";

const ACCESS_KEY = "2d65eff8329f4ec7a30df6dd19589dd9";

function App() {

  const [inputs, setInputs] = useState({
    url: "",
    format: "",
    width: "",
    height: "",
    no_ads: "",
    no_cookie_banners: "",
  });

  const [currentImage, setCurrentImage] = useState(null);


  const [prevImages, setPrevImages] = useState([]);

  const submitForm = () => {
    let defaultValues = {
      format: "jpeg",
      no_ads: "true",
      no_cookie_banners: "true",
      width: "1920",
      height: "1080",
    };

    if (inputs.url === "" || inputs.url === " ") {
      alert("You forgot to submit a URL!");
    } else {
      const updatedInputs = { ...inputs };
      for (const [key, value] of Object.entries(inputs)) {
        if (value === "") {
          updatedInputs[key] = defaultValues[key];
        }
      }
      setInputs(updatedInputs);
      makeQuery(updatedInputs);
    }
  };


  const makeQuery = (inputs) => {
    let wait_until = "network_idle";
    let response_type = "json";
    let fail_on_status = "400%2C404%2C500-511";
    let url_starter = "https://";
    let fullURL = url_starter + inputs.url;

    let query = `https://api.apiflash.com/v1/urltoimage?access_key=${ACCESS_KEY}&url=${fullURL}&format=${inputs.format}&width=${inputs.width}&height=${inputs.height}&no_cookie_banners=${inputs.no_cookie_banners}&no_ads=${inputs.no_ads}&wait_until=${wait_until}&response_type=${response_type}&fail_on_status=${fail_on_status}`;

    callAPI(query).catch(console.error);
  };


  const callAPI = async (query) => {
    const response = await fetch(query);
    const json = await response.json();

    if (!json.url) {
      alert("Oops! Screenshot could not be taken. Check your URL.");
    } else {
      setCurrentImage(json.url);
      setPrevImages((images) => [...images, json.url]); // 👈 Add to gallery
      reset();
    }
  };

  const reset = () => {
    setInputs({
      url: "",
      format: "",
      width: "",
      height: "",
      no_ads: "",
      no_cookie_banners: "",
    });
  };

  return (
    <div className="App">
      <h1>Website Screenshot Generator</h1>

      <APIForm
        inputs={inputs}
        handleChange={(e) =>
          setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value.trim(),
          }))
        }
        onSubmit={submitForm}
      />

      {currentImage ? (
        <img
          className="screenshot"
          src={currentImage}
          alt="Screenshot returned"
        />
      ) : (
        <div></div>
      )}

      <div className="container">
        <h3>Current Query Status:</h3>
        <p>
          https://api.apiflash.com/v1/urltoimage?access_key=ACCESS_KEY
          <br />
          &url={inputs.url}
          <br />
          &format={inputs.format}
          <br />
          &width={inputs.width}
          <br />
          &height={inputs.height}
          <br />
          &no_cookie_banners={inputs.no_cookie_banners}
          <br />
          &no_ads={inputs.no_ads}
          <br />
        </p>
      </div>

      <div className="container">
        <Gallery images={prevImages} />
      </div>

      <br />
    </div>
  );
}

export default App;


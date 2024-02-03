const API_URL =
  "https://api.giphy.com/v1/gifs/search?api_key=GIY6EJ9YL5trOrLi1fg3XFVLh1KYn0oG&q=Cats%20step%20with";

function App() {
  fetch(API_URL).promise();

  return (
    <>
      <div>
        <h1>Hello world!</h1>
      </div>
    </>
  );
}

export default App;

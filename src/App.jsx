import { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";



function App() {
  //Here we are storing the data fetched by API in setmyData
  const [myData, setMyData] = useState([])

  // Note: Using Promises 
  // useEffect(() => {
  //   axios.
  //     get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) =>
  //       // console.log(" ~ file:App.jsx ~ line 13 ~ useEffect ~ res", res.data)
  //       setMyData(res.data)
  //     );

  // }, []);

  //For error Handling 
  // useEffect(() => {
  //   axios.
  //     get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setMyData(res.data)
  //       .catch((error) =>
  //         console.log("Error Hai to dikhao wo be console me", error))
  //     );

  // }, []);


  //Here we will be showing error directly to the web page
  const [isError, setIserror] = useState("");
  useEffect(() => {
    axios.
      get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setMyData(res.data))
      .catch((error) =>
        setIserror(error.message)
      );
  }, []);


  return (
    <>
      <h1>About Axios</h1>
      {/* This line means if error is there show another wise don't show */}
      {isError !== "" && <h2>{isError}</h2>}
      <div className='grid'>
        {myData.map((post) => {
          const { id, title, body } = post;
          return (
            <div className="card" key={id}>
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 200)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App

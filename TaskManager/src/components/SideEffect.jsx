import React, { useEffect, useState } from 'react';

function SideEffect() {

  // 1️⃣ Create state to store data
  const [data, setData] = useState([]);
  console.log("re-renders")
  // 2️⃣ Create loading state
  const [loading, setLoading] = useState(true);

  // 3️⃣ Create error state
  const [error, setError] = useState(null);

  useEffect(() => {

    async function getData() {
      try {
        let res = await fetch('https://jsonplaceholder.typicode.com/users');

        // check if response is OK
        if (res.status !== 200) {
          throw new Error("Failed to fetch data");
        }

        let userData = await res.json();  // ✅ await here
        setData(userData);                // store in state
      }
      catch (err) {
        setError(err.message);
      }
      finally {
        setLoading(false);
      }
    }

    getData();

  },[]);  // runs only once (component mount)

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Side Effect Example</h2>

      {loading && <p style = {{color : "red"}}>Loading...</p>}
      {error && <p style={{color:"red"}}>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((userObj,index) => <tr key={index}><td>{userObj.id}</td><td>{userObj.name}</td><td>{userObj.username}</td></tr>)
          }
        </tbody>
      </table>
    </div>
  );
}

export default SideEffect;
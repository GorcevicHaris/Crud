import React, { useEffect, useState } from "react";
import axios from "axios";
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "error"));
  }, []);

  function handleDeleteI(students) {
    setData(data.filter((el) => el.id !== students));
  }
  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student, index) => {
              return (
                <tr key={index}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>
                    <button>Edit</button>
                    <button
                      onClick={() =>
                        setData(data.filter((el) => el.id !== student.id))
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;

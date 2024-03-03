import React, { useEffect, useState, } from "react";
import axios from "axios";
import { Link,useNavigate  } from "react-router-dom";
function Home() {
  const navigate = useNavigate()
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "error"));
  }, []);

  function handleDeleteI(id) {
    setData(data.filter((el) => el.id !== id));
  }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h3>Students list</h3>
        <div className="d-flex justify-content-end">
          <Link className="btn btn-success" to="/create">
            Create +
          </Link>
        </div>
        <table className="table">
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
                    <Link to={`/read/${student.id}`} className="btn btn-sm btn-info">Read</Link>
                    <Link to={`/edit/${student.id}`}  className="btn btn-sm btn-primary mx-2">
                      Edit
                    </Link>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDeleteI(student.id)}
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

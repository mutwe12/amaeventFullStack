import React, { useEffect, useState } from "react";

function Users() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('http://localhost:8081/users')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
    }, []);
  
    return (
      <div className="container mt-5 text-white" style={{ width: '100%' }}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.FirstName}</td>
                <td>{user.LastName}</td>
                <td>{user.Email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  

export default Users
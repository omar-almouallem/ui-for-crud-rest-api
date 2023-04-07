import React from "react";
import "../css/Users.css";
function Users({ users, deleteUser, toggleUpdate }) {
  return (
    <div className="card">
      <ul>
        <li>
          <a class="active" href="/">
            Home
          </a>
        </li>
        <li>
          <a href="/create">Create</a>
        </li>
      </ul>
      <h2>User </h2>
      <table className="mainTable">
        <tr>
          <th className="idTh">id</th>
          <th className="FnTh">First Name</th>
          <th className="LnTh">Last Name</th>
          <th className="AgTh">Age</th>
          <th className="DeTh">Delete</th>
          <th className="UpTh">Update</th>
        </tr>
      </table>
      {users &&
        users.map((dataFromResponse) => {
          return (
            <table className="userTable" key={dataFromResponse._id}>
              <tr>
                <th className="idTh"> {dataFromResponse._id}</th>
                <th className="FnTh">{dataFromResponse.firstName}</th>
                <th className="LnTh">{dataFromResponse.lastName}</th>
                <th className="AgTh"> {dataFromResponse.age} </th>
                <th className="DeTh">
                  <button onClick={() => deleteUser(dataFromResponse._id)}>
                    Delete
                  </button>
                </th>
                <br />
                <br />
                <th className="UpTh">
                  <button onClick={() => toggleUpdate(dataFromResponse)}>
                    Update
                  </button>
                </th>
                <hr />
              </tr>
            </table>
          );
        })}
    </div>
  );
}
export default Users;

import React from "react";
import "../css/CreateUser.css";
function CreateUser({ updateForm, updateCreateFormField, createUser }) {
  return (
    <div>
      {!updateForm._id && (
        <div>
          <h2>Create User</h2>
          <form className="createForm" onSubmit={createUser} name="formCre">
            <label for="firstName">First Name </label>
            <input required name="firstName" onChange={updateCreateFormField} />
            <br />
            <label for="lastName">last Name </label>
            <input required name="lastName" onChange={updateCreateFormField} />
            <br />
            <label for="age">Age </label>

            <input
              required
              type="number"
              name="age"
              onChange={updateCreateFormField}
            />
            <br />
            <div className="buttonSec">
              <button type="submit">Create</button>
              <a href="../" className="show">
                Show User
              </a>
              <a href="../" className="show">
                Cansel
              </a>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
export default CreateUser;

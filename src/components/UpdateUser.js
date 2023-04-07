import React from "react";
import "../css/UpdateUser.css";
function UpdateUser({ updateForm, updateUser, handleUpdateFieldChange }) {
  return (
    <div>
      {updateForm._id && (
        <div>
          <h2>Update User</h2>
          <form className="updateUser" onSubmit={updateUser}>
            <lable>New First Name</lable>
            <br />

            <input
              onChange={handleUpdateFieldChange}
              value={updateForm.firstName}
              name="firstName"
            />

            <lable>New Last Name</lable>
            <br />
            <input
              onChange={handleUpdateFieldChange}
              value={updateForm.lastName}
              name="lastName"
            />

            <lable>New Age </lable>
            <br />
            <input
              onChange={handleUpdateFieldChange}
              value={updateForm.age}
              name="age"
              type="number"
            />
            <div className="buttonSec">
              <button type="submit">Update User</button>
              <button>Cansel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
export default UpdateUser;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Users from "./Users.js";
import CreateUser from "./CreateUser.js";
import UpdateUser from "./UpdateUser.js";
// import "../styles.css";

function App() {
  // State
  const [users, setUsers] = useState(null);
  const [createForm, setCreateForm] = useState({
    firstName: "",
    lastName: "",
    age: ""
  });
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    firstName: "",
    lastName: "",
    age: ""
  });

  //useEffect
  useEffect(() => {
    fetchUser();
  });

  // handel axios
  const headers = {
    "Content-Type": "application/json"
  };

  // functions
  const fetchUser = async () => {
    const res = await axios.get("http://localhost:3000/users/", { headers });
    const dataFromResponse = res.data; // => array of data from response
    setUsers(dataFromResponse);
  };

  const updateCreateFormField = async (e) => {
    const { name, value } = e.target;
    setCreateForm({
      ...createForm,
      [name]: value
    });
  };
  const createUser = async (e) => {
    setCreateForm({
      firstName: "",
      lastName: "",
      age: ""
    });

    e.preventDefault();
    const res = await axios.post("http://localhost:3000/users", createForm);
    setUsers([...users, res.data]);
    document.formCre.reset();
    //clear seat
  };
  const deleteUser = async (_id) => {
    await axios.delete(`http://localhost:3000/users/${_id}`);
    const newUserList = [...users].filter((user) => {
      return user._id !== _id;
    });
    setUsers(newUserList);
  };
  const handleUpdateFieldChange = (e) => {
    const { value, name } = e.target;
    setUpdateForm({
      ...updateForm,
      [name]: value
    });
  };
  const toggleUpdate = (user) => {
    // Set state on update form
    setUpdateForm({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age
    });
  };
  const updateUser = async (e) => {
    e.preventDefault();
    const { firstName, lastName, age } = updateForm;
    // Send the update request
    const res = await axios.put(
      `http://localhost:3000/users/${updateForm._id}`,
      { firstName, lastName, age }
    );
    // Update state
    const newUsers = [...users];
    const userIndex = users.findIndex((dataFromResponse) => {
      return dataFromResponse._id === updateForm._id;
    });
    // Data From Api After Update
    const newData = res.data;
    newUsers[userIndex] = newData;
    setUsers(newUsers);

    // Clear update form state
    setUpdateForm({
      _id: null,
      firstName: "",
      lastName: "",
      age: ""
    });
  };

  //
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Users
            users={users}
            deleteUser={deleteUser}
            toggleUpdate={toggleUpdate}
          />
        </Route>

        <Route exact path="/create">
          <CreateUser
            updateForm={updateForm}
            updateCreateFormField={updateCreateFormField}
            createUser={createUser}
          />
        </Route>
      </Switch>
      <UpdateUser
        updateForm={updateForm}
        handleUpdateFieldChange={handleUpdateFieldChange}
        updateUser={updateUser}
      />
    </Router>
  );
}
export default App;

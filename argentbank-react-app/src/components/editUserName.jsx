import { useSelector, useDispatch } from "react-redux";
import { updateUserName } from "../api.jsx";
import { setUserName } from "../storeUser.jsx";

function EditUserName({ closed, toggleEdit }) {
  const dispatch = useDispatch();
  const { profile, token } = useSelector((state) => state.user);
  async function submitForm(event) {
    event.preventDefault();
    const newUserName = document.getElementById("userName").value;
    dispatch(setUserName(await updateUserName(token, newUserName)));
    toggleEdit();
  }
  if (closed === false) {
    return (
      <section className="contenant-edit-name">
        <h1>Edit user info</h1>
        <form className="edit-form-name" onSubmit={submitForm}>
          <div>
            <label htmlFor="userName">User name:</label>
            <input id="userName" type="text" />
          </div>
          <div>
            <label htmlFor="firstName">First name:</label>
            <input
              id="firstName"
              type="text"
              disabled
              value={profile.firstName}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last name:</label>
            <input
              id="lastName"
              type="text"
              disabled
              value={profile.lastName}
            />
          </div>
          <div>
            <button type="submit" className="form-button edit-button">
              Save
            </button>
            <button className="form-button edit-button" onClick={toggleEdit}>
              Cancel
            </button>
          </div>
        </form>
      </section>
    );
  } else {
    return <div></div>;
  }
}

export default EditUserName;

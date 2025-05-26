import { useSelector, useDispatch } from "react-redux";
import { updateUserName } from "../api.jsx";
import { setUserName } from "../storeUser.jsx";
import { useState } from "react";

function EditUserName({ closed, toggleEdit }) {
  const dispatch = useDispatch();
  const { profile, token } = useSelector((state) => state.user);
  const [errorMessage, setErrorMessage] = useState("");
  async function submitForm(event) {
    event.preventDefault();
    const newUserName = document.getElementById("userName").value;

    if (newUserName === "") {
      document
        .getElementById("userName")
        .setAttribute("placeholder", "Pseudo manquant...");
      return;
    }

    const apiNewUserName = await updateUserName(token, newUserName);
    if (apiNewUserName) {
      dispatch(setUserName(apiNewUserName));
      toggleEdit();
    } else {
      setErrorMessage(
        "Une erreur technique s'est produite lors de la mise à jour du pseudo"
      );
    }
  }

  return (
    <>
      {!closed && (
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
            {errorMessage && <p className="error-message">{errorMessage}</p>}
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
      )}
    </>
  );
}

export default EditUserName;

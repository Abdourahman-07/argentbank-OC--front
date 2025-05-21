import { getResponseLogin, getUserProfile } from "../api.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken, setProfile } from "../storeUser.jsx";

function SignIn() {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const main = document.querySelector("main"); //A changer
  main.classList.add("main", "bg-dark"); //A changer

  async function loginUser(token) {
    const profile = await getUserProfile(token);
    dispatch(setToken(token));
    dispatch(setProfile(profile.body));
    navigate("/tableau-de-bord");
  }

  async function checkLoginUser(event) {
    event.preventDefault();
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
      setErrorMessage("Veuillez remplir tous les champs");
    } else {
      const response = await getResponseLogin(email, password);
      if (!response) {
        setErrorMessage("Une erreur technique s'est produite");
      } else {
        if (response.status === 200) {
          const token = response.body.token;
          loginUser(token);
        } else {
          setErrorMessage("Identifiants non reconnus");
        }
      }
    }
  }

  return (
    <>
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={checkLoginUser}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </>
  );
}

export default SignIn;

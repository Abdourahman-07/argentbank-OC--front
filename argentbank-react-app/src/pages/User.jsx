import AccountStats from "../components/accountStats.jsx";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function User() {
  const { profile } = useSelector((state) => state.user);
  const { isAuthenticated } = useSelector((state) => state.user);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  } else {
    const main = document.querySelector("main");
    main.classList.add("main", "bg-dark");
    return (
      <>
        <div className="header">
          <h1>
            Welcome back
            <br />
            {profile.firstName} {profile.lastName}
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <AccountStats
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <AccountStats
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <AccountStats
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </>
    );
  }
}

export default User;

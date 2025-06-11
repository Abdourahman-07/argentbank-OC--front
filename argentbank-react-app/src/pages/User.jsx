import AccountStats from "../components/accountStats.jsx";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import EditUserName from "../components/editUserName.jsx";
import UserHeader from "../components/userHeader.jsx";
import { useState } from "react";

function User() {
  const [editForm, setEditForm] = useState(true);
  const { profile } = useSelector((state) => state.user);
  const { isAuthenticated } = useSelector((state) => state.user);

  const toggleEditForm = () => {
    setEditForm(!editForm);
  };

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  } else {
    return (
      <>
        <UserHeader
          open={editForm}
          profile={profile}
          toggleEdit={toggleEditForm}
        />
        <EditUserName closed={editForm} toggleEdit={toggleEditForm} />
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

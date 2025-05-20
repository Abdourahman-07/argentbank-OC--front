function UserHeader({ profile, open, toggleEdit }) {
  if (open === true) {
    return (
      <div className="header">
        <h1>
          Welcome back
          <br />
          {profile.firstName} {profile.lastName}
        </h1>
        <button className="edit-button" onClick={toggleEdit}>
          Edit Name
        </button>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default UserHeader;

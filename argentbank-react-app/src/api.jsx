export async function getResponseLogin(email, password) {
  try {
    const loginData = {
      email: email,
      password: password,
    };
    const askingLogin = await fetch(`http://localhost:3001/api/v1/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });
    return await askingLogin.json();
  } catch (error) {
    console.error("Error during login:", error);
    return null;
  }
}

export async function getUserProfile(token) {
  try {
    const askingProfile = await fetch(
      `http://localhost:3001/api/v1/user/profile`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return await askingProfile.json();
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
}

export async function updateUserName(token, newUserName) {
  try {
    await fetch(`http://localhost:3001/api/v1/user/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userName: newUserName }),
    });
    return newUserName;
  } catch (error) {
    console.error("Error updating user name:", error);
    return null;
  }
}

export default { getResponseLogin, getUserProfile, updateUserName };

export async function getResponseLogin(email, password) {
  const loginData = {
    email: email,
    password: password,
  };
  const askingLogin = await fetch(`http://localhost:3001/api/v1/user/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginData),
  });
  return await askingLogin.json(askingLogin);
}

export async function getUserProfile(token) {
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
  return await askingProfile.json(askingProfile);
}

export default { getResponseLogin, getUserProfile };

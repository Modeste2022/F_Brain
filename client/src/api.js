export const registerUser = async (userData) => {
  const response = await fetch("http://localhost:8000/register/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(userData),
  });
  return response.json();
};

export const loginUser = async (userData) => {
  const response = await fetch("http://localhost:8000/login/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(userData),
  });
  return response.json();
};

export const resetPassword = async (email) => {
  const response = await fetch("http://localhost:8000/password-reset/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ email }),
  });
  return response.json();
};

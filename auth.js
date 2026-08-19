function checkAuth(token) {
  const decoded = jwt.decode(token);
  return decoded.role === "admin";
}

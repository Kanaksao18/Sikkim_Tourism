import jwt from "jsonwebtoken";

export const generateAdminToken = () => {
  return jwt.sign({ id: "admin-fixed-id", role: "admin" }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

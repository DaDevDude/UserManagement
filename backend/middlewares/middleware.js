import jwt from "jsonwebtoken";

export async function authMiddleware(req, res, next) {
  const token = req.headers.authorization;

  try {
    const jwtPayload = jwt.verify(token, process.env.JWT_SECRET);
    req.empId = jwtPayload.empId;
    next();
  } catch (e) {
    console.log("Error in middleware " + e.message);
    return res.json({ message: "Error in Auth Middleware" });
  }
}

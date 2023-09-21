import { UnauthenticatedError } from "../error/customError.js";
import { verifyJWT } from "../utils/utils.js";

export const userAuthentication = async (req, res, next) => {
  const { cookie } = req.cookies;

  if (!cookie) {
    throw new UnauthenticatedError("Authentication invalid");
  }

  try {
    const { role, id } = verifyJWT(cookie);
    req.user = { role, id };
    next();

  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid");
  }
};

export const authorizePermissions = (req, res, next) => {
  if (req.user.role !== 'admin') {
    throw new UnauthenticatedError("Authentication invalid");
  }
  next();
};
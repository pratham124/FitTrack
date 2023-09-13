import { UnauthenticatedError } from "../error/customError";
import { verifyJWT } from "../utils/utils";

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
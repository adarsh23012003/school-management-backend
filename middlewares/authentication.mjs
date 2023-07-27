import jwt from "jsonwebtoken";
import User from "../User/model.mjs";
import catchAsync from "../Error/catchAsync.mjs";
import ServerError from "../Error/ServerError.mjs";

const auth = catchAsync(async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  let verify;
  try {
    verify = jwt.verify(token, process.env.SECRET);
  } catch (error) {
    next(new ServerError(`${error.message}, Login Again!!!`));
  }
  const user = await User.findById(verify.id);
  req.user = user;

  next();
});

export default auth;

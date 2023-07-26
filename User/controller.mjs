import User from "./model.mjs";
import ServerError from "../Error/ServerError.mjs";
import catchAsync from "../Error/catchAsync.mjs";

const signUp = catchAsync(async (req, res, next) => {
  res.json("User signup successfully");
});
const login = catchAsync(async (req, res, next) => {
  // const user = await User.find();
  // res.json({
  //   user,
  // });
  // res.json(user);
  res.json("user login successfully ");
});

export { signUp, login };

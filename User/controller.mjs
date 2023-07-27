import User from "./model.mjs";
import ServerError from "../Error/ServerError.mjs";
import catchAsync from "../Error/catchAsync.mjs";

const signUp = catchAsync(async (req, res, next) => {
  const newUser = new User(req.body);
  const user = await newUser.save();
  // res.json("User signup successfully");
  res.json({
    user,
  });
});
const login = catchAsync(async (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return next(new ServerError("email or password not supplied", 400));
  }
  // find user from email
  const user = await User.findOne({ email: req.body.email }).select(
    "+password"
  );
  if (!user) {
    return next(new ServerError("user not found", 404));
  }
  // check password
  if (user.password !== req.body.password) {
    return next(new ServerError("wrong password", 401));
  }

  // check Admin
  if (user.role !== "Admin") {
    return next(new ServerError("you are not authorized", 401));
  }
  const token = user.genToken();
  res.json({
    token,
  });
  // res.json(user._id);
  // res.json("user login successfully ");
});

export { signUp, login };

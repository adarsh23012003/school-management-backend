import catchAsync from "../Error/catchAsync.mjs";
import ServerError from "../Error/ServerError.mjs";

class Permission {
  #role;
  constructor(role) {
    this.#role = role;
  }
  permission = catchAsync(async (req, res, next) => {
    if (req.user.role !== this.#role) {
      return next(new ServerError("you are not authorized", 401));
    }
    next();
  });
}

const adminPermission = new Permission("Admin");

export { adminPermission };

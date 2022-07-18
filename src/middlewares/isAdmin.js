import AppError from "../errors/AppError.js";

function isAdmin(request, response, next) {
  try {
    const user = request.user;

    if (!user.isAdmin) {
      throw new AppError("The user not is admin roles", "Unauthorized", 401);
    }

    return next();
  } catch (error) {
    if (error) {
      return response.status(error.code).json({
        message: error.message,
        status: error.status,
        code: error.code,
      });
    }

    return response.status(500).json({
      message: "Error in validate roles of user",
      status: "Internal Server Error",
      code: 500,
    });
  }
}

export default isAdmin;

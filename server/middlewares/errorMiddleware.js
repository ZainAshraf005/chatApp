const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Backend Error";

  if (process.env.NODE_ENV === "development") {
    console.error("Error: ", err);
  }

  const response = {
    message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  };

  return res.status(status).json(response);
};

export default errorMiddleware;

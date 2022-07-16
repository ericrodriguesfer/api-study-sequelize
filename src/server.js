import app from "./app/app.js";

app.listen(process.env.API_PORT, () =>
  console.log(
    `[API] => Application was started on port ${process.env.API_PORT}`
  )
);

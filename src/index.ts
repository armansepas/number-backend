import { Hono } from "hono";

const app = new Hono();

// app.get('/', (c) => {
//   return c.text('Hello Hono!')
// })

app.get("/", (c) => {
  const callingNumber = c.req.query("callingnumber");
  if (!callingNumber) {
    return c.json({
      Status: false,
      Error: "Calling Number is required",
    });
  }
  return c.json({
    Status: true,
    CalledNumber: "09124166379",
  });
});

export default app;

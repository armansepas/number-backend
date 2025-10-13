import { Hono } from "hono";

const app = new Hono();

// app.get('/', (c) => {
//   return c.text('Hello Hono!')
// })

app.get("/:number", (c) => {
  const number = c.req.param("number");
  const result = Number(number) * 2;
  return c.text(result.toString());
});

export default app;

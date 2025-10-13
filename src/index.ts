import { Hono } from "hono";

const app = new Hono();

// app.get('/', (c) => {
//   return c.text('Hello Hono!')
// })

app.get("/", (c) => {
  try {
    const callingNumber =
      c.req.query("callingnumber") ||
      c.req.query("caller") ||
      c.req.query("CallingNumber");
    if (!callingNumber) {
      return c.json(
        {
          error:
            "Calling Number is required (use 'callingnumber', 'caller', or 'CallingNumber' query parameter)",
        },
        { status: 400 }
      );
    }
    // Additional validation can be added here (e.g., regex for phone number format)
    return c.json(
      {
        calledNumber: "09124166379",
      },
      { status: 200 }
    );
  } catch (error) {
    return c.json(
      {
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
});

export default app;

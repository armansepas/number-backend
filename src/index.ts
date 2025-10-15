import { Hono } from "hono";

const app = new Hono();

// app.get('/', (c) => {
//   return c.text('Hello Hono!')
// })

const generate9Number = (number: string) => "9" + number;

app.get("/", (c) => {
  try {
    const callingNumber =
      c.req.query("callingnumber") ||
      c.req.query("caller") ||
      c.req.query("CallingNumber");

    const peymanNumber = "09127154605";
    const mohandesKaniNumber = "09127808487";
    // mirayi number
    const returningNumber = "9" + "09124166379";

    if (!callingNumber) {
      return c.json(
        {
          error:
            "Calling Number is required (use 'callingnumber', 'caller', or 'CallingNumber' query parameter)",
          status: false,
        },
        { status: 400 }
      );
    }
    if (callingNumber != peymanNumber) {
      return c.json(
        {
          error:
            "Calling Number is not valid. you will be redirected to voip portal",
          status: false,
        },
        { status: 400 }
      );
    }

    // if (callingNumber == peymanNumber) {
    return c.json(
      {
        calledNumber: generate9Number(mohandesKaniNumber),
        status: true,
      },
      { status: 200 }
    );
    // }

    // // Additional validation can be added here (e.g., regex for phone number format)
    // return c.json(
    //   {
    //     calledNumber: returningNumber,
    //     status: true,
    //   },
    //   { status: 200 }
    // );
  } catch (error) {
    return c.json(
      {
        error: "Internal server error",
        status: false,
      },
      { status: 500 }
    );
  }
});

export default app;

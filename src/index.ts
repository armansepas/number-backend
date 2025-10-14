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
					error: "Calling Number is required (use 'callingnumber', 'caller', or 'CallingNumber' query parameter)",
					status: false,
				},
				{ status: 400 }
			);
		}

		const peymanNumber = "09124166379";

		const mohandesKaniNumber = "09127808487";

		if (callingNumber == peymanNumber) {
			return c.json(
				{
					calledNumber: mohandesKaniNumber,
					status: true,
				},
				{ status: 200 }
			);
		}

		const returningNumber = "9" + "09124166379";
		// Additional validation can be added here (e.g., regex for phone number format)
		return c.json(
			{
				calledNumber: returningNumber,
				status: true,
			},
			{ status: 200 }
		);
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

import { Hono } from "hono";

const app = new Hono();

// app.get('/', (c) => {
//   return c.text('Hello Hono!')
// })

const generate9Number = (number: string) => "9" + number;

app.get("/", async (c) => {
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

		const response = await fetch(
			`https://backoffice.sep5.ir/api/v1/Voip/GetRecentCall?CallingNumber=${callingNumber}`
		);
		const data = await response.json();

		console.log(response);
		if (response.status === 200) {
			return c.json(
				{
					calledNumber: data.calledNumber,
					status: true,
				},
				{ status: 200 }
			);
		}
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

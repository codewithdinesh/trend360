
export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);

        console.log("searchParams", searchParams);


        const search = searchParams.get('search');


        const apiUrl = "https://api.langflow.astra.datastax.com/lf/658819f0-48ab-4bf4-86ca-417dc0ea712d/api/v1/run/f355d7b6-e3f1-425e-9f9c-7e6882308664?stream=false";

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer AstraCS:neIFSWiaErGqRLvEfInMZEgH:735f73bfdc5f738d44407de0d77eaf6a90859618a6226fa8614997bb0304b5d1`,
            },
            body: JSON.stringify({
                input_value: search,
                output_type: "chat",
                input_type: "chat",

            }),
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        const data = await response.json()

        console.log('Data:', data)




        return new Response(JSON.stringify(data), {
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        console.log("API Error:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch data", error }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

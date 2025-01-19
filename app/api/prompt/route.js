
export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);

        console.log("searchParams", searchParams);


        const search = searchParams.get('search');


        const apiUrl = "https://api.langflow.astra.datastax.com/lf/658819f0-48ab-4bf4-86ca-417dc0ea712d/api/v1/run/f355d7b6-e3f1-425e-9f9c-7e6882308664?stream=false";

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.ASTRA_DB_TOKEN}`,
                },
                body: JSON.stringify({
                    input_value: search,
                    output_type: "chat",
                    input_type: "chat",
                }),
            });

            if (!response.ok) {
                console.error(`Error: ${response.status} ${response.statusText}`);
                const errorBody = await response.text();
                console.error(`Error body: ${errorBody}`);
            } else {
                const data = await response.json();
                console.log(data);
            }
        } catch (error) {
            console.error('Fetch error:', error);
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

import * as z from "zod";

const url = 'https://www.course-api.com/react-tours-project';


const tourSchema = z.object({
    id: z.string(),
    name: z.string(),
    info: z.string(),
    image: z.string(),
    price: z.string(),
    test: z.boolean()
});

// extract the inferred type
type Tour = z.infer<typeof tourSchema>;

async function fetchData(url: string): Promise<Tour[]> {

    try {
        const response = await fetch(url);

        // Catch error 404 - not found
        if (!response.ok) {
            throw new Error(`HTTP error! status:${response.status}`)
        }

        const rawData: Tour[] = await response.json();
        // ZOD provides type check at runtime
        const result = tourSchema.array().safeParse(rawData);

        if (!result.success) {
            throw new Error(`Invalid data: ${result.error.message}`)
        }

        return result.data;

    } catch (error) {
        const errorMsg = error instanceof Error ? error.message : 'There was an error...';
        console.log(errorMsg);

        return [];
    }

}

const tours = await fetchData(url);
tours.map((tour) => console.log(tour.name))
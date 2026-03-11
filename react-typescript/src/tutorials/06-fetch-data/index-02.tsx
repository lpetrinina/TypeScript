import { fetchTours } from "./types";
import { useQuery } from "@tanstack/react-query";

function Component() {
  const {
    isLoading,
    isError,
    error,
    data: tours,
  } = useQuery({
    queryKey: ["tours"],
    queryFn: () => fetchTours(),
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h4 className='mb-1'>Fetch Data - Axios, React Query & Zod</h4>

      {tours?.map((tour) => (
        <p key={tour.id} className='mb-1'>
          {tour.name}
        </p>
      ))}
    </div>
  );
}

export default Component;

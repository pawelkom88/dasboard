import { useQuery } from "react-query";

export default function UseAirlinesData() {
  const { isLoading, isError, data: airlines } = useQuery("airlines", getAirlineData);

  return { isLoading, isError, airlines };
}

async function getAirlineData() {
  const response = await fetch(
    `http://api.aviationstack.com/v1/flights?access_key=${import.meta.env.VITE_API_KEY}`
  );

  const airliresponse = await response.json();

  return airliresponse;
}

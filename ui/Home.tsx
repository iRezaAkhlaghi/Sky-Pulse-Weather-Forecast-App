import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { fetchCityWeather } from "../api/weatherApi";

import Header from "../components/Header";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import Login from "../components/Login";
import Main from "../components/Main";
import Loading from "../components/Loading";
import WeatherCard from "../components/WeatherCard";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Home() {
  const { cityName } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState("");

   // Fetch weather data when cityName changes
  const { data, isLoading, error } = useQuery({
    queryKey: ["weather", cityName],
    queryFn: () => fetchCityWeather(cityName as string),
    enabled: !!cityName,
    staleTime: 0,
    retry: false,
  });

   // Redirect to home if data not found and error exists
  useEffect(() => {
    if (!data?.name && error) {
      navigate("/");
    }
  }, [data, navigate, error]);

  return (
    <>
      <Header>
        <Logo />
        <SearchBar input={input} setInput={setInput} />
        <Login />
      </Header>

      {isLoading ? (
        <Loading />
      ) : (
        <Main>
          {data && <WeatherCard data={data} />}
          {!data && (
            <p className="text-center text-2xl">
              Start your Sky Pulse journey — search a city to feel the forecast.
            </p>
          )}
          {error && toast.error(error.message)}
        </Main>
      )}
    </>
  );
}

export default Home;

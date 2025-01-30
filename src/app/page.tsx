"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {

const TMDB_BASE_URL = process.env.TMDB_BASE_URL;
const TMDB_API_TOKEN = process.env.TMDB_API_TOKEN;
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)
const [popularMoviesData, setPopularMoviesData] = useState([]);


  const getMovieData = async () => {
    try {
      console.log("this is runnnig", TMDB_BASE_URL);
      setLoading(true); 
      const response = await axios.get(
        `${TMDB_BASE_URL}/movie/popular?language=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer ${TMDB_API_TOKEN}`,
          },
        }
      );
      console.log(response.data.results);
      
      setLoading(false)
    } catch (err) {
      setLoading(false)
      if(axios.isAxiosError(err)){
        setError(err.response.data.status.message)
      }
     console.log((error));
     console.log("hi");
     
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return <div className=""></div>;
}

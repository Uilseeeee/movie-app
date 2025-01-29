 'use client'
import {useEffect} from 'react';
import axios from 'axios';


export default function Home() {

  
  const TMDB_BASE_URL = process.env.TMDB_BASE_URL ;
  const TMDB_API_TOKEN = process.env.TMDB_API_TOKEN ; 
  const getMovieData = async () => {
    try {
      console.log("this is runnnig")
        ;

      const response = await axios.get(
        '${ TMDB_BASE_URL }/movie/popular?language=en-US&page=1',{
        headers: {
          Authorization: 'Bearer ${TMDB_API_TOKEN}',
        },
      }
      );
      console.log(response);

    } catch (err) {
      console.log(err)
    }
  };



  useEffect(() => {
    getMovieData();
  }, []);



  return (
    <div className="">

    </div>

  );
}

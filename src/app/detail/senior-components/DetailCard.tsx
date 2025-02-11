"use client";

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Movie } from "@/types/Movie-type";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Star } from "lucide-react";
const TMDB_BASE_URL = process.env.TMDB_BASE_URL;
const TMDB_API_TOKEN = process.env.TMDB_API_TOKEN;
function DetailCard() {
  const [upcomingMovieData, setUpcomingMovieData] = useState<Movie[]>([]);

  const getUpcomingMovieData = async () => {
    try {
      const response = await axios.get(
        `${TMDB_BASE_URL}/movie/upcoming?language=en-US&page=1`,
        {
          headers: {
            Authorization: `Bearer ${TMDB_API_TOKEN}`,
          },
        }
      );
      setUpcomingMovieData(response.data.results);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUpcomingMovieData();
  }, []);

  return (
    <div className="flex justify-center h-screen -mt-20">
      {upcomingMovieData.slice(0, 1).map((movie) => (
        <div
          key={movie.id}
          className="flex justify-center flex-col w-4/5 self-center"
        >
          <div className="flex justify-between">
            <h1 className="font-bold text-4xl flex self-center">
              {movie.title}
            </h1>
            <div className="flex items-center gap-1 ">
              <Star className="text-yellow-400 w-4 h-4 fill-yellow-400" />
              {movie.vote_average}/10
            </div>
          </div>

          <div className="flex flex-row gap-[30px]">
            <div>
              <Card
                key={movie.id}
                className="w-[300px] h-[400px] rounded-[10px] my-5"
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                  width={300}
                  height={400}
                  alt="Picture of the author"
                  className="rounded-tr-[10px] rounded-tl-[10px]"
                />
              </Card>
             
            </div>
            <Image
              src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
              width={1000}
              height={200}
              alt="Picture of the author"
              className="rounded-tr-[10px] rounded-tl-[10px]"
            />
              </div>
             <p className="font-normal text-xl my-4">
                {movie.overview}
              </p>
        
        </div>
      ))}
    </div>
  );
}

export default DetailCard;

"use client";

import React from "react";
import { Card } from "../ui/card";
import { useState, useEffect } from "react";
import { Movie } from "@/types/Movie-type";
import axios from "axios";
import Image from "next/image";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";

const TMDB_BASE_URL = process.env.TMDB_BASE_URL;
const TMDB_API_TOKEN = process.env.TMDB_API_TOKEN;

function GenresCard() {
  const [upcomingMovieData, setUpcomingMovieData] = useState<Movie[]>([]);
  const router = useRouter();

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
    } catch (err) {
      console.log(err);
    }
  };
  const handleMovieClick = (movieId: number) => {
    console.log(movieId, "");

    router.push(`/detail/${movieId}`);
  };

  useEffect(() => {
    getUpcomingMovieData();
  }, []);

  return (
    <div className="p-[5px] h-full flex justify-end">
      {/* <div className="md:hidden  flex flex-wrap gap-5 mt-8">
        <div className="w-[100%] max-w-[1175px] flex justify-between items-center mb-5"></div>
        {upcomingMovieData.slice(0, 1).map((movie) => (
          <Card
            key={movie.id}
            className="w-[127px] h-[200px] rounded-[10px]"
            onClick={() => handleMovieClick(movie.id)}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
              width={127}
              height={200}
              alt="Picture of the author"
              className="rounded-tr-[10px] rounded-tl-[10px] bg-blue-500 hover:bg-red-500 transition-colors duration-300"
            />
            <div className="p-2">
              <div className="flex items-center gap-1 ">
                <Star className="text-yellow-400 w-4 h-4 fill-yellow-400" />
                {movie.vote_average}/10
              </div>
              <div className="font-normal text-sm">{movie.title}</div>
            </div>
          </Card>
        ))}
      </div> */}
      <div className="w-[100%] h-full flex justify-center mt-8">
        <div className="hidden md:flex w-[100%] flex-col items-center mt-8">
          <div className=" flex justify-between items-center mb-5"></div>
          <div className="md:flex max-w-[2000px]  md:flex-wrap gap-5 flex justify-center">
            {upcomingMovieData.slice(0, 15).map((movie) => (
              <Card
                key={movie.id}
                className="w-[170px] h-[339px]  rounded-[10px]"
                onClick={() => handleMovieClick(movie.id)}
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                  className="rounded-tr-[10px] rounded-tl-[10px]"
                />
                <div className="p-2">
                  <div className="flex items-center gap-1 ">
                    <Star className="text-yellow-400 w-4 h-4 fill-yellow-400" />
                    {movie.vote_average}/10
                  </div>
                  <div className="font-normal text-lg">{movie.title}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresCard;

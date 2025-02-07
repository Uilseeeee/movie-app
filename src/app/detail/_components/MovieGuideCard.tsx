"use client"
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Movie } from "@/types/Movie-type";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Star } from "lucide-react";
const TMDB_BASE_URL = process.env.TMDB_BASE_URL;
const TMDB_API_TOKEN = process.env.TMDB_API_TOKEN;
function MovieGuideCard() {
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
      console.log("naandeee", response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUpcomingMovieData();
  }, []);

  return (
    <div>
      {upcomingMovieData.map((movie) => (
        <Card key={movie.id} className="w-[157px] h-[309px]  rounded-[10px]">
          <Image
            src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
            width={157}
            height={233}
            alt="Picture of the author"
            className="rounded-tr-[10px] rounded-tl-[10px]"
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
    </div>
  );
}

export default MovieGuideCard;

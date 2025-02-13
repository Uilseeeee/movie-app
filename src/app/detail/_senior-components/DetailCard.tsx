"use client";

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Movie } from "@/types/Movie-type";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Star } from "lucide-react";
import { useParams } from "next/navigation";

const TMDB_BASE_URL = process.env.TMDB_BASE_URL;
const TMDB_API_TOKEN = process.env.TMDB_API_TOKEN;

export const DetailCard = () => {
  const [movieDetail, setMovieDetail] = useState<Movie>({});
  const { id } = useParams<{ id: string }>();
  console.log(id);

  const getmovieDetail = async () => {
    try {
      const { data } = await axios.get(
        `${TMDB_BASE_URL}/movie/${id}?language=en-US`,
        {
          headers: {
            Authorization: `Bearer ${TMDB_API_TOKEN}`,
          },
        }
      );
      setMovieDetail(data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(movieDetail);

  useEffect(() => {
    getmovieDetail();
  }, []);

  return (
    <div className="flex justify-center h-screen -mt-20">
      {/* {movieDetail?.title} */}
      {movieDetail?.id => (
        <div
          key={movieDetail?.title}
          className="flex justify-center flex-col w-4/5 self-center"
        >
          <div className="flex justify-between">
            <h1 className="font-bold text-4xl flex self-center">
              {movieDetail?.title}
            </h1>
            <div className="flex items-center gap-1 ">
              <Star className="text-yellow-400 w-4 h-4 fill-yellow-400" />
              {movieDetail?.vote_average}/10
            </div>
          </div>

          <div className="flex flex-row gap-[30px]">
            <div>
              <Card
                key={movieDetail?.id}
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
          <p className="font-normal text-xl my-4">{movieDetail?.overview}</p>
        </div>
      ))}
    </div>
  );
};

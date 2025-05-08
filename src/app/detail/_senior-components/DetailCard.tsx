"use client";

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Movie } from "@/types/Movie-type";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Star } from "lucide-react";
import { useParams } from "next/navigation";
import { Play } from "lucide-react";

const TMDB_BASE_URL = process.env.TMDB_BASE_URL;
const TMDB_API_TOKEN = process.env.TMDB_API_TOKEN;

export const DetailCard = () => {
  const [movieDetail, setMovieDetail] = useState<Movie | null>(null);
  const { id } = useParams<{ id: string }>();
  console.log(id);

  const getmovieDetail = React.useCallback(async () => {
    try {
      const [detailResponse, videoResponse] = await Promise.all([
        axios.get(`${TMDB_BASE_URL}/movie/${id}?language=en-US`, {
          headers: { Authorization: `Bearer ${TMDB_API_TOKEN}` },
        }),
        axios.get(`${TMDB_BASE_URL}/movie/${id}/videos?language=en-US`, {
          headers: { Authorization: `Bearer ${TMDB_API_TOKEN}` },
        }),
      ]);

      const trailer = videoResponse.data.results.find(
        (vid: { type: string; site: string; key?: string }) =>
          vid.type === "Trailer" && vid.site === "YouTube"
      );

      setMovieDetail({
        ...detailResponse.data,
        trailerKey: trailer?.key ,
      });
    } catch (err) {
      console.error(err);
    }
  }, [id]);
  console.log(movieDetail);

  useEffect(() => {
    getmovieDetail();
  }, [getmovieDetail]);

  const handleTrailerClick = () => {
    if (movieDetail?.trailerKey) {
      window.open(
        `https://www.youtube.com/watch?v=${movieDetail.trailerKey}`,
        "_blank"
      );
    } else {
      alert("trailer not available");
    }
  };

  return (
    <div className="flex justify-center h-screen -mt-20">
      <div
        key={movieDetail?.title}
        className="flex justify-center flex-col w-4/5 self-center"
      >
        <div className="flex justify-between">
          <h1 className="font-bold text-4xl flex self-center">
            {movieDetail?.title}
          </h1>
          <div className="flex items-center gap-1 flex-col">
            <h5 className="text-sm m-0 p-0 flex self-start">Rating</h5>
            <div className="flex flex-row justify-center items-center gap-2">
              <Star className="text-yellow-400 w-4 h-4 fill-yellow-400" />
              {movieDetail?.vote_average}/10
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-[30px]">
          <div>
            <Card
              key={movieDetail?.id}
              className="w-[300px] h-[400px] rounded-[10px] my-5"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w1280${movieDetail?.poster_path}`}
                width={300}
                height={400}
                alt="Picture of the author"
                className="rounded-tr-[10px] rounded-tl-[10px]"
              />
            </Card>
          </div>
          <Image
            src={`https://image.tmdb.org/t/p/w1280${movieDetail?.backdrop_path}`}
            width={1000}
            height={200}
            alt="Picture of the author"
            className="rounded-tr-[10px] rounded-tl-[10px] relative"
          />
          <div className="ml-96 mb-10 absolute flex self-end h-10 w-48 flex-row justify-between items-center">
            <button className=" bg-white h-10 w-10 rounded-full flex justify-center items-center">
              <Play onClick={handleTrailerClick}  className="text-black h-5 w-5"></Play>
            </button>
            <h3 className="text-lg font-medium">
              Play trailer
            </h3>
            <h3 className="text-lg font-medium">1:30</h3>
          </div>
        </div>
        <p className="font-normal text-xl my-4">{movieDetail?.overview}</p>
      </div>
      ;
    </div>
  );
};

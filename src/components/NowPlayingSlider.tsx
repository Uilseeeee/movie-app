"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type NowPlayingSlider = {
    loading : boolean
}

export default function Home() {
  const NowPlayingSlider = (props) => {
  const { test } = props;
  const TMDB_BASE_URL = process.env.TMDB_BASE_URL;
  const TMDB_API_TOKEN = process.env.TMDB_API_TOKEN;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [popularMoviesData, setPopularMoviesData] = useState([]);
  const [nowPlayingData, setNowPlayingData] = useState([]);

  const getMovieData = async () => {
    try {
      const response = await axios.get(
        `${TMDB_BASE_URL}/movie/popular?language=en-US&page=1`,
        {
          headers: {
            Accept: "application.json",
            Authorization: `Bearer ${TMDB_API_TOKEN}`,
          },
        }
      );
      setNowPlayingData(response.data.results);
    } catch (err: unknown) {
      let errorMessage: string;

      if (axios.isAxiosError(err)) {
        console.log(err.response?.data?.status.message);

        errorMessage =
          err.response?.data?.status.message ||
          err.message ||
          setError(errorMessage);
      }
    }
  };
};

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};



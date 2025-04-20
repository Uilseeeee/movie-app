"use client";
import CarouselSlider from "@/components/_components/CarouselSlider";
import PopularMovie from "@/components/_components/PopularMovie";
import TopRatedMovie from "@/components/_components/TopRatedMovie";
import UpcomingMovie from "@/components/_components/UpcomingMovie";

export default function Home() {

  return (
    <div className=" w-screen h-fit">
      <CarouselSlider/>
      <UpcomingMovie/>
      <PopularMovie/>
      <TopRatedMovie/>
    </div>
  );
}

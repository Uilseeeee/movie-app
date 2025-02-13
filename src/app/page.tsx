"use client";
import CarouselSlider from "@/components/senior-components/CarouselSlider";
import PopularMovie from "@/components/senior-components/PopularMovie";
import TopRatedMovie from "@/components/senior-components/TopRatedMovie";
import UpcomingMovie from "@/components/senior-components/UpcomingMovie";

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

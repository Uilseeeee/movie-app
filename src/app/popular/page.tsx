"use client";

import React from "react";
import MovieCardDesktop from "./senior-components/MovieCardDesktop";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useParams } from "next/navigation";
import MovieCard from "./senior-components/MovieCard";

const Page = () => {
  const params = useParams();
  console.log(params);

  return (
    <div className="p-[5px]">
      <div className="md:hidden  flex flex-wrap gap-5 mt-8">
        <div className="w-[100%] max-w-[1175px] flex justify-between items-center mb-5">
          <h3 className="font-semibold text-2xl ">Popular</h3>
        </div>
        <MovieCard />
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious  href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <div className="hidden md:flex w-[100%] flex-col items-center mt-8">
        <div className="w-[100%] max-w-[1230px] flex justify-between items-center mb-5">
          <h3 className="font-semibold text-2xl ">Popular</h3>
        </div>
        <div className="hidden md:flex max-w-[1230px]  md:flex-wrap gap-5">
          <MovieCardDesktop />

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Page;

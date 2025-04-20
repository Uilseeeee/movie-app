"use client";


import React, { useState, useEffect } from "react";
import {
  Film,
  Search,
  Moon,
  Sun,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useTheme } from "next-themes";
import axios from "axios";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  const { setTheme, theme } = useTheme();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<
    { id: number; title: string; poster_path: string | null }[]
  >([]);

  const TMDB_BASE_URL = process.env.TMDB_BASE_URL;
  const TMDB_API_TOKEN = process.env.TMDB_API_TOKEN;

  useEffect(() => {
    const fetchData = async () => {
      if (!query) {
        setResults([]);
        return;
      }

      try {
        const { data } = await axios.get(
          `${TMDB_BASE_URL}/search/movie?query=${encodeURIComponent(
            query
          )}&language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer ${TMDB_API_TOKEN}`,
            },
          }
        );
        setResults(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
        setResults([]);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className="flex justify-center">
      <div className="mx-5 flex items-center justify-between my-5 w-4/5">
        <div className="flex gap-2 text-indigo-700 ">
          <Film />
          <p className="italic font-bold"> Movie Z</p>
        </div>

        <div className="hidden md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex gap-2 py-2 px-4 rounded-md border-gray border">
                <ChevronDown />
                Genre
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <div className="mx-5 my-5 rounded-lg">
                <DropdownMenuLabel>
                  <p className="font-semibold text-2xl">Genres</p>
                  <p className="font-normal text-base">
                    See lists of movies by genre
                  </p>
                </DropdownMenuLabel>
                <div className="flex flex-col gap-4">
                  <DropdownMenuSeparator />
                  <div className="flex gap-4">
                    <DropdownMenuItem className="rounded-full h-[20px] font-semibold text-xs border border-gray">
                      Action <ChevronRight />
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-full h-[20px] font-semibold text-xs border border-gray">
                      Adventure <ChevronRight />
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-full h-[20px] font-semibold text-xs border border-gray">
                      Animation <ChevronRight />
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-full h-[20px] font-semibold text-xs border border-gray">
                      Comedy <ChevronRight />
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-full h-[20px] font-semibold text-xs border border-gray">
                      Crime <ChevronRight />
                    </DropdownMenuItem>
                  </div>
                  <div className="flex gap-4">
                    <DropdownMenuItem className="rounded-full h-[20px] font-semibold text-xs border border-gray">
                      Documentary <ChevronRight />
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-full h-[20px] font-semibold text-xs border border-gray">
                      Drama <ChevronRight />
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-full h-[20px] font-semibold text-xs border border-gray">
                      Family <ChevronRight />
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-full h-[20px] font-semibold text-xs border border-gray">
                      Fantasy <ChevronRight />
                    </DropdownMenuItem>
                  </div>
                  <div className="flex gap-4">
                    <DropdownMenuItem className="rounded-full h-[20px] font-semibold text-xs border border-gray">
                      History <ChevronRight />
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-full h-[20px] font-semibold text-xs border border-gray">
                      Horror <ChevronRight />
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-full h-[20px] font-semibold text-xs border border-gray">
                      Music <ChevronRight />
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-full h-[20px] font-semibold text-xs border border-gray">
                      Mystery <ChevronRight />
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-full h-[20px] font-semibold text-xs border border-gray">
                      Romance <ChevronRight />
                    </DropdownMenuItem>
                  </div>
                  <div className="flex gap-4">
                    <DropdownMenuItem className="rounded-full h-[20px] font-semibold text-xs border border-gray">
                      Science-Fiction <ChevronRight />
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-full h-[20px] font-semibold text-xs border border-gray">
                      TV movie <ChevronRight />
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-full h-[20px] font-semibold text-xs border border-gray">
                      Thriller <ChevronRight />
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-full h-[20px] font-semibold text-xs border border-gray">
                      War <ChevronRight />
                    </DropdownMenuItem>
                  </div>
                  <div className="flex gap-4">
                    <DropdownMenuItem className="rounded-full h-[20px] font-semibold text-xs border border-gray">
                      Western <ChevronRight />
                    </DropdownMenuItem>
                  </div>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="hidden md:flex md:flex-col md:relative md:w-[379px] mx-[10px]">
            <div className="flex items-center rounded-[8px] border md:border-gray px-2">
              <Search className="h-4 w-4" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-[8px] border-0 outline-none"
                placeholder="Search.."
              />
            </div>

            {query && (
              <div className="absolute top-full mt-1 w-full max-h-80 overflow-auto rounded-md border border-gray-200 bg-white shadow-md z-50">
                {Array.isArray(results) && results.length > 0 ? (
                  <ul className="flex flex-col gap-2 p-2">
                    {results.slice(0, 6).map((movie) => (
                      <li
                        key={movie.id}
                        className="flex gap-3 items-center p-2 rounded-md hover:bg-gray-100 transition-all"
                      >
                        <a
                          href={`https://www.themoviedb.org/movie/${movie.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3"
                        >
                          <img
                            src={
                              movie.poster_path
                                ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
                                : "/placeholder.png"
                            }
                            alt={movie.title}
                            className="w-12 h-18 object-cover rounded-md"
                          />
                          <div className="text-sm font-medium text-gray-900">
                            {movie.title}
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-2 text-sm text-gray-500">
                    No results found
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-3">
          <Button variant={"outline"} className="h-9 w-9 md:hidden">
            <Search />
          </Button>
          {theme === "dark" ? (
            <Button
              variant={"outline"}
              className="h-9 w-9"
              onClick={() => setTheme("light")}
            >
              <Sun />
            </Button>
          ) : (
            <Button
              variant={"outline"}
              className="h-9 w-9"
              onClick={() => setTheme("dark")}
            >
              <Moon />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;

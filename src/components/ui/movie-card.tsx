"use client"

import getImagePath from "@/app/utils/get-image-path";
import { Movie } from "../../../typings";
import Image from "next/image";
import { useRouter } from "next/navigation";

function MovieCard({ movie }: { movie: Movie }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/movie/${movie.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="relative flex-shrink-0 cursor-pointer
    transform hover:scale-105 transition duration-200 ease-out"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100/0 via-blue-400/10 to-blue-400 z-10" />
      <p className=" text-white absolute z-20 bottom-5 left-5">{movie.title}</p>
      <Image
        className="w-fit lg:min-w-[400px] h-56 object-cover object-center
        shadow-md shadow-gray-900 drop-shadowl-xl rounded-sm"
        alt={movie.title}
        src={getImagePath(movie.backdrop_path || movie.poster_path)}
        width={1920}
        height={1080}
        key={movie.id}
      />
    </div>
  );
}

export default MovieCard;
